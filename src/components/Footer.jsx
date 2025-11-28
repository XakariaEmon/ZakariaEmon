import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded-t-lg">
      <div className="flex gap-4">
        <a
          href="https://github.com/XakariaEmon"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost btn-circle text-base-content/70 hover:text-primary hover:scale-110 transition-transform"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/zakariaemon/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost btn-circle text-base-content/70 hover:text-primary hover:scale-110 transition-transform"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href="mailto:jh.emon00@gmail.com"
          className="btn btn-ghost btn-circle text-base-content/70 hover:text-primary hover:scale-110 transition-transform"
        >
          <Mail className="w-6 h-6" />
        </a>
      </div>
      <div>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        <p>Made by Zakaria Emon</p>
      </div>
    </footer>
  );
};

export default Footer;
