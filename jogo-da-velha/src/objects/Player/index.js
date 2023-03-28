import React from "react";
import playerX from '../../img/player-x.png';
import playerO from '../../img/player-o.png';
import "./styles.css";

const Player = (props) => {
    let player = "";
    if (props.player === "x") {
        player = playerX;
    } else if (props.player === "o") {
        player =  playerO;
    } else {
        alert("Jogador não identificado")
    }
    
    return (
        <button className="player">
            <img src={player} alt={`Jogador ${props.player.toUpperCase()}`}/>
        </button>
    )
}

export default Player