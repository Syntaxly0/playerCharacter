import * as fs from 'fs';
import { Player } from './Player'; // Assuming you have defined the Player interface in a separate file

// Load player data from players.json
const players: Player[] = JSON.parse(fs.readFileSync('players.json', 'utf-8'));

// Function to display all player data
function displayAllPlayers() {
    console.log("All Players:");
    players.forEach(player => {
        console.log(`Player ID: ${player.id}`);
        console.log(`Name: ${player.name}`);
        console.log(`Level: ${player.level}`);
        console.log(`Class: ${player.class.title}`);
        console.log("-----------------------------");
    });
}

// Function to display player data by ID
function displayPlayerById(id: string) {
    const player = players.find(player => player.id === id);
    if (player) {
        console.log(`Player ID: ${player.id}`);
        console.log(`Name: ${player.name}`);
        console.log(`Level: ${player.level}`);
        console.log(`Class: ${player.class.title}`);
        console.log("-----------------------------");
    } else {
        console.log(`Player with ID ${id} not found.`);
    }
}

// Main function to handle user input
function main() {
    console.log("Welcome to the Player Console!");
    let running = true;

    while (running) {
        console.log("\nOptions:");
        console.log("1. Show all player data");
        console.log("2. Show player data by ID");
        console.log("3. Exit");
        const choice = parseInt(prompt("Enter your choice: "));

        switch (choice) {
            case 1:
                displayAllPlayers();
                break;
            case 2:
                const id = prompt("Enter player ID: ");
                displayPlayerById(id);
                break;
            case 3:
                console.log("Exiting...");
                running = false;
                break;
            default:
                console.log("Invalid choice. Please enter a number between 1 and 3.");
        }
    }
}

// Run the main function
main();
