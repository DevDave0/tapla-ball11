import { useState } from "react";
import { cn } from "../lib/utils";
import { GameStats } from "./GameStats";


const weeks = [
    "Week 1",
    "Week 2",
    "Week 3",
    "Week 4",
    "Week 5",
    "Week 6",
    "Week 7",
    "Week 8",
    "Week 9",
    "Week 10",
    "Week 11",

];

// example game structure {week: 1, time: "3:30", date: 7/7/25, court: 1, teamName: "Holy Shot", score: 50}

const games = [
    {week: "Week 1", time: "3:30", date: "7/7/25", court: 1, homeTeamName: "Holy Shot", homeTeamScore: 50, awayTeamName: "The Redeemed Team", awayTeamScore: 35 },
    {week: "Week 1", time: "3:30", date: "7/7/25", court: 2, homeTeamName: "DINKs", homeTeamScore: 50, awayTeamName: "The Short King of Kings", awayTeamScore: 35 },
    {week: "Week 1", time: "4:30", date: "7/7/25", court: 1, homeTeamName: "Ohana", homeTeamScore: 50, awayTeamName: "Triple Threats", awayTeamScore: 35},
    {week: "Week 1", time: "4:30", date: "7/7/25", court: 2, homeTeamName: "ILB Academy", homeTeamScore: 50, awayTeamName: "YHWH Elite", awayTeamScore: 35},

    {week: "Week 2", time: "3:30", date: "7/7/25", court: 1, homeTeamName: "Holy Shot", homeTeamScore: 50, awayTeamName: "The Redeemed Team", awayTeamScore: 35 },
    {week: "Week 2", time: "3:30", date: "7/7/25", court: 2, homeTeamName: "DINKs", homeTeamScore: 50, awayTeamName: "The Short King of Kings", awayTeamScore: 35 },
    {week: "Week 2", time: "4:30", date: "7/7/25", court: 1, homeTeamName: "Ohana", homeTeamScore: 50, awayTeamName: "Triple Threats", awayTeamScore: 35},
    {week: "Week 2", time: "4:30", date: "7/7/25", court: 2, homeTeamName: "ILB Academy", homeTeamScore: 50, awayTeamName: "YHWH Elite", awayTeamScore: 35},

    {week: "Week 3", time: "3:30", date: "7/7/25", court: 1, homeTeamName: "Holy Shot", homeTeamScore: 50, awayTeamName: "The Redeemed Team", awayTeamScore: 35 },
    {week: "Week 3", time: "3:30", date: "7/7/25", court: 2, homeTeamName: "DINKs", homeTeamScore: 50, awayTeamName: "The Short King of Kings", awayTeamScore: 35 },
    {week: "Week 3", time: "4:30", date: "7/7/25", court: 1, homeTeamName: "Ohana", homeTeamScore: 50, awayTeamName: "Triple Threats", awayTeamScore: 35},
    {week: "Week 3", time: "4:30", date: "7/7/25", court: 2, homeTeamName: "ILB Academy", homeTeamScore: 50, awayTeamName: "YHWH Elite", awayTeamScore: 35},
];


export const Schedule = () => {

    const [activeWeek, setActiveWeek] = useState("Week 1");
    const [showGameStats, setShowGameStats] = useState(false);
    const [selectedGame, setSelectedGame] = useState(null);


    const filteredGames = games.filter(
        (game) => game.week === activeWeek
    );

    return (
        <section id="schedule" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    <span className="text-primary">Schedule</span>
                </h2>

                {/* weeks */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {weeks.map((week, key) => (
                        <button 
                            key={key} 
                            className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeWeek === week ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                            onClick={() => setActiveWeek(week)}
                        >
                            {week}
                        </button>
                    ))}
                </div>

                {/* games */}

                {showGameStats ? (
                    <GameStats  game={selectedGame}/>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6 ">
                    {filteredGames.map((game, key) => (
                        // show 
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 tilt"></div>
                            <div key={key} className="relative bg-card p-6 rounded-lg shadow-xs card-hover h-auto  ">
                                <div className="text-center">{game.week}</div>
                                <div className="text-center">{game.time} {game.date}</div>
                                <div className="text-center font-bold mb-8">Court {game.court}</div>

                                <div className="flex justify-between items-center mb-12">
                                    {/* Home team (left half) */}
                                    <div className="w-1/2 flex flex-col justify-center items-center h-full">
                                        <h3 className="font-semibold lg:text-2xl mb-8">{game.homeTeamName}</h3>
                                        <p className="text-muted-foreground lg:text-xl">{game.homeTeamScore}</p>
                                    </div>

                                    {/* Away team (right half) */}
                                    <div className="w-1/2 flex flex-col justify-center items-center h-full">
                                        <h3 className="font-semibold lg:text-2xl mb-8">{game.awayTeamName}</h3>
                                        <p className="text-muted-foreground lg:text-xl">{game.awayTeamScore}</p>
                                    </div>
                                </div>

                                <button
                                    className={cn("cosmic-button",
                                    )}
                                    onClick={() => {
                                        setSelectedGame(game);
                                        setShowGameStats(true);
                                    }}
                                >
                                    Game Stats
                                </button>
                                
                            </div>
                        </div>
                    ))}
                </div>
                )}

                


                
            </div>
        </section>
    )
}