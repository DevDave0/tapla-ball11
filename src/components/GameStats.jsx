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

export const GameStats = ({game, setShowGameStats}) => {

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

    const [teamRowData ] = useState([
        {playerName: "David Chung", FG: 7, FGPer: 7, ThreePt: 0, ThreePtPer: 35, FT: 20, FTPer: 10, PF: 5, PTS: 25},
        {playerName: "David Chung", FG: 7, FGPer: 7, ThreePt: 0, ThreePtPer: 35, FT: 20, FTPer: 10, PF: 5, PTS: 25},
        {playerName: "David Chung", FG: 7, FGPer: 7, ThreePt: 0, ThreePtPer: 35, FT: 20, FTPer: 10, PF: 5, PTS: 25},
        {playerName: "David Chung", FG: 7, FGPer: 7, ThreePt: 0, ThreePtPer: 35, FT: 20, FTPer: 10, PF: 5, PTS: 25},
        {playerName: "David Chung", FG: 7, FGPer: 7, ThreePt: 0, ThreePtPer: 35, FT: 20, FTPer: 10, PF: 5, PTS: 25},
        {playerName: "David Chung", FG: 7, FGPer: 7, ThreePt: 0, ThreePtPer: 35, FT: 20, FTPer: 10, PF: 5, PTS: 25},
        {playerName: "David Chung", FG: 7, FGPer: 7, ThreePt: 0, ThreePtPer: 35, FT: 20, FTPer: 10, PF: 5, PTS: 25},
        {playerName: "David Chung", FG: 7, FGPer: 7, ThreePt: 0, ThreePtPer: 35, FT: 20, FTPer: 10, PF: 5, PTS: 25},
        {playerName: "David Chung", FG: 7, FGPer: 7, ThreePt: 0, ThreePtPer: 35, FT: 20, FTPer: 10, PF: 5, PTS: 25},
        {playerName: "Total", FG: 7, FGPer: 7, ThreePt: 0, ThreePtPer: 35, FT: 20, FTPer: 10, PF: 5, PTS: 25},

    ]);
    
    const [colDef ] = useState([
        {field: "playerName", pinned: "left", width: 173, headerClass: 'header-center'},
        {field: "FG", width: 105, headerClass: 'header-center'},
        {field: "FGPer", width: 90, headerName: 'FG%', headerClass: 'header-center'},
        {field: "ThreePt", width: 105, headerName: '3P', headerClass: 'header-center'},
        {field: "ThreePtPer", width: 90, headerName: '3P%', headerClass: 'header-center'},
        {field: "FT", width: 105, headerClass: 'header-center'},
        {field: "FTPer", width: 90, headerName: 'FT%', headerClass: 'header-center'},
        {field: "PF", width: 90, headerClass: 'header-center'},
        {field: "PTS", width: 105, headerClass: 'header-center'},
        {field: "Total", width: 105, headerClass: 'header-center'},

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
                    rowData={teamRowData} 
                    columnDefs={colDef}
                        
                />
            </div>
            
            <h2 className="lg:text-2xl sm:text-xl mb-8 mt-8">{game.awayTeamName}</h2>

            <div className="grid gap-6 " style={{ height: 470 }}>
                <AgGridReact
                    key={game.awayTeamName}
                    theme="legacy"
                    className={isDarkMode}
                    rowData={teamRowData} 
                    columnDefs={colDef}                    
                />
            </div>
        </section>
    );
};