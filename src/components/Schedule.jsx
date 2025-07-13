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
    // week 1
    {week: "Week 1", time: "3:30", date: "6/29/25", court: 1, homeTeamName: "Short King of Kings", homeTeamScore: 48, awayTeamName: "Born Again Ballers", awayTeamScore: 22 },
    {week: "Week 1", time: "3:30", date: "6/29/25", court: 2, homeTeamName: "Ohana", homeTeamScore: 54, awayTeamName: "Holy Shot", awayTeamScore: 32 },
    {week: "Week 1", time: "4:30", date: "6/29/25", court: 1, homeTeamName: "Triple Threats", homeTeamScore: 46, awayTeamName: "Overrated", awayTeamScore: 35},
    // week 2
    {week: "Week 2", time: "3:30", date: "7/6/25", court: 1, homeTeamName: "Triple Threats", homeTeamScore: 0, awayTeamName: "DINKs", awayTeamScore: 0 },
    {week: "Week 2", time: "3:30", date: "7/6/25", court: 2, homeTeamName: "Overrated", homeTeamScore: 0, awayTeamName: "YHWH Elite", awayTeamScore: 0 },
    {week: "Week 2", time: "4:30", date: "7/6/25", court: 1, homeTeamName: "The Redeemed Team", homeTeamScore: 0, awayTeamName: "ILB Academy", awayTeamScore: 0},
    // week 3
    {week: "Week 3", time: "3:30", date: "7/13/25", court: 1, homeTeamName: "Short King of Kings", homeTeamScore: 0, awayTeamName: "ILB Academy", awayTeamScore: 0 },
    {week: "Week 3", time: "3:30", date: "7/13/25", court: 2, homeTeamName: "Born Again Ballers", homeTeamScore: 0, awayTeamName: "YHWH Elite", awayTeamScore: 0 },
    {week: "Week 3", time: "4:30", date: "7/13/25", court: 1, homeTeamName: "Holy Shot", homeTeamScore: 0, awayTeamName: "DINKs", awayTeamScore: 0},
    {week: "Week 3", time: "4:30", date: "7/13/25", court: 2, homeTeamName: "Ohana", homeTeamScore: 0, awayTeamName: "The Redeemed Team", awayTeamScore: 0},
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

const gameStatsData = [
    {
  week: "Week 1",
  court: 1,
  time: "3:30",
  homeTeamData: [
    { playerName:"Alex Chi",        PTS:3,  twoPtMade:1, twoPtAtt:5,  TwoPtPer:20.00, threePtMade:0, threePtAtt:0,  ThreePtPer:0.00,  FG:"1/5",  FGPer:20.00, FT:"1/2", FTPer:50.00, PF:2 },
    { playerName:"Doulos Kun",      PTS:11, twoPtMade:1, twoPtAtt:2,  TwoPtPer:50.00, threePtMade:3, threePtAtt:4,  ThreePtPer:75.00, FG:"4/6",  FGPer:66.67, FT:"0/0", FTPer:0.00,  PF:1 },
    { playerName:"Edward Jung",     PTS:0,  twoPtMade:0, twoPtAtt:1,  TwoPtPer:0.00,  threePtMade:0, threePtAtt:0,  ThreePtPer:0.00,  FG:"0/1",  FGPer:0.00,  FT:"0/0", FTPer:0.00,  PF:0 },
    { playerName:"Jonathan Lin",    PTS:0,  twoPtMade:0, twoPtAtt:3,  TwoPtPer:0.00,  threePtMade:0, threePtAtt:0,  ThreePtPer:0.00,  FG:"0/3",  FGPer:0.00,  FT:"0/0", FTPer:0.00,  PF:1 },
    { playerName:"Joshua Park",     PTS:9,  twoPtMade:3, twoPtAtt:6,  TwoPtPer:50.00, threePtMade:1, threePtAtt:1,  ThreePtPer:100.00,FG:"4/7",  FGPer:57.14, FT:"0/0", FTPer:0.00,  PF:2 },
    { playerName:"Jun Kim",         PTS:12, twoPtMade:4, twoPtAtt:10, TwoPtPer:40.00, threePtMade:1, threePtAtt:3,  ThreePtPer:33.33, FG:"5/13", FGPer:38.46, FT:"1/2", FTPer:50.00, PF:2 },
    { playerName:"Ryan Gueon",      PTS:4,  twoPtMade:2, twoPtAtt:4,  TwoPtPer:50.00, threePtMade:0, threePtAtt:0,  ThreePtPer:0.00,  FG:"2/4",  FGPer:50.00, FT:"0/1", FTPer:0.00,  PF:0 },
    { playerName:"Stuart Mar",      PTS:0,  twoPtMade:0, twoPtAtt:3,  TwoPtPer:0.00,  threePtMade:0, threePtAtt:0,  ThreePtPer:0.00,  FG:"0/3",  FGPer:0.00,  FT:"0/0", FTPer:0.00,  PF:1 },
    { playerName:"Tae Kim",         PTS:9,  twoPtMade:3, twoPtAtt:3,  TwoPtPer:100.00,threePtMade:1, threePtAtt:2,  ThreePtPer:50.00, FG:"4/5",  FGPer:80.00, FT:"0/0", FTPer:0.00,  PF:1 },
    { playerName:"Timothy Chong",   PTS:0,  twoPtMade:0, twoPtAtt:1,  TwoPtPer:0.00,  threePtMade:0, threePtAtt:0,  ThreePtPer:0.00,  FG:"0/1",  FGPer:0.00,  FT:"0/0", FTPer:0.00,  PF:1 },
    { playerName:"Total",           PTS:48, twoPtMade:14,twoPtAtt:37, TwoPtPer:37.84, threePtMade:6, threePtAtt:18, ThreePtPer:33.33, FG:"20/55",FGPer:36.36, FT:"2/5", FTPer:40.00, PF:11 }
  ],
  awayTeamData: [
    { playerName:"Brian Kim",   PTS:0, twoPtMade:0, twoPtAtt:0,  TwoPtPer:0.00,  threePtMade:0, threePtAtt:0,  ThreePtPer:0.00, FG:"0/0", FGPer:0.00,  FT:"0/0", FTPer:0.00,  PF:0 },
    { playerName:"Daniel Weon", PTS:0, twoPtMade:0, twoPtAtt:0,  TwoPtPer:0.00,  threePtMade:0, threePtAtt:2,  ThreePtPer:0.00, FG:"0/2", FGPer:0.00,  FT:"0/0", FTPer:0.00,  PF:0 },
    { playerName:"Enoch Chung", PTS:2, twoPtMade:1, twoPtAtt:1,  TwoPtPer:100.00,threePtMade:0, threePtAtt:1,  ThreePtPer:0.00, FG:"1/2", FGPer:50.00,  FT:"0/0", FTPer:0.00,  PF:1 },
    { playerName:"Ethan Chien", PTS:5, twoPtMade:0, twoPtAtt:3,  TwoPtPer:0.00,  threePtMade:1, threePtAtt:6,  ThreePtPer:16.67,FG:"1/9", FGPer:11.11, FT:"2/2", FTPer:100.00,PF:1 },
    { playerName:"Jon Shen",    PTS:8, twoPtMade:1, twoPtAtt:6,  TwoPtPer:16.67, threePtMade:2, threePtAtt:8,  ThreePtPer:25.00,FG:"3/14",FGPer:21.43, FT:"0/1", FTPer:0.00,  PF:1 },
    { playerName:"Jonathan Mo", PTS:0, twoPtMade:0, twoPtAtt:0,  TwoPtPer:0.00,  threePtMade:0, threePtAtt:0,  ThreePtPer:0.00, FG:"0/0", FGPer:0.00,  FT:"0/0", FTPer:0.00,  PF:1 },
    { playerName:"Joshua Yoon", PTS:3, twoPtMade:0, twoPtAtt:1,  TwoPtPer:0.00,  threePtMade:1, threePtAtt:3,  ThreePtPer:33.33,FG:"1/4", FGPer:25.00, FT:"0/2", FTPer:0.00,  PF:1 },
    { playerName:"Joseph Choi", PTS:2, twoPtMade:1, twoPtAtt:2,  TwoPtPer:50.00, threePtMade:0, threePtAtt:0,  ThreePtPer:0.00, FG:"1/2", FGPer:50.00,  FT:"0/4", FTPer:0.00,  PF:1 },
    { playerName:"Paul Ko",     PTS:0, twoPtMade:0, twoPtAtt:3,  TwoPtPer:0.00,  threePtMade:0, threePtAtt:0,  ThreePtPer:0.00, FG:"0/3", FGPer:0.00,  FT:"0/0", FTPer:0.00,  PF:1 },
    { playerName:"Peter Yu",    PTS:2, twoPtMade:1, twoPtAtt:3,  TwoPtPer:33.33, threePtMade:0, threePtAtt:0,  ThreePtPer:0.00, FG:"1/3", FGPer:33.33, FT:"0/0", FTPer:0.00,  PF:1 },
    { playerName:"Total",       PTS:22,twoPtMade:4, twoPtAtt:19, TwoPtPer:21.05, threePtMade:4, threePtAtt:20, ThreePtPer:20.00,FG:"8/39",FGPer:20.51,FT:"2/11",FTPer:18.18,PF:8 }
  ]
},
{
  week: "Week 1",
  court: 2,
  time: "3:30",
  homeTeamData: [
    { playerName:"Chris Lee",        PTS:0,  twoPtMade:0, twoPtAtt:2,  TwoPtPer:0.00,  threePtMade:0, threePtAtt:1,  ThreePtPer:0.00,  FG:"0/3",  FGPer:0.00,  FT:"0/0", FTPer:0.00,  PF:0 },
    { playerName:"Chris Youn",       PTS:13, twoPtMade:2, twoPtAtt:4,  TwoPtPer:50.00, threePtMade:3, threePtAtt:5,  ThreePtPer:60.00, FG:"5/9",  FGPer:55.56, FT:"0/0", FTPer:0.00,  PF:0 },
    { playerName:"Christian Clark",  PTS:0,  twoPtMade:0, twoPtAtt:5,  TwoPtPer:0.00,  threePtMade:0, threePtAtt:0,  ThreePtPer:0.00,  FG:"0/5",  FGPer:0.00,  FT:"0/0", FTPer:0.00,  PF:1 },
    { playerName:"Justin Chung",     PTS:0,  twoPtMade:0, twoPtAtt:3,  TwoPtPer:0.00,  threePtMade:0, threePtAtt:7,  ThreePtPer:0.00,  FG:"0/10", FGPer:0.00,  FT:"0/0", FTPer:0.00,  PF:0 },
    { playerName:"Kevin Ra",         PTS:0,  twoPtMade:0, twoPtAtt:0,  TwoPtPer:0.00,  threePtMade:0, threePtAtt:0,  ThreePtPer:0.00,  FG:"0/0",  FGPer:0.00,  FT:"0/0", FTPer:0.00,  PF:0 },
    { playerName:"Michael Ruan",     PTS:0,  twoPtMade:0, twoPtAtt:0,  TwoPtPer:0.00,  threePtMade:0, threePtAtt:1,  ThreePtPer:0.00,  FG:"0/1",  FGPer:0.00,  FT:"0/0", FTPer:0.00,  PF:0 },
    { playerName:"Sam Kim",          PTS:10, twoPtMade:5, twoPtAtt:6,  TwoPtPer:83.33, threePtMade:0, threePtAtt:2,  ThreePtPer:0.00,  FG:"5/8",  FGPer:62.50, FT:"0/0", FTPer:0.00,  PF:0 },
    { playerName:"Timothy Chuman",   PTS:10, twoPtMade:5, twoPtAtt:9,  TwoPtPer:55.56, threePtMade:0, threePtAtt:2,  ThreePtPer:0.00,  FG:"5/11", FGPer:45.45, FT:"0/0", FTPer:0.00,  PF:0 },
    { playerName:"Tim Jao",          PTS:21, twoPtMade:9, twoPtAtt:13, TwoPtPer:69.23, threePtMade:0, threePtAtt:0,  ThreePtPer:0.00,  FG:"9/13", FGPer:69.23, FT:"3/7", FTPer:42.86, PF:0 },
    { playerName:"Katie Wong",       PTS:0,  twoPtMade:0, twoPtAtt:0,  TwoPtPer:0.00,  threePtMade:0, threePtAtt:4,  ThreePtPer:0.00,  FG:"0/4",  FGPer:0.00,  FT:"0/0", FTPer:0.00,  PF:0 },
    { playerName:"Total",            PTS:54, twoPtMade:21,twoPtAtt:42, TwoPtPer:50.00, threePtMade:3, threePtAtt:22, ThreePtPer:13.64, FG:"24/64",FGPer:37.50, FT:"3/7", FTPer:42.86, PF:1 }
  ],
  awayTeamData: [
    { playerName:"Aaron Lee",   PTS:0,  twoPtMade:0, twoPtAtt:0,  TwoPtPer:0.00,  threePtMade:0, threePtAtt:0,  ThreePtPer:0.00,  FG:"0/0",  FGPer:0.00, FT:"0/0", FTPer:0.00, PF:0 },
    { playerName:"Alex Lee",    PTS:6,  twoPtMade:3, twoPtAtt:4,  TwoPtPer:75.00, threePtMade:0, threePtAtt:2,  ThreePtPer:0.00,  FG:"3/6",  FGPer:50.00, FT:"0/0", FTPer:0.00, PF:3 },
    { playerName:"Brian Shin",  PTS:2,  twoPtMade:1, twoPtAtt:2,  TwoPtPer:50.00, threePtMade:0, threePtAtt:1,  ThreePtPer:0.00,  FG:"1/3",  FGPer:33.33, FT:"0/0", FTPer:0.00, PF:1 },
    { playerName:"Caleb Choi",  PTS:6,  twoPtMade:0, twoPtAtt:1,  TwoPtPer:0.00,  threePtMade:2, threePtAtt:3,  ThreePtPer:66.67, FG:"2/4",  FGPer:50.00, FT:"0/0", FTPer:0.00, PF:0 },
    { playerName:"David Chung", PTS:0,  twoPtMade:0, twoPtAtt:0,  TwoPtPer:0.00,  threePtMade:0, threePtAtt:0,  ThreePtPer:0.00,  FG:"0/0",  FGPer:0.00, FT:"0/0", FTPer:0.00, PF:0 },
    { playerName:"James Lee",   PTS:0,  twoPtMade:0, twoPtAtt:0,  TwoPtPer:0.00,  threePtMade:0, threePtAtt:2,  ThreePtPer:0.00,  FG:"0/2",  FGPer:0.00, FT:"0/0", FTPer:0.00, PF:2 },
    { playerName:"Jonathan Ai", PTS:5,  twoPtMade:1, twoPtAtt:3,  TwoPtPer:33.33, threePtMade:1, threePtAtt:1,  ThreePtPer:100.00,FG:"2/4",  FGPer:50.00, FT:"0/0", FTPer:0.00, PF:1 },
    { playerName:"Joshua Park", PTS:0,  twoPtMade:0, twoPtAtt:0,  TwoPtPer:0.00,  threePtMade:0, threePtAtt:1,  ThreePtPer:0.00,  FG:"0/1",  FGPer:0.00, FT:"0/0", FTPer:0.00, PF:0 },
    { playerName:"Justin Kyung",PTS:13, twoPtMade:5, twoPtAtt:11, TwoPtPer:45.45, threePtMade:1, threePtAtt:1,  ThreePtPer:100.00,FG:"6/12", FGPer:50.00, FT:"0/0", FTPer:0.00, PF:0 },
    { playerName:"Paul Kim",    PTS:0,  twoPtMade:0, twoPtAtt:0,  TwoPtPer:0.00,  threePtMade:0, threePtAtt:0,  ThreePtPer:0.00,  FG:"0/0",  FGPer:0.00, FT:"0/0", FTPer:0.00, PF:0 },
    { playerName:"Total",       PTS:32, twoPtMade:10,twoPtAtt:21, TwoPtPer:47.62, threePtMade:4, threePtAtt:11, ThreePtPer:36.36, FG:"14/32",FGPer:43.75, FT:"0/0", FTPer:0.00, PF:5 }
  ]
},
{
  week: "Week 1",
  court: 1,
  time: "4:30",
  homeTeamData: [
    {
      playerName: "Aaron Kim", PTS: 11, twoPtMade: 0, twoPtAtt: 1, TwoPtPer: 0,
      threePtMade: 3, threePtAtt: 8, ThreePtPer: 37.5, FG: "3/9", FGPer: 33.33,
      FT: "2/2", FTPer: 100, PF: 0
    },
    {
      playerName: "Anthony Kim", PTS: 2, twoPtMade: 1, twoPtAtt: 1, TwoPtPer: 100,
      threePtMade: 0, threePtAtt: 2, ThreePtPer: 0, FG: "1/3", FGPer: 33.33,
      FT: "0/0", FTPer: 0, PF: 2
    },
    {
      playerName: "Daniel Yoon", PTS: 10, twoPtMade: 1, twoPtAtt: 5, TwoPtPer: 20,
      threePtMade: 2, threePtAtt: 6, ThreePtPer: 33.33, FG: "3/11", FGPer: 27.27,
      FT: "2/2", FTPer: 100, PF: 1
    },
    {
      playerName: "Eric Ko", PTS: 6, twoPtMade: 1, twoPtAtt: 4, TwoPtPer: 25,
      threePtMade: 1, threePtAtt: 2, ThreePtPer: 50, FG: "2/6", FGPer: 33.33,
      FT: "1/2", FTPer: 50, PF: 4
    },
    {
      playerName: "Jinwon Park", PTS: 0, twoPtMade: 0, twoPtAtt: 0, TwoPtPer: 0,
      threePtMade: 0, threePtAtt: 0, ThreePtPer: 0, FG: "0/0", FGPer: 0,
      FT: "0/0", FTPer: 0, PF: 0
    },
    {
      playerName: "Joon Jang", PTS: 6, twoPtMade: 1, twoPtAtt: 1, TwoPtPer: 100,
      threePtMade: 1, threePtAtt: 2, ThreePtPer: 50, FG: "2/3", FGPer: 66.67,
      FT: "1/4", FTPer: 25, PF: 0
    },
    {
      playerName: "Joshua Park", PTS: 2, twoPtMade: 1, twoPtAtt: 2, TwoPtPer: 50,
      threePtMade: 0, threePtAtt: 0, ThreePtPer: 0, FG: "1/2", FGPer: 50,
      FT: "0/0", FTPer: 0, PF: 0
    },
    {
      playerName: "Nathan Suh", PTS: 0, twoPtMade: 0, twoPtAtt: 3, TwoPtPer: 0,
      threePtMade: 0, threePtAtt: 0, ThreePtPer: 0, FG: "0/3", FGPer: 0,
      FT: "0/0", FTPer: 0, PF: 1
    },
    {
      playerName: "Richard Yoon", PTS: 9, twoPtMade: 3, twoPtAtt: 3, TwoPtPer: 100,
      threePtMade: 1, threePtAtt: 3, ThreePtPer: 33.33, FG: "4/6", FGPer: 66.67,
      FT: "0/0", FTPer: 0, PF: 2
    },
    {
      playerName: "Angeline Quach", PTS: 0, twoPtMade: 0, twoPtAtt: 1, TwoPtPer: 0,
      threePtMade: 0, threePtAtt: 0, ThreePtPer: 0, FG: "0/1", FGPer: 0,
      FT: "0/0", FTPer: 0, PF: 0
    },
    {
      playerName: "Total", PTS: 46, twoPtMade: 8, twoPtAtt: 21, TwoPtPer: 38.1,
      threePtMade: 8, threePtAtt: 24, ThreePtPer: 33.3, FG: "16/45", FGPer: 35.56,
      FT: "6/10", FTPer: 60, PF: 10
    }
  ],
  awayTeamData: [
    {
      playerName: "Curtis Ahn", PTS: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0,
      TwoPtPer: 0, ThreePtPer: 0, FG: "0/0", FGPer: 0, FT: "0/0", FTPer: 0, PF: 0
    },
    {
      playerName: "DK", PTS: 9, twoPtMade: 3, twoPtAtt: 7, threePtMade: 1, threePtAtt: 7,
      TwoPtPer: 43, ThreePtPer: 14, FG: "4/14", FGPer: 28.57, FT: "0/0", FTPer: 0, PF: 3
    },
    {
      playerName: "Ivan Huang", PTS: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0,
      TwoPtPer: 0, ThreePtPer: 0, FG: "0/0", FGPer: 0, FT: "0/0", FTPer: 0, PF: 0
    },
    {
      playerName: "Joe Song", PTS: 2, twoPtMade: 1, twoPtAtt: 4, threePtMade: 0, threePtAtt: 1,
      TwoPtPer: 25, ThreePtPer: 0, FG: "1/5", FGPer: 20, FT: "0/2", FTPer: 0, PF: 1
    },
    {
      playerName: "Juhyeong Mun", PTS: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0,
      TwoPtPer: 0, ThreePtPer: 0, FG: "0/0", FGPer: 0, FT: "0/0", FTPer: 0, PF: 0
    },
    {
      playerName: "Junho Kim", PTS: 0, twoPtMade: 0, twoPtAtt: 1, threePtMade: 0, threePtAtt: 0,
      TwoPtPer: 0, ThreePtPer: 0, FG: "0/1", FGPer: 0, FT: "0/0", FTPer: 0, PF: 0
    },
    {
      playerName: "Justin Son", PTS: 16, twoPtMade: 2, twoPtAtt: 6, threePtMade: 3, threePtAtt: 10,
      TwoPtPer: 33, ThreePtPer: 30, FG: "5/16", FGPer: 31.25, FT: "3/4", FTPer: 75, PF: 1
    },
    {
      playerName: "Matthew Li", PTS: 3, twoPtMade: 0, twoPtAtt: 1, threePtMade: 1, threePtAtt: 4,
      TwoPtPer: 0, ThreePtPer: 25, FG: "1/5", FGPer: 20, FT: "0/0", FTPer: 0, PF: 1
    },
    {
      playerName: "Nate Lee", PTS: 5, twoPtMade: 1, twoPtAtt: 5, threePtMade: 1, threePtAtt: 4,
      TwoPtPer: 20, ThreePtPer: 25, FG: "2/9", FGPer: 22.22, FT: "0/0", FTPer: 0, PF: 1
    },
    {
      playerName: "Timothy Yu", PTS: 0, twoPtMade: 0, twoPtAtt: 0, threePtMade: 0, threePtAtt: 0,
      TwoPtPer: 0, ThreePtPer: 0, FG: "0/0", FGPer: 0, FT: "0/0", FTPer: 0, PF: 0
    },
    {
      playerName: "Total", PTS: 35, twoPtMade: 7, twoPtAtt: 23, TwoPtPer: 30.4,
      threePtMade: 6, threePtAtt: 26, ThreePtPer: 23.1, FG: "13/49", FGPer: 26.53,
      FT: "3/6", FTPer: 50, PF: 9
    }
  ]
}
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