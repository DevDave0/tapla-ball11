import { useState } from "react";
import { cn } from "../lib/utils";


const roster = [
    //Holy Shot
    {name: "David Chung", PPG: 2, teamName: "Holy Shot"},
    {name: "James Lee", PPG: 6, teamName: "Holy Shot"},
    {name: "Person Kim", PPG: 12, teamName: "Holy Shot"},
    {name: "Person Kim", PPG: 7, teamName: "Holy Shot"},
    {name: "Person Kim", PPG: 20, teamName: "Holy Shot"},
    {name: "Person Kim", PPG: 1, teamName: "Holy Shot"},
    {name: "Person Kim", PPG: 2, teamName: "Holy Shot"},
    {name: "Person Kim", PPG: 3, teamName: "Holy Shot"},
    {name: "Person Kim", PPG: 0, teamName: "Holy Shot"},
    {name: "Person Kim", PPG: 9, teamName: "Holy Shot"},

    


    //The Redeemed Team
    {name: "Jin Bae", PPG: 13, teamName: "The Redeemed Team"},
    {name: "Pastor Charles", PPG: 6, teamName: "The Redeemed Team"},
    {name: "Jay Choi", PPG: 6, teamName: "The Redeemed Team"},
    {name: "James Lee", PPG: 6, teamName: "The Redeemed Team"},
    {name: "Aaron Kim", PPG: 6, teamName: "The Redeemed Team"},



    //Ohana 
    {name: "Tim Jao", PPG: 6, teamName: "Ohana"},
    {name: "Chris Lee", PPG: 6, teamName: "Ohana"},
    {name: "Person Lee", PPG: 6, teamName: "Ohana"},
    {name: "Chris Lee", PPG: 6, teamName: "Ohana"},
    {name: "Chris Lee", PPG: 6, teamName: "Ohana"},
    {name: "Chris Lee", PPG: 6, teamName: "Ohana"},


    //Triple Threats
    {name: "Joon Jang", PPG: 6, teamName: "Triple Threat"},
    {name: "Jinwon", PPG: 6, teamName: "Triple Threat"},

    //Born Again Ballers
    {name: "Mo", PPG: 6, teamName: "Born Again Ballers"},
    {name: "Jon Shen", PPG: 6, teamName: "Born Again Ballers"},

    //YHWH Elite
    {name: "Josh Chung", PPG: 6, teamName: "YHWH Elite"},
    {name: "Daniel Choi", PPG: 6, teamName: "YHWH Elite"},

    //ILB Academy
    {name: "Jeremiah Su", PPG: 21.2, teamName: "ILB Academy"},
    {name: "Rylan Morio", PPG: 6, teamName: "ILB Academy"},

    //Short King of Kings
    {name: "Alex Chi", PPG: 6, teamName: "Short King of Kings"},
    {name: "Doulos Kun", PPG: 6, teamName: "Short King of Kings"},

    //DINKs
    {name: "Jay Won Choi", PPG: 6, teamName: "DINKs"},
    {name: "Max Lee", PPG: 6, teamName: "DINKs"},

    //Justin & DK
    {name: "Justin Son", PPG: 6, teamName: "Overrated"},
    {name: "Daniel Kim", PPG: 6, teamName: "Overrated"},


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

    const top30 = roster
        .sort((a, b) => b.PPG - a.PPG) // 🔽 Sort descending by PPG
        .slice(0, 30);   

    const filteredPlayers = top30.filter(
        (player) => activeTeam === "Top 30" || player.teamName === activeTeam
    );

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
                {filteredPlayers.map((team, key) => (
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