import { useEffect, useState } from "react"
import { cn } from "../lib/utils"
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle"; // Adjust the path if needed



const navItems = [
    {name: "Home", href: "#hero"},
    {name: "Overview", href: "#about"},
    {name: "Teams & Players", href: "#roster"},
    {name: "Stats", href: "#stats"},
    {name: "Schedule", href: "#schedule"},
]

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-50 transition-all duration-300",
          isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          <a
            className="text-xl font-bold text-primary flex items-center"
            href="#hero"
          >
            <span className="relative z-10">
              <span className="text-glow text-foreground">Tapestry LA</span> Season 11
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            <ThemeToggle /> 
          </div>

          {/* Mobile nav toggle */}
          <button
            onClick={() => setIsMenuOpen(prev => !prev)}
            className="md:hidden p-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />
          <div className="relative z-10 flex flex-col items-center justify-center gap-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <ThemeToggle />
          </div>
        </div>
      )}
    </>
  );
};
