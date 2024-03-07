import * as fs from 'fs';
import * as readline from 'readline-sync';
import { Player } from  "./interface";

const players: Player[] = JSON.parse(fs.readFileSync('players.json', 'utf-8'));

function displayAllPlayers() {
    console.log("All Players:");
    players.forEach(player => {
        console.log(`Speler ID: ${player.id}`);
        console.log(`Naam: ${player.name}`);
        console.log(`Level: ${player.level}`);
        console.log(`Klas: ${player.class.title}`);
        console.log("-----------------------------");
    });
}

function displayPlayerByID(id: string) {
    const player = players.find(player => player.id === id);
    if (player) {
        console.log(`Speler ID: ${player.id}`);
        console.log(`Naam: ${player.name}`);
        console.log(`Level: ${player.level}`);
        console.log(`Klas: ${player.class.title}`);
        console.log("-----------------------------");
    } else {
        console.log(`Speler with ID ${id} not found.`);
    }
}

console.log("Welk wilt u bekijken?");
console.log("1. Alle speler's data");
console.log("2. Specifieke speler's data (per ID)");
console.log("3. Sluiten");
let choice = parseInt(readline.question("keuze: "));

switch  (choice) {
    case 1: 
        displayAllPlayers();
        break;
    case 2: 
        let id = readline.question("Geef het ID in: ");
        displayPlayerByID(id);
        break;
    case 3: 
        console.log("Sluiten...");
        break;
    default: 
        console.log("Geen geldige keuze.");
}