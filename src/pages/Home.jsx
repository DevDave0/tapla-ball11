import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "../components/StarBackground"
import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/HeroSection"
import { Schedule } from "../components/Schedule"
import { AboutSection } from "../components/AboutSection"
import { RosterSection } from "../components/RosterSection"
import { Stats } from "../components/Stats"

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Render Theme toggle */}
        <ThemeToggle />
        {/* Handle Background effects */}
        <StarBackground />
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
            <HeroSection />
            <AboutSection />
            <RosterSection />
            <Stats />
            <Schedule />
        </main>

        {/* Footer */}
    </div>
}