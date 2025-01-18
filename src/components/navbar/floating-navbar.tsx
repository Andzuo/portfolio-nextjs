"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavItem {
  name: string;
  link: string;
}

interface FloatingNavProps {
  navItems?: NavItem[];
  className?: string;
}

const defaultNavItems: NavItem[] = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Feedback",
    link: "#feedBack",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

export function FloatingNav({
  navItems = defaultNavItems,
  className,
}: FloatingNavProps) {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.02) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(true);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-black/80 backdrop-blur-sm shadow-lg z-[5000] pr-2 px-8 py-4 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link-${idx}`}
            href={navItem.link}
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector(navItem.link);
              target?.scrollIntoView({ behavior: "smooth" });
            }}
            className={cn(
              "relative text-neutral-50 items-center flex space-x-1 hover:text-neutral-300 transition-colors"
            )}
          >
            {navItem.name === "Contact" ? (
              <button className="border text-sm font-medium relative border-white/[0.2] text-white px-4 py-2 rounded-full overflow-hidden group transition-colors hover:border-white/40">
                <span>{navItem.name}</span>
                <span className="absolute inset-0 border border-transparent rounded-full border-purple-500 transition-colors" />
                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ) : (
              <span className="hidden sm:block text-md font-medium">
                {navItem.name}
              </span>
            )}
          </Link>
        ))}
        {/* <button className="border text-sm font-medium relative border-white/[0.2] text-white px-4 py-2 rounded-full overflow-hidden group transition-colors hover:border-white/40">
          <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px opacity-0 group-hover:opacity-100 transition-opacity" />
        </button> */}
      </motion.div>
    </AnimatePresence>
  );
}
