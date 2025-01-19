import React from "react";
import { Button } from "../ui/button";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-12 px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-8">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Link href="https://github.com/Andzuo">
              <Github className="h-6 w-6" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon">
            <Link href={"https://www.linkedin.com/in/anderson-medeiros-dev/"}>
              <Linkedin className="h-6 w-6" />
            </Link>
          </Button>
        </div>
        <p className="text-gray-400">
          © 2024 Anderson Medeiros. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
