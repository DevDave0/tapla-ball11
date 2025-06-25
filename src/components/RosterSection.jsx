import { useState } from "react";
import { cn } from "../lib/utils";


const roster = [
    //Holy Shot
    {name: "David Chung", PPG: 0, teamName: "Holy Shot"},
    {name: "James Lee", PPG: 0, teamName: "Holy Shot"},
    {name: "Paul Kim", PPG: 0, teamName: "Holy Shot"},
    {name: "Alex Lee", PPG: 0, teamName: "Holy Shot"},
    {name: "Caleb Choi", PPG: 0, teamName: "Holy Shot"},
    {name: "Joshua Park", PPG: 0, teamName: "Holy Shot"},
    {name: "Jonathan Ai", PPG: 0, teamName: "Holy Shot"},
    {name: "Brian Shin", PPG: 0, teamName: "Holy Shot"},
    {name: "Justin Kyung", PPG: 0, teamName: "Holy Shot"},
    {name: "Aaron Lee", PPG: 0, teamName: "Holy Shot"},

    //The Redeemed Team
    {name: "Jin Bae", PPG: 0, teamName: "The Redeemed Team"},
    {name: "Pastor Charles", PPG: 0, teamName: "The Redeemed Team"},
    {name: "Jay Choi", PPG: 0, teamName: "The Redeemed Team"},
    {name: "Michael Shon", PPG: 0, teamName: "The Redeemed Team"},
    {name: "Benjamin K Lee", PPG: 0, teamName: "The Redeemed Team"},
    {name: "Gene Yi", PPG: 0, teamName: "The Redeemed Team"},
    {name: "James Lee", PPG: 0, teamName: "The Redeemed Team"},
    {name: "Joe Lee", PPG: 0, teamName: "The Redeemed Team"},
    {name: "Peter Bae", PPG: 0, teamName: "The Redeemed Team"},
    {name: "Aaron Kim", PPG: 0, teamName: "The Redeemed Team"},

    //Ohana 
    {name: "Tim Jao", PPG: 0, teamName: "Ohana"},
    {name: "Chris Lee", PPG: 0, teamName: "Ohana"},
    {name: "Chris Youn", PPG: 0, teamName: "Ohana"},
    {name: "Justin Chung", PPG: 0, teamName: "Ohana"},
    {name: "Timothy Chuman", PPG: 0, teamName: "Ohana"},
    {name: "Christian Clark", PPG: 0, teamName: "Ohana"},
    {name: "Kevin Ra", PPG: 0, teamName: "Ohana"},
    {name: "Michael Ruan", PPG: 0, teamName: "Ohana"},
    {name: "Sam Kim", PPG: 0, teamName: "Ohana"},
    {name: "Katie Wong", PPG: 0, teamName: "Ohana"},

    //Triple Threats
    {name: "Joon Jang", PPG: 0, teamName: "Triple Threat"},
    {name: "Richard Yoon", PPG: 0, teamName: "Triple Threat"},
    {name: "Aaron Kim", PPG: 0, teamName: "Triple Threat"},
    {name: "Daniel Yoon", PPG: 0, teamName: "Triple Threat"},
    {name: "Eric Ko", PPG: 0, teamName: "Triple Threat"},
    {name: "Jin Park", PPG: 0, teamName: "Triple Threat"},
    {name: "Anthony Kim", PPG: 0, teamName: "Triple Threat"},
    {name: "Nathan Suh", PPG: 0, teamName: "Triple Threat"},
    {name: "Joshua Park", PPG: 0, teamName: "Triple Threat"},
    {name: "Angeline Quach", PPG: 0, teamName: "Triple Threat"},

    //Born Again Ballers
    {name: "Jonathan Mo", PPG: 0, teamName: "Born Again Ballers"},
    {name: "Jon Shen", PPG: 0, teamName: "Born Again Ballers"},
    {name: "Ethan Chien", PPG: 0, teamName: "Born Again Ballers"},
    {name: "Joshua Yoon", PPG: 0, teamName: "Born Again Ballers"},
    {name: "Daniel Weon", PPG: 0, teamName: "Born Again Ballers"},
    {name: "Enoch Chung", PPG: 0, teamName: "Born Again Ballers"},
    {name: "Brian Kim", PPG: 0, teamName: "Born Again Ballers"},
    {name: "Joseph Choi", PPG: 0, teamName: "Born Again Ballers"},
    {name: "Paul Ko", PPG: 0, teamName: "Born Again Ballers"},
    {name: "Peter Yu", PPG: 0, teamName: "Born Again Ballers"},

    //YHWH Elite
    {name: "Daniel Choi", PPG: 0, teamName: "YHWH Elite"},
    {name: "Joshua Chung", PPG: 0, teamName: "YHWH Elite"},
    {name: "Stephen Min", PPG: 0, teamName: "YHWH Elite"},
    {name: "Dylan Wong", PPG: 0, teamName: "YHWH Elite"},
    {name: "Corrie Wong", PPG: 0, teamName: "YHWH Elite"},
    {name: "Jonathan Lee", PPG: 0, teamName: "YHWH Elite"},
    {name: "Joshua Chuang", PPG: 0, teamName: "YHWH Elite"},
    {name: "Aaron Woo", PPG: 0, teamName: "YHWH Elite"},
    {name: "Josh Jeung", PPG: 0, teamName: "YHWH Elite"},
    {name: "Noah Choe", PPG: 0, teamName: "YHWH Elite"},

    //ILB Academy
    {name: "Jeremiah Su", PPG: 0, teamName: "ILB Academy"},
    {name: "Rylan Morio", PPG: 0, teamName: "ILB Academy"},
    {name: "Austin Lin", PPG: 0, teamName: "ILB Academy"},
    {name: "Caleb Yoon", PPG: 0, teamName: "ILB Academy"},
    {name: "Evan Yang", PPG: 0, teamName: "ILB Academy"},
    {name: "Brayden Chen", PPG: 0, teamName: "ILB Academy"},
    {name: "Jeremy Kim", PPG: 0, teamName: "ILB Academy"},
    {name: "Noah Somphone", PPG: 0, teamName: "ILB Academy"},
    {name: "Ryan Lee", PPG: 0, teamName: "ILB Academy"},
    {name: "Sharon Lee", PPG: 0, teamName: "ILB Academy"},

    //Short King of Kings
    {name: "Alex Chi", PPG: 0, teamName: "Short King of Kings"},
    {name: "Doulos Kun", PPG: 0, teamName: "Short King of Kings"},
    {name: "Jun Kim", PPG: 0, teamName: "Short King of Kings"},
    {name: "Jonathan Lin", PPG: 0, teamName: "Short King of Kings"},
    {name: "Joshua Park", PPG: 0, teamName: "Short King of Kings"},
    {name: "Edward Jung", PPG: 0, teamName: "Short King of Kings"},
    {name: "Stuart Mar", PPG: 0, teamName: "Short King of Kings"},
    {name: "Tae Kim", PPG: 0, teamName: "Short King of Kings"},
    {name: "Timothy Chong", PPG: 0, teamName: "Short King of Kings"},
    {name: "Ryan Gueon", PPG: 0, teamName: "Short King of Kings"},

    //DINKs
    {name: "Jay Won Choi", PPG: 0, teamName: "DINKs"},
    {name: "Max Lee", PPG: 0, teamName: "DINKs"},
    {name: "Tim Ahn", PPG: 0, teamName: "DINKs"},
    {name: "Jeffrey Zhu", PPG: 0, teamName: "DINKs"},
    {name: "Josh Kong", PPG: 0, teamName: "DINKs"},
    {name: "Aaron Lu", PPG: 0, teamName: "DINKs"},
    {name: "Christian Li", PPG: 0, teamName: "DINKs"},
    {name: "Robin Choi", PPG: 0, teamName: "DINKs"},
    {name: "Stephen Haw", PPG: 0, teamName: "DINKs"},
    {name: "Timothy Chiu", PPG: 0, teamName: "DINKs"},

    //Justin & DK
    {name: "Justin Son", PPG: 0, teamName: "Overrated"},
    {name: "Daniel Kim", PPG: 0, teamName: "Overrated"},
    {name: "Nate Lee", PPG: 0, teamName: "Overrated"},
    {name: "Timothy Yu", PPG: 0, teamName: "Overrated"},
    {name: "Ivan Huang", PPG: 0, teamName: "Overrated"},
    {name: "Curtis Ahn", PPG: 0, teamName: "Overrated"},
    {name: "Joe Song", PPG: 0, teamName: "Overrated"},
    {name: "Juhyeong Mun", PPG: 0, teamName: "Overrated"},
    {name: "Matthew Li", PPG: 0, teamName: "Overrated"},
    {name: "Junho Kim", PPG: 0, teamName: "Overrated"}
];

const teams = [
    "Top 30",
    "Born Again Ballers",
    "DINKs",
    "Holy Shot",
    "ILB Academy",
    "Overrated",
    "Ohana",
    "Short King of Kings",
    "Triple Threat",
    "The Redeemed Team",
    "YHWH Elite",
];

export const RosterSection = () => {

    const [activeTeam, setActiveTeam] = useState("Top 30");

    const filteredPlayers = roster.filter(
        (player) => activeTeam === "Top 30" || player.teamName === activeTeam
    );

    const top30 = filteredPlayers
        .sort((a, b) => b.PPG - a.PPG) // 🔽 Sort descending by PPG
        .slice(0, 30);   

    return (
    <section id="roster" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Season 11<span className="text-primary"> Players</span>
            </h2>

            {/* Team Names */}

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {teams.map((team, key) => (
                    <button 
                        key={key} 
                        className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeTeam === team ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                        )}
                        onClick={() => setActiveTeam(team)}
                        >
                        {team}
                    </button>
                ))}
            </div>

            {/* List of players */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {top30.map((team, key) => (
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 tilt"></div>
                        <div key={key} className="relative bg-card p-6 rounded-lg shadow-xs card-hover h-30  ">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">
                                    {team.name}
                                </h3>
                            </div>

                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div 
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" 
                                    style={{width: team.PPG + "vh"}}/>
                            </div>

                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{team.PPG} PPG</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    </section>
    );
};