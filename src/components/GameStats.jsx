import { AgGridReact } from "ag-grid-react"
import { 
    ModuleRegistry, 
    ValidationModule, 
    ClientSideRowModelModule,
    TextFilterModule,
    NumberFilterModule,
    CustomFilterModule
} from 'ag-grid-community';
import { useEffect, useState } from "react";

ModuleRegistry.registerModules([
    ClientSideRowModelModule,
    ValidationModule,
    TextFilterModule, 
    NumberFilterModule, 
    CustomFilterModule
    // add more modules here as needed
]);

export const GameStats = ({game, setShowGameStats, homeTeamData, awayTeamData}) => {

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


    // Will need to import game stats from backend and then have two separate teamRowData.
    
    // const [teamRowData ] = useState([
    //     {playerName: "placeholder", FG: 0, FGPer: 0, ThreePt: 0, ThreePtPer: 0, FT: 0, FTPer: 0, PF: 0, PTS: 0},
    //     {playerName: "Total", FG: 0, FGPer: 0, ThreePt: 0, ThreePtPer: 0, FT: 0, FTPer: 0, PF: 0, PTS: 0},

    // ]);
    
    const percentFormatter = params =>
  params.value === null || params.value === undefined
    ? ''                       // show blank when no value
    : `${params.value}%`;      // append the symbol

const [colDef] = useState([
  { field: "playerName", pinned: "left", width: 173, headerClass: 'header-center' },

  { field: "PTS",        width: 105, headerClass: 'header-center' },

  { field: "twoPtMade",  width: 90,  headerName: "2PM", headerClass: 'header-center' },
  { field: "twoPtAtt",   width: 90,  headerName: "2PA", headerClass: 'header-center' },
  { field: "TwoPtPer",   width: 90,  headerName: "2P%", headerClass: 'header-center',
    valueFormatter: percentFormatter },

  { field: "threePtMade", width: 90, headerName: "3PM", headerClass: 'header-center' },
  { field: "threePtAtt",  width: 90, headerName: "3PA", headerClass: 'header-center' },
  { field: "ThreePtPer",  width: 90, headerName: "3P%", headerClass: 'header-center',
    valueFormatter: percentFormatter },

  { field: "FG",     width: 105, headerClass: 'header-center' },
  { field: "FGPer",  width: 90,  headerName: "FG%", headerClass: 'header-center',
    valueFormatter: percentFormatter },

  { field: "FT",     width: 105, headerClass: 'header-center' },
  { field: "FTPer",  width: 90,  headerName: "FT%", headerClass: 'header-center',
    valueFormatter: percentFormatter },

  { field: "PF",     width: 90,  headerClass: 'header-center' }
]);

    return (
        <section>
            <div className="text-center mb-6">
                <button className="cosmic-button" onClick={() => setShowGameStats(false)}>
                Back to Schedule
                </button>
            </div>

            <h2 className="lg:text-2xl sm:text-xl mb-8">{game.homeTeamName}</h2>

            <div className="grid gap-6 " style={{ height: 470 }}>
                <AgGridReact
                    key={game.homeTeamName}
                    theme="legacy"
                    className={isDarkMode}
                    rowData={homeTeamData} 
                    columnDefs={colDef}
                        
                />
            </div>
            
            <h2 className="lg:text-2xl sm:text-xl mb-8 mt-8">{game.awayTeamName}</h2>

            <div className="grid gap-6 " style={{ height: 470 }}>
                <AgGridReact
                    key={game.awayTeamName}
                    theme="legacy"
                    className={isDarkMode}
                    rowData={awayTeamData} 
                    columnDefs={colDef}                    
                />
            </div>
        </section>
    );
};