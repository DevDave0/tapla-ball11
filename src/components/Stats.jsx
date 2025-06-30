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
        {teamName: "Holy Shot", gamesPlayed: 1, wins: 0, losses: 1, pointsPerGame: 32, pointsAllowedPerGame: 54, pointDifferential: -22},
        {teamName: "DINKs", gamesPlayed: 0, wins: 0, losses: 0, pointsPerGame: 0, pointsAllowedPerGame: 0, pointDifferential: 0},
        {teamName: "Short Kings of Kings", gamesPlayed: 1, wins: 1, losses: 0, pointsPerGame: 48, pointsAllowedPerGame: 22, pointDifferential: 26},
        {teamName: "ILB Academy", gamesPlayed: 0, wins: 0, losses: 0, pointsPerGame: 0, pointsAllowedPerGame: 0, pointDifferential: 0},
        {teamName: "YHWH Elite", gamesPlayed: 0, wins: 0, losses: 0, pointsPerGame: 0, pointsAllowedPerGame: 0, pointDifferential: 0},
        {teamName: "The Redeemed Team", gamesPlayed: 0, wins: 0, losses: 0, pointsPerGame: 0, pointsAllowedPerGame: 0, pointDifferential: 0},
        {teamName: "Ohana", gamesPlayed: 1, wins: 1, losses: 0, pointsPerGame: 54, pointsAllowedPerGame: 32, pointDifferential: 22},
        {teamName: "Overrated", gamesPlayed: 1, wins: 0, losses: 1, pointsPerGame: 35, pointsAllowedPerGame: 46, pointDifferential: -11},
        {teamName: "Born Again Ballers", gamesPlayed: 1, wins: 0, losses: 1, pointsPerGame: 22, pointsAllowedPerGame: 48, pointDifferential: -26},
        {teamName: "Triple Threats", gamesPlayed: 1, wins: 1, losses: 0, pointsPerGame: 46, pointsAllowedPerGame: 35, pointDifferential: 11},
    ]);

// Individual Row Data to be displayed
// player data to be imported from back end

    const [playerRowData] = useState([
        {playerName: "David Chung", teamName: "Holy Shot", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "James Lee", teamName: "Holy Shot", gamesPlayed: 1, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 2, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Paul Kim", teamName: "Holy Shot", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Alex Lee", teamName: "Holy Shot", gamesPlayed: 1, points: 6, twoPtMade: 3, twoPtAtt: 4, threePtMade: 0, threePtAtt: 2, FGPer: 50, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Caleb Choi", teamName: "Holy Shot", gamesPlayed: 1, points: 6, twoPtMade: 0, twoPtAtt: 1, threePtMade: 2, threePtAtt: 3, FGPer: 50, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Joshua Park", teamName: "Holy Shot", gamesPlayed: 1, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 1, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Jonathan Ai", teamName: "Holy Shot", gamesPlayed: 1, points: 5, twoPtMade: 1, twoPtAtt: 3, threePtMade: 1, threePtAtt: 1, FGPer: 50, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Brian Shin", teamName: "Holy Shot", gamesPlayed: 1, points: 2, twoPtMade: 1, twoPtAtt: 2, threePtMade: 0, threePtAtt: 1, FGPer: 33.3, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Justin Kyung", teamName: "Holy Shot", gamesPlayed: 1, points: 13, twoPtMade: 5, twoPtAtt: 11, threePtMade: 1, threePtAtt: 1, FGPer: 50, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Aaron Lee", teamName: "Holy Shot", gamesPlayed: 1, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},

    // The Redeemed Team
    {playerName: "Jin Bae", teamName: "The Redeemed Team", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Pastor Charles", teamName: "The Redeemed Team", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Jay Choi", teamName: "The Redeemed Team", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Michael Shon", teamName: "The Redeemed Team", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Benjamin K Lee", teamName: "The Redeemed Team", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Gene Yi", teamName: "The Redeemed Team", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "James Lee", teamName: "The Redeemed Team", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Joe Lee", teamName: "The Redeemed Team", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Peter Bae", teamName: "The Redeemed Team", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Aaron Kim", teamName: "The Redeemed Team", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},

    // Ohana
    {playerName: "Tim Jao", teamName: "Ohana", gamesPlayed: 1, points: 21, twoPtMade: 9, twoPtAtt: 13, threePtMade: 0, threePtAtt: 0, FGPer: 69.2, ftMade: 3, ftAtt: 7, FTPer: 42.9},
    {playerName: "Chris Lee", teamName: "Ohana", gamesPlayed: 1, points: 0, twoPtMade: 0, twoPtAtt: 2, threePtMade: 0, threePtAtt: 1, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Chris Youn", teamName: "Ohana", gamesPlayed: 1, points: 13, twoPtMade: 2, twoPtAtt: 4, threePtMade: 3, threePtAtt: 5, FGPer: 55.6, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Justin Chung", teamName: "Ohana", gamesPlayed: 1, points: 0, twoPtMade: 0, twoPtAtt: 3, threePtMade: 0, threePtAtt: 7, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Timothy Chuman", teamName: "Ohana", gamesPlayed: 1, points: 10, twoPtMade: 5, twoPtAtt: 9, threePtMade: 0, threePtAtt: 2, FGPer: 45.4, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Christian Clark", teamName: "Ohana", gamesPlayed: 1, points: 0, twoPtMade: 0, twoPtAtt: 5, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Kevin Ra", teamName: "Ohana", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Michael Ruan", teamName: "Ohana", gamesPlayed: 1, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 1, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Sam Kim", teamName: "Ohana", gamesPlayed: 1, points: 10, twoPtMade: 5, twoPtAtt: 6, threePtMade: 0, threePtAtt: 2, FGPer: 62.5, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Katie Wong", teamName: "Ohana", gamesPlayed: 1, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 4, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},

    // Triple Threat
    {playerName: "Joon Jang", teamName: "Triple Threat", gamesPlayed: 1, points: 6, twoPtMade: 1, twoPtAtt: 1, threePtMade: 1, threePtAtt: 2, FGPer: 66.7, ftMade: 1, ftAtt: 4, FTPer: 25},
    {playerName: "Richard Yoon", teamName: "Triple Threat", gamesPlayed: 1, points: 9, twoPtMade: 3, twoPtAtt: 3, threePtMade: 1, threePtAtt: 3, FGPer: 66.7, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Aaron Kim", teamName: "Triple Threat", gamesPlayed: 1, points: 11, twoPtMade: 0, twoPtAtt: 1, threePtMade: 3, threePtAtt: 8, FGPer: 33.3, ftMade: 2, ftAtt: 2, FTPer: 100},
    {playerName: "Daniel Yoon", teamName: "Triple Threat", gamesPlayed: 1, points: 10, twoPtMade: 1, twoPtAtt: 5, threePtMade: 2, threePtAtt: 6, FGPer: 27.3, ftMade: 2, ftAtt: 2, FTPer: 100},
    {playerName: "Eric Ko", teamName: "Triple Threat", gamesPlayed: 1, points: 6, twoPtMade: 1, twoPtAtt: 4, threePtMade: 1, threePtAtt: 2, FGPer: 33.3, ftMade: 1, ftAtt: 2, FTPer: 50},
    {playerName: "Jin Park", teamName: "Triple Threat", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Anthony Kim", teamName: "Triple Threat", gamesPlayed: 1, points: 2, twoPtMade: 1, twoPtAtt: 1, threePtMade: 0, threePtAtt: 2, FGPer: 33.3, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Nathan Suh", teamName: "Triple Threat", gamesPlayed: 1, points: 0, twoPtMade: 0, twoPtAtt: 3, threePtMade: 0, threePtAtt: 1, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Joshua Park", teamName: "Triple Threat", gamesPlayed: 1, points: 2, twoPtMade: 1, twoPtAtt: 2, threePtMade: 0, threePtAtt: 0, FGPer: 50, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Angeline Quach", teamName: "Triple Threat", gamesPlayed: 1, points: 0, twoPtMade: 0, twoPtAtt: 1, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},

    // Born Again Ballers
    {playerName: "Jonathan Mo", teamName: "Born Again Ballers", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Jon Shen", teamName: "Born Again Ballers", gamesPlayed: 1, points: 8, twoPtMade: 1, twoPtAtt: 6, threePtMade: 2, threePtAtt: 8, FGPer: 21.4, ftMade: 0, ftAtt: 1, FTPer: 0},
    {playerName: "Ethan Chien", teamName: "Born Again Ballers", gamesPlayed: 1, points: 5, twoPtMade: 0, twoPtAtt: 3, threePtMade: 1, threePtAtt: 6, FGPer: 11.1, ftMade: 2, ftAtt: 2, FTPer: 100},
    {playerName: "Joshua Yoon", teamName: "Born Again Ballers", gamesPlayed: 1, points: 3, twoPtMade: 0, twoPtAtt: 1, threePtMade: 1, threePtAtt: 3, FGPer: 25, ftMade: 0, ftAtt: 2, FTPer: 0},
    {playerName: "Daniel Weon", teamName: "Born Again Ballers", gamesPlayed: 1, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 2, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Enoch Chung", teamName: "Born Again Ballers", gamesPlayed: 1, points: 2, twoPtMade: 1, twoPtAtt: 1, threePtMade: 0, threePtAtt: 1, FGPer: 50, ftMade: 0, ftAtt: 2, FTPer: 0},
    {playerName: "Brian Kim", teamName: "Born Again Ballers", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Joseph Choi", teamName: "Born Again Ballers", gamesPlayed: 1, points: 2, twoPtMade: 1, twoPtAtt: 2, threePtMade: 0, threePtAtt: 0, FGPer: 50, ftMade: 0, ftAtt: 4, FTPer: 0},
    {playerName: "Paul Ko", teamName: "Born Again Ballers", gamesPlayed: 1, points: 0, twoPtMade: 0, twoPtAtt: 3, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Peter Yu", teamName: "Born Again Ballers", gamesPlayed: 1, points: 2, twoPtMade: 1, twoPtAtt: 3, threePtMade: 0, threePtAtt: 0, FGPer: 33.3, ftMade: 0, ftAtt: 0, FTPer: 0},

    // YHWH Elite
    {playerName: "Daniel Choi", teamName: "YHWH Elite", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Joshua Chung", teamName: "YHWH Elite", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Stephen Min", teamName: "YHWH Elite", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Dylan Wong", teamName: "YHWH Elite", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Corrie Wong", teamName: "YHWH Elite", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Jonathan Lee", teamName: "YHWH Elite", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Joshua Chuang", teamName: "YHWH Elite", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Aaron Woo", teamName: "YHWH Elite", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Josh Jeung", teamName: "YHWH Elite", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Noah Choe", teamName: "YHWH Elite", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},

     {playerName: "Jeremiah Su", teamName: "ILB Academy", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Rylan Morio", teamName: "ILB Academy", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Austin Lin", teamName: "ILB Academy", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Caleb Yoon", teamName: "ILB Academy", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Evan Yang", teamName: "ILB Academy", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Brayden Chen", teamName: "ILB Academy", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Jeremy Kim", teamName: "ILB Academy", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Noah Somphone", teamName: "ILB Academy", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Ryan Lee", teamName: "ILB Academy", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Sharon Lee", teamName: "ILB Academy", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},

    // Short King of Kings
    {playerName: "Alex Chi", teamName: "Short King of Kings", gamesPlayed: 1, points: 3, twoPtMade: 1, twoPtAtt: 5, threePtMade: 0, threePtAtt: 0, FGPer: 50, ftMade: 1, ftAtt: 2, FTPer: 50},
    {playerName: "Doulos Kun", teamName: "Short King of Kings", gamesPlayed: 1, points: 11, twoPtMade: 1, twoPtAtt: 2, threePtMade: 3, threePtAtt: 4, FGPer: 66.7, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Jun Kim", teamName: "Short King of Kings", gamesPlayed: 1, points: 12, twoPtMade: 4, twoPtAtt: 10, threePtMade: 1, threePtAtt: 3, FGPer: 38.5, ftMade: 1, ftAtt: 2, FTPer: 50},
    {playerName: "Jonathan Lin", teamName: "Short King of Kings", gamesPlayed: 1, points: 0, twoPtMade: 0, twoPtAtt: 1, threePtMade: 0, threePtAtt: 3, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Joshua Park", teamName: "Short King of Kings", gamesPlayed: 1, points: 9, twoPtMade: 3, twoPtAtt: 6, threePtMade: 1, threePtAtt: 6, FGPer: 33.3, ftMade: 0, ftAtt: 1, FTPer: 0},
    {playerName: "Edward Jung", teamName: "Short King of Kings", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Stuart Mar", teamName: "Short King of Kings", gamesPlayed: 0, points: 0   , twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Tae Kim", teamName: "Short King of Kings", gamesPlayed: 1, points: 9, twoPtMade: 3, twoPtAtt: 3, threePtMade: 1, threePtAtt: 2, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Timothy Chong", teamName: "Short King of Kings", gamesPlayed: 1, points: 0, twoPtMade: 0, twoPtAtt: 2, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Ryan Gueon", teamName: "Short King of Kings", gamesPlayed: 1, points: 4, twoPtMade: 2, twoPtAtt: 8, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},

    // DINKs
    {playerName: "Jay Won Choi", teamName: "DINKs", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Max Lee", teamName: "DINKs", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Tim Ahn", teamName: "DINKs", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Jeffrey Zhu", teamName: "DINKs", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Josh Kong", teamName: "DINKs", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Aaron Lu", teamName: "DINKs", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Christian Li", teamName: "DINKs", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Robin Choi", teamName: "DINKs", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Stephen Haw", teamName: "DINKs", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Timothy Chiu", teamName: "DINKs", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},

    // Overrated
    {playerName: "Justin Son", teamName: "Overrated", gamesPlayed: 1, points: 16, twoPtMade: 2, twoPtAtt: 6, threePtMade: 3, threePtAtt: 10, FGPer: 31.3, ftMade: 3, ftAtt: 4, FTPer: 75},
    {playerName: "Daniel Kim", teamName: "Overrated", gamesPlayed: 1, points: 9, twoPtMade: 3, twoPtAtt: 7, threePtMade: 1, threePtAtt: 7, FGPer: 28.6, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Nate Lee", teamName: "Overrated", gamesPlayed: 1, points: 5, twoPtMade: 1, twoPtAtt: 5, threePtMade: 1, threePtAtt: 4, FGPer: 22.2, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Timothy Yu", teamName: "Overrated", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Ivan Huang", teamName: "Overrated", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Curtis Ahn", teamName: "Overrated", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Joe Song", teamName: "Overrated", gamesPlayed: 1, points: 2, twoPtMade: 1, twoPtAtt: 4, threePtMade: 0, threePtAtt: 1, FGPer: 20, ftMade: 0, ftAtt: 2, FTPer: 0},
    {playerName: "Juhyeong Mun", teamName: "Overrated", gamesPlayed: 0, points: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Matthew Li", teamName: "Overrated", gamesPlayed: 1, points: 3, twoPtMade: 0, twoPtAtt: 0, threePtMade: 1, threePtAtt: 4, FGPer: 25, ftMade: 0, ftAtt: 0, FTPer: 0},
    {playerName: "Junho Kim", teamName: "Overrated", gamesPlayed: 1, points: 0, twoPtMade: 0, twoPtAtt: 1, threePtMade: 0, threePtAtt: 0, FGPer: 0, ftMade: 0, ftAtt: 0, FTPer: 0}
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
        {field: "FGPer", width: 90, headerName: "FG%", headerClass: 'header-center'},
        {field: "ftMade", width: 90, headerName: "FTM", headerClass: 'header-center'},
        {field: "ftAtt", width: 90, headerName: "FTA", headerClass: 'header-center'},
        {field: "FTPer", width: 90, headerName: "FT%", headerClass: 'header-center'},
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