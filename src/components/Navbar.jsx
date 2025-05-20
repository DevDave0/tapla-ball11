import { useEffect, useState } from "react"
import { cn } from "../lib/utils"


const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Stats", href: "#stats"},
    {name: "Schedule", href: "#schedule"},
    {name: "Roster", href: "#roster"},
]

export const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10)
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (
        <nav className={cn("fixed w-full z-40 transition-all duration-300", isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5" )}>
            <div className="container flex items-center justify-between">
                <a className="text-xl font-bold text-primary flex items-center">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Tapestry LA Basketball</span> Season 11 
                    </span>
                </a>
            </div>
        </nav>
    );
};