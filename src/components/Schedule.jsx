import { useState } from "react";
import { cn } from "../lib/utils";
import { GameStats } from "./GameStats";
import { gameStatsData } from "../data/gameStatsData";


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
    // week 1
    {week: "Week 1", time: "3:30", date: "6/29/25", court: 1, homeTeamName: "Short King of Kings", homeTeamScore: 48, awayTeamName: "Born Again Ballers", awayTeamScore: 22 },
    {week: "Week 1", time: "3:30", date: "6/29/25", court: 2, homeTeamName: "Ohana", homeTeamScore: 54, awayTeamName: "Holy Shot", awayTeamScore: 32 },
    {week: "Week 1", time: "4:30", date: "6/29/25", court: 1, homeTeamName: "Triple Threats", homeTeamScore: 46, awayTeamName: "Overrated", awayTeamScore: 35},
    // week 2
    {week: "Week 2", time: "3:30", date: "7/6/25", court: 1, homeTeamName: "Triple Threats", homeTeamScore: 39, awayTeamName: "DINKs", awayTeamScore: 61 },
    {week: "Week 2", time: "3:30", date: "7/6/25", court: 2, homeTeamName: "Overrated", homeTeamScore: 49, awayTeamName: "YHWH Elite", awayTeamScore: 65 },
    {week: "Week 2", time: "4:30", date: "7/6/25", court: 1, homeTeamName: "The Redeemed Team", homeTeamScore: 57, awayTeamName: "ILB Academy", awayTeamScore: 52},
    // week 3
    {week: "Week 3", time: "3:30", date: "7/13/25", court: 1, homeTeamName: "Short King of Kings", homeTeamScore: 49, awayTeamName: "ILB Academy", awayTeamScore: 35 },
    {week: "Week 3", time: "3:30", date: "7/13/25", court: 2, homeTeamName: "Born Again Ballers", homeTeamScore: 31, awayTeamName: "YHWH Elite", awayTeamScore: 57 },
    {week: "Week 3", time: "4:30", date: "7/13/25", court: 1, homeTeamName: "Holy Shot", homeTeamScore: 34, awayTeamName: "DINKs", awayTeamScore: 43},
    {week: "Week 3", time: "4:30", date: "7/13/25", court: 2, homeTeamName: "Ohana", homeTeamScore: 45, awayTeamName: "The Redeemed Team", awayTeamScore: 34},
    // week 4
    {week: "Week 4", time: "3:30", date: "7/20/25", court: 1, homeTeamName: "Short King of Kings", homeTeamScore: 0, awayTeamName: "Holy Shot", awayTeamScore: 0 },
    {week: "Week 4", time: "3:30", date: "7/20/25", court: 2, homeTeamName: "Ohana", homeTeamScore: 0, awayTeamName: "Overrated", awayTeamScore: 0 },
    {week: "Week 4", time: "4:30", date: "7/20/25", court: 1, homeTeamName: "Born Again Ballers", homeTeamScore: 0, awayTeamName: "ILB Academy", awayTeamScore: 0},
    {week: "Week 4", time: "4:30", date: "7/20/25", court: 2, homeTeamName: "Triple Threats", homeTeamScore: 0, awayTeamName: "YHWH Elite", awayTeamScore: 0},
    // week 5
    {week: "Week 5", time: "3:30", date: "7/27/25", court: 1, homeTeamName: "Short King of Kings", homeTeamScore: 0, awayTeamName: "DINKs", awayTeamScore: 0 },
    {week: "Week 5", time: "3:30", date: "7/27/25", court: 2, homeTeamName: "Born Again Ballers", homeTeamScore: 0, awayTeamName: "Ohana", awayTeamScore: 0 },
    {week: "Week 5", time: "4:30", date: "7/27/25", court: 1, homeTeamName: "Holy Shot", homeTeamScore: 0, awayTeamName: "Triple Threats", awayTeamScore: 0},
    {week: "Week 5", time: "4:30", date: "7/27/25", court: 2, homeTeamName: "The Redeemed Team", homeTeamScore: 0, awayTeamName: "Overrated", awayTeamScore: 0},
    // week 6
    {week: "Week 6", time: "3:30", date: "8/3/25", court: 1, homeTeamName: "The Redeemed Team", homeTeamScore: 0, awayTeamName: "DINKs", awayTeamScore: 0 },
    {week: "Week 6", time: "3:30", date: "8/3/25", court: 2, homeTeamName: "Short King of Kings", homeTeamScore: 0, awayTeamName: "Ohana", awayTeamScore: 0 },
    {week: "Week 6", time: "4:30", date: "8/3/25", court: 1, homeTeamName: "YHWH Elite", homeTeamScore: 0, awayTeamName: "ILB Academy", awayTeamScore: 0},
    {week: "Week 6", time: "4:30", date: "8/3/25", court: 2, homeTeamName: "Born Again Ballers", homeTeamScore: 0, awayTeamName: "Holy Shot", awayTeamScore: 0},
    // week 7
    {week: "Week 7", time: "3:30", date: "8/10/25", court: 1, homeTeamName: "The Redeemed Team", homeTeamScore: 0, awayTeamName: "YHWH Elite", awayTeamScore: 0 },
    {week: "Week 7", time: "3:30", date: "8/10/25", court: 2, homeTeamName: "Born Again Ballers", homeTeamScore: 0, awayTeamName: "Overrated", awayTeamScore: 0 },
    {week: "Week 7", time: "4:30", date: "8/10/25", court: 1, homeTeamName: "Short King of Kings", homeTeamScore: 0, awayTeamName: "Triple Threats", awayTeamScore: 0},
    {week: "Week 7", time: "4:30", date: "8/10/25", court: 2, homeTeamName: "DINKs", homeTeamScore: 0, awayTeamName: "ILB Academy", awayTeamScore: 0},
    // week 8
    {week: "Week 8", time: "3:30", date: "8/17/25", court: 1, homeTeamName: "The Redeemed Team", homeTeamScore: 0, awayTeamName: "Holy Shot ", awayTeamScore: 0 },
    {week: "Week 8", time: "3:30", date: "8/17/25", court: 2, homeTeamName: "DINKs", homeTeamScore: 0, awayTeamName: "YHWH Elite", awayTeamScore: 0 },
    {week: "Week 8", time: "4:30", date: "8/17/25", court: 1, homeTeamName: "Ohana", homeTeamScore: 0, awayTeamName: "Triple Threats", awayTeamScore: 0},
    {week: "Week 8", time: "4:30", date: "8/17/25", court: 2, homeTeamName: "ILB Academy", homeTeamScore: 0, awayTeamName: "Overrated", awayTeamScore: 0},
    // week 9
    {week: "Week 9", time: "3:30", date: "9/7/25", court: 1, homeTeamName: "7th Seed", homeTeamScore: 0, awayTeamName: "8th Seed", awayTeamScore: 0 },
    {week: "Week 9", time: "3:30", date: "9/7/25", court: 2, homeTeamName: "9th Seed", homeTeamScore: 0, awayTeamName: "10th Seed", awayTeamScore: 0 },
    {week: "Week 9", time: "4:30", date: "9/7/25", court: 1, homeTeamName: "L1", homeTeamScore: 0, awayTeamName: "W2", awayTeamScore: 0},
    // week 10
    {week: "Week 10", time: "3:30", date: "9/14/25", court: 1, homeTeamName: "1st Seed", homeTeamScore: 0, awayTeamName: "8th Seed", awayTeamScore: 0 },
    {week: "Week 10", time: "3:30", date: "9/14/25", court: 2, homeTeamName: "2nd Seed", homeTeamScore: 0, awayTeamName: "7th Seed", awayTeamScore: 0 },
    {week: "Week 10", time: "4:30", date: "9/14/25", court: 1, homeTeamName: "3rd Seed", homeTeamScore: 0, awayTeamName: "6th Seed", awayTeamScore: 0},
    {week: "Week 10", time: "4:30", date: "9/14/25", court: 2, homeTeamName: "4th Seed", homeTeamScore: 0, awayTeamName: "5th Seed", awayTeamScore: 0},
        // week 11
    {week: "Week 11", time: "3:30", date: "9/21/25", court: 1, homeTeamName: "W G4", homeTeamScore: 0, awayTeamName: "W G7", awayTeamScore: 0 },
    {week: "Week 11", time: "3:30", date: "9/21/25", court: 2, homeTeamName: "W G5", homeTeamScore: 0, awayTeamName: "W G6", awayTeamScore: 0 },
    {week: "Week 11", time: "4:30", date: "9/21/25", court: 1, homeTeamName: "W G8", homeTeamScore: 0, awayTeamName: "W G9", awayTeamScore: 0},
];


export const Schedule = () => {

    const [activeWeek, setActiveWeek] = useState("Week 1");
    const [showGameStats, setShowGameStats] = useState(false);
    const [selectedGame, setSelectedGame] = useState(null);
    const [homeTeamData, setHomeTeamData] = useState([]);
    const [awayTeamData, setAwayTeamData] = useState([]);

    const filteredGames = games.filter(
        (game) => game.week === activeWeek
    );

    return (
        <section id="schedule" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    <span className="text-primary">Schedule</span>
                </h2>

                {showGameStats ? (
                    <GameStats  
                        setShowGameStats={setShowGameStats}
                        homeTeamData={homeTeamData}
                        awayTeamData={awayTeamData}
                        game={selectedGame}/>
                    
                ): (
                    <>
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
                                            <p className="text-muted-foreground lg:text-l p-1">Home Team - White</p>
                                                <h3 className="font-semibold lg:text-2xl mb-8">{game.homeTeamName}</h3>
                                                <p className="text-muted-foreground lg:text-xl">{game.homeTeamScore}</p>
                                            </div>

                                            {/* Away team (right half) */}
                                            <div className="w-1/2 flex flex-col justify-center items-center h-full">
                                                <p className="text-muted-foreground lg:text-l p-1">Away Team - Dark</p>
                                                <h3 className="font-semibold lg:text-2xl mb-8">{game.awayTeamName}</h3>
                                                <p className="text-muted-foreground lg:text-xl">{game.awayTeamScore}</p>
                                            </div>
                                        </div>

                                        <button
                                            className={cn("cosmic-button",
                                            )}
                                            onClick={() => {
                                                const stats = gameStatsData.find(
                                                    stat =>
                                                        stat.week === game.week &&
                                                        stat.time === game.time &&
                                                        stat.court === game.court
                                                );
                                                setHomeTeamData(stats?.homeTeamData || []);
                                                setAwayTeamData(stats?.awayTeamData || []);
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
                    </>
                )}
            </div>
        </section>
    )
}