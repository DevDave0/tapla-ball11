import { AgGridReact } from "ag-grid-react"
import { cn } from "../lib/utils";
import { ModuleRegistry, ValidationModule, ClientSideRowModelModule } from 'ag-grid-community';
import { useEffect, useState } from "react"
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import "./Stats.css"
import { TextFilterModule } from 'ag-grid-community'; 
import { NumberFilterModule } from 'ag-grid-community'; 
import { CustomFilterModule } from 'ag-grid-community'; 


ModuleRegistry.registerModules([
    ClientSideRowModelModule,
    ValidationModule,
    TextFilterModule, 
    NumberFilterModule, 
    CustomFilterModule
    // add more modules here as needed
]);

export const Stats = () =>{

    useEffect(() => {
        const updateTheme = () => {
          const theme = localStorage.getItem("theme");
          setIsDarkMode(theme === "dark" ? "ag-theme-quartz-dark" : "ag-theme-quartz");
        };
      
        updateTheme();
      
        window.addEventListener("storage", updateTheme); // cross-tab
        window.addEventListener("theme-toggle", updateTheme); // custom event (optional)
      
        return () => {
          window.removeEventListener("storage", updateTheme);
          window.removeEventListener("theme-toggle", updateTheme);
        };
      }, []);


    const [isDarkMode, setIsDarkMode] = useState("");

// Stats category
    const [activeCategory, setActiveCategory] = useState("teams");

    const statsCategory = [
        "teams",
        "players"
    ];

// Team Row Data, Data to be displayed
    const [teamRowData ] = useState([
        {teamName: "Holy Shot", gamesPlayed: 7, wins: 7, losses: 0, pointsPerGame: 35, pointsAllowedPerGame: 20, pointDifferential: 10},
        {teamName: "DINKs", gamesPlayed: 7, wins: 5, losses: 2, pointsPerGame: 30, pointsAllowedPerGame: 10, pointDifferential: 10},
        {teamName: "Short Kings of Kings", gamesPlayed: 6, wins: 6, losses: 0, pointsPerGame: 24, pointsAllowedPerGame: 22, pointDifferential: 10},
        {teamName: "ILB Academy", gamesPlayed: 5, wins: 3, losses: 2, pointsPerGame: 37, pointsAllowedPerGame: 25, pointDifferential: 10},
        {teamName: "YHWH Elite", gamesPlayed: 7, wins: 5, losses: 2, pointsPerGame: 12, pointsAllowedPerGame: 50, pointDifferential: 10},
        {teamName: "The Redeemed Team", gamesPlayed: 7, wins: 7, losses: 0, pointsPerGame: 7, pointsAllowedPerGame: 55, pointDifferential: 10},
        {teamName: "Ohana", gamesPlayed: 7, wins: 7, losses: 0, pointsPerGame: 50, pointsAllowedPerGame: 22, pointDifferential: 10},
        {teamName: "Overrated", gamesPlayed: 7, wins: 7, losses: 0, pointsPerGame: 40, pointsAllowedPerGame: 27, pointDifferential: 10},
        {teamName: "Born Again Ballers", gamesPlayed: 7, wins: 7, losses: 0, pointsPerGame: 23, pointsAllowedPerGame: 21, pointDifferential: 10},
        {teamName: "Triple Threats", gamesPlayed: 7, wins: 7, losses: 0, pointsPerGame: 25, pointsAllowedPerGame: 20 , pointDifferential: 10},
    ]);

// Individual Row Data to be displayed

    const [playerRowData] = useState([
        {playerName: "David Chung", teamName: "Holy Shot", gamesPlayed: 7, points: 70, twoPtMade: 21, twoPtAtt: 50, threePtMade: 10, threePtAtt: 20, ftMade: 10, ftAtt: 10 },
        {playerName: "Jerry Chung", teamName: "Holy Shot", gamesPlayed: 7, points: 70, twoPtMade: 21, twoPtAtt: 50, threePtMade: 10, threePtAtt: 20, ftMade: 10, ftAtt: 10 },
        {playerName: "Dave Chung", teamName: "Holy Shot", gamesPlayed: 7, points: 70, twoPtMade: 21, twoPtAtt: 50, threePtMade: 10, threePtAtt: 20, ftMade: 10, ftAtt: 10 },
        {playerName: "Joe Chung", teamName: "Holy Shot", gamesPlayed: 7, points: 70, twoPtMade: 21, twoPtAtt: 50, threePtMade: 10, threePtAtt: 20, ftMade: 10, ftAtt: 10 },
        {playerName: "Pink Chung", teamName: "Holy Shot", gamesPlayed: 7, points: 70, twoPtMade: 21, twoPtAtt: 50, threePtMade: 10, threePtAtt: 20, ftMade: 10, ftAtt: 10 },
        {playerName: "Blue Chung", teamName: "Holy Shot", gamesPlayed: 7, points: 70, twoPtMade: 21, twoPtAtt: 50, threePtMade: 10, threePtAtt: 20, ftMade: 10, ftAtt: 10 },
        {playerName: "Dr. Mike", teamName: "Ohana", gamesPlayed: 4, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, ftMade: 0, ftAtt: 0},
        {playerName: "Larry Won", teamName: "Prayer Warriors", gamesPlayed: 6, points: 0, twoPtMade: 0, twoPtAtt: 2, threePtMade: 0, threePtAtt: 0, ftMade: 0, ftAtt: 1},
        {playerName: "Gene Yi", teamName: "Redeem Team", gamesPlayed: 6, points: 0, twoPtMade: 0, twoPtAtt: 4, threePtMade: 0, threePtAtt: 4, ftMade: 0, ftAtt: 0},
        {playerName: "Joseph Park", teamName: "Redeem Team", gamesPlayed: 3, points: 0, twoPtMade: 0, twoPtAtt: 4, threePtMade: 0, threePtAtt: 0, ftMade: 0, ftAtt: 0},
        {playerName: "Jose Kim", teamName: "Break the Curse", gamesPlayed: 2, points: 0, twoPtMade: 0, twoPtAtt: 2, threePtMade: 0, threePtAtt: 2, ftMade: 0, ftAtt: 2},
        {playerName: "Jacob Lee", teamName: "Prayer Warriors", gamesPlayed: 3, points: 2, twoPtMade: 1, twoPtAtt: 10, threePtMade: 0, threePtAtt: 4, ftMade: 0, ftAtt: 0},
        {playerName: "Yeung Chung", teamName: "Prayer Warriors", gamesPlayed: 5, points: 2, twoPtMade: 1, twoPtAtt: 5, threePtMade: 0, threePtAtt: 1, ftMade: 0, ftAtt: 0},
        {playerName: "Jonathan Mo", teamName: "Pasta Party", gamesPlayed: 4, points: 2, twoPtMade: 1, twoPtAtt: 1, threePtMade: 0, threePtAtt: 1, ftMade: 0, ftAtt: 0},
        {playerName: "Daniel Weon", teamName: "Nick Fury", gamesPlayed: 6, points: 2, twoPtMade: 1, twoPtAtt: 2, threePtMade: 0, threePtAtt: 4, ftMade: 0, ftAtt: 0},
        {playerName: "Duggy Jeong", teamName: "Nick Fury", gamesPlayed: 5, points: 2, twoPtMade: 1, twoPtAtt: 4, threePtMade: 0, threePtAtt: 6, ftMade: 0, ftAtt: 0},
        {playerName: "Junho Kim", teamName: "Triple Threat", gamesPlayed: 6, points: 2, twoPtMade: 1, twoPtAtt: 5, threePtMade: 0, threePtAtt: 0, ftMade: 0, ftAtt: 2},
        {playerName: "Noah Choe", teamName: "Noah's Arc", gamesPlayed: 6, points: 2, twoPtMade: 1, twoPtAtt: 3, threePtMade: 0, threePtAtt: 2, ftMade: 0, ftAtt: 0},
        {playerName: "Woong Ki Lee", teamName: "Scorinthians", gamesPlayed: 5, points: 3, twoPtMade: 0, twoPtAtt: 1, threePtMade: 1, threePtAtt: 7, ftMade: 0, ftAtt: 0},
        {playerName: "Angeline Quach", teamName: "Scorinthians", gamesPlayed: 6, points: 4, twoPtMade: 2, twoPtAtt: 12, threePtMade: 0, threePtAtt: 0, ftMade: 0, ftAtt: 0},
        {playerName: "Sharon Lee", teamName: "Pasta Party", gamesPlayed: 3, points: 4, twoPtMade: 2, twoPtAtt: 5, threePtMade: 0, threePtAtt: 0, ftMade: 0, ftAtt: 0},
        {playerName: "Paul Ko", teamName: "Ohana", gamesPlayed: 6, points: 5, twoPtMade: 2, twoPtAtt: 11, threePtMade: 0, threePtAtt: 2, ftMade: 1, ftAtt: 4},
        {playerName: "Jonathan Cui", teamName: "Triple Threat", gamesPlayed: 4, points: 5, twoPtMade: 2, twoPtAtt: 6, threePtMade: 0, threePtAtt: 0, ftMade: 1, ftAtt: 2},
        {playerName: "Jason Leung", teamName: "Noah's Arc", gamesPlayed: 4, points: 5, twoPtMade: 2, twoPtAtt: 5, threePtMade: 0, threePtAtt: 7, ftMade: 1, ftAtt: 2},
        {playerName: "Jacob Joe", teamName: "Nick Fury", gamesPlayed: 7, points: 6, twoPtMade: 0, twoPtAtt: 1, threePtMade: 2, threePtAtt: 7, ftMade: 0, ftAtt: 1},
        {playerName: "Mingue Choi", teamName: "Pasta Party", gamesPlayed: 7, points: 7, twoPtMade: 2, twoPtAtt: 15, threePtMade: 1, threePtAtt: 8, ftMade: 0, ftAtt: 0}
    ])

    

// Column Definitions
    const [colDef ] = useState([
        {field: "teamName", pinned: "left", width: 125, headerClass: 'header-center'},
        {field: "gamesPlayed", width: 125, headerClass: 'header-center'},
        {field: "wins", width: 90, headerClass: 'header-center'},
        {field: "losses", width: 90, headerClass: 'header-center'},
        {field: "pointsPerGame", headerName: "PPG", width: 120, headerClass: 'header-center'},
        {field: "pointsAllowedPerGame", headerClass: 'header-center'},
        {field: "pointDifferential", headerClass: 'header-center'},
    ]);

// Player Column Definitions
    const [playerColDef ] = useState([
        {field: "playerName", headerName: "Player", filter: true, pinned: "left", width: 125, headerClass: 'header-center'},
        {field: "teamName", width: 125, headerName: "Team Name", headerClass: 'header-center'}, 
        {field: "gamesPlayed", width: 90, headerName: "GP", headerClass: 'header-center'},
        {field: "points", width: 90, headerName: "Points", headerClass: 'header-center'},
        {field: "twoPtMade", width: 90, headerName: "2PM", headerClass: 'header-center'},
        {field: "twoPtAtt", width: 90, headerName: "2PA", headerClass: 'header-center'},
        {field: "threePtMade", width: 90, headerName: "3PM", headerClass: 'header-center'},
        {field: "threePtAtt", width: 90, headerName: "3PA", headerClass: 'header-center'},
        {field: "ftMade", width: 90, headerName: "FTM", headerClass: 'header-center'},
        {field: "ftAtt", width: 90, headerName: "FTA", headerClass: 'header-center'},
    ]);

    return (
        <section id="stats" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    <span className="text-primary">Stats</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {statsCategory.map((category, key) => (
                        <button 
                            key={key} 
                                className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                                )}
                                onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* tables */}
                {activeCategory === "teams" ? (
                    <div className="grid gap-6 " style={{ height: 400 }}>
                        <AgGridReact
                            key={activeCategory}
                            theme="legacy"
                            className={isDarkMode}
                            rowData={teamRowData} 
                            columnDefs={colDef}
                        
                        />
                    </div>
                ) : (
                    <div className="grid gap-6" style={{ height: 400 }}>
                        <AgGridReact
                            key={activeCategory}
                            theme="legacy"
                            className={isDarkMode}
                            rowData={playerRowData} 
                            columnDefs={playerColDef}
                        
                        />
                    </div>
                )}
            </div>

        </section>
    )
}