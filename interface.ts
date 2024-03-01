interface Player {
    id: string;
    name: string;
    aboutMe: string;
    level: number;
    isSubbed: boolean;
    birthDate: string;
    imageUrl: string;
    startingCity: string;
    skills: string[];
    class: {
        id: string;
        title: string;
        group: string;
        startingLevel: number;
    };
}

const players: Player[] = [
    // JSON data goes here
];

// Example usage:
players.forEach(player => {
    console.log(`Player ID: ${player.id}`);
    console.log(`Name: ${player.name}`);
    console.log(`Level: ${player.level}`);
    console.log(`Class: ${player.class.title}`);
    console.log("-----------------------------");
});
