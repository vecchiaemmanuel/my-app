import React, { Component } from 'react'
import Select from 'react-select'
import logo from './logo labege.png';
import sam2 from './sam2.jpg'
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";

var joueurPicked = {label: 'Samuel', value: 'Vecchia', position: 'CDM', good_foot: "right" };

const team = 
  [
    {label: 'Samuel', value: 'Vecchia', position: 'CDM', good_foot: "right" },
    {label: 'Elias', value: 'Laurens', position: 'CDM', good_foot: "left" },
    {label: 'Quentin', value: 'audez', position: 'LW', good_foot: "left"},
    {label: 'Evan', value: 'Milhavet', position: 'RB', good_foot: "right" },
    {label: 'Hugo', value: 'Dargassies', position: 'CAM', good_foot: "right" },
    {label: 'Paul', value: 'Bonnamy', position: 'CB', good_foot: "left" },
    {label: 'Nathan', value: 'Hypocrat', position: 'LB', good_foot: "right"},
    {label: 'Mahdi', value: 'Liberman', position: 'RB', good_foot: "right" },
    {label: 'Corentin', value: 'Ganderatz', position: 'RW', good_foot: "right" },
    {label: 'Samuel-Noah', value: 'Mbala-Nkelenda', position: 'CB', good_foot: "right" },
    {label: 'Tom', value: 'Preuss', position: 'CM', good_foot: "right" },
    {label: 'Kylian', value: 'Mayaboduarte', position: 'CAM', good_foot: "right"},
    {label: 'Nour', value: 'Tazi', position: 'LB', good_foot: "left" },
    {label: 'Sacha', value: 'Lincetto', position: 'LW', good_foot: "left" },
    {label: 'Alexandre', value: 'Parveau', position: 'ST', good_foot: "left" },
    {label: 'Axel', value: 'Prud homme', position: 'CB', good_foot: "right" },
    {label: 'Alexandre', value: 'Ferjani', position: 'CM', good_foot: "right" },
    {label: 'Flavio', value: 'Cleo', position: 'GK', good_foot: "right"},
    {label: 'Natan', value: 'Milango', position: 'ST', good_foot: "right" },


  ];


function getPlayer (id) {

    const player = team.filter((player) => player.value === id);
    console.log(player);
    joueurPicked =  player;
}

function players() {
  
    return (
  <div>
  <Select options={players}
  onChange={(choice) => getPlayer(choice)}
  />

  
  <h2>Joueur</h2>
    
  <table style={{border: '1px solid', borderColor: 'blue', width: '100%', borderCollapse: 'collapse'}}>
    <tr style={{border: '1px solid', borderColor: 'blue'}}>
      <td style={{border: '1px solid', borderColor: 'blue'}}>Surname</td>
    <td>{joueurPicked.value}</td>
    </tr>
    <tr style={{border: '1px solid', borderColor: 'blue'}}>
      <td style={{border: '1px solid', borderColor: 'blue'}}>Name</td>
    <td>{joueurPicked.label}</td>
    </tr>
    <tr style={{border: '1px solid', borderColor: 'blue'}}>
      <td style={{border: '1px solid', borderColor: 'blue'}}>Position</td>
    <td>{joueurPicked.position}</td>
    </tr>
    <tr style={{border: '1px solid', borderColor: 'blue'}}>
      <td style={{border: '1px solid', borderColor: 'blue'}}>Good_foot</td>
    <td>{joueurPicked.good_foot}</td>
    </tr>

  </table>
  <img src={sam2} alt="React Image" />
  </div>
  )}
  

function home() {
  const log = () => console.log("hello");
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      
   
      
    
  </header> 
</div>
  );
}

function App() {

  return (
    <Router>
       <div>
         <nav>
           <ul>
           <li>
              <Link to="/">Home</Link>
            </li>
            <li>
           <Link to="/players">Players</Link>
             </li>
             <li>
              <Link to="https://www.fff.fr/competition/club/590591-labege-football-club/equipe/2023165623U1510/resultats-et-calendrier.html" >Results</Link>
             </li>
             <li>
           <Link to="https://labegeinterfc.fr/">Club</Link>
             </li>
         </ul>
       </nav>
       <Routes>
        <Route path="/players" Component={players} />

        <Route path="/"  Component={home}/>
        </Routes>
       </div>
   
  
</Router>
);
}


export default App;


