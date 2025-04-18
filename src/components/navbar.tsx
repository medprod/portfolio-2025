import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-auto min-w-[800px] bg-white/80 backdrop-blur-sm z-50 rounded-lg shadow-lg border border-[#FFE8B0]">
      <div className="px-8 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-semibold text-[#8B6B3D] whitespace-nowrap"
        >
          Medha Prodduturi
        </Link>

        <div className="flex items-center gap-6">
          {/* Social Media Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/medha-prodduturi/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-[#FFE8B0]/50 transition-colors"
            >
              <svg
                className="w-5 h-5 text-[#8B6B3D]"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-[#FFE8B0]/50 transition-colors"
            >
              <svg
                className="w-5 h-5 text-[#8B6B3D]"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="mailto:medhaa.prodduturi@gmail.com"
              className="p-2 rounded-md hover:bg-[#FFE8B0]/50 transition-colors"
            >
              <svg
                className="w-5 h-5 text-[#8B6B3D]"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
              </svg>
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              className="text-[#8B6B3D] hover:bg-[#FFE8B0]/50 rounded-md"
              asChild
            >
              <Link href="#about">About</Link>
            </Button>
            <Button
              variant="ghost"
              className="text-[#8B6B3D] hover:bg-[#FFE8B0]/50 rounded-md"
              asChild
            >
              <Link href="#experience">Experience</Link>
            </Button>
            <Button
              variant="ghost"
              className="text-[#8B6B3D] hover:bg-[#FFE8B0]/50 rounded-md"
              asChild
            >
              <Link href="#projects">Projects</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
