export interface Player {
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
