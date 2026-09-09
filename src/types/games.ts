export type PlayState = 'playing' | 'backlog' | 'paused' | 'completed' | 'dropped' | 'finished' | 'na';

export type Interest = 'must-play' | 'very-interested' | 'interested' | 'little-interested' | 'not-interested' | 'na';

export type GameConsoles = [
    { key: 'steam', value: "Steam" },
    { key: 'epicGames', value: "Epic Games" },
    { key: 'pc', value: "PC" },

    { key: 'nes', value: "NES" },
    { key: 'nesMini', value: "NES Mini" },
    { key: 'snesMini', value: "SNES Mini" },
    { key: 'n64', value: "Nintendo 64" },
    { key: 'gcn', value: "GameCube" },
    { key: 'wii', value: "Wii" },
    { key: 'wiiU', value: "Wii U" },
    { key: 'switch', value: "Switch" },
    { key: 'switchO', value: "Switch Online" },
    { key: 'gb', value: "GameBoy" },
    { key: 'gbc', value: "GameBoy Color" },
    { key: 'gba', value: "GameBoy Advance" },
    { key: 'nds', value: "Nintendo DS" },
    { key: 'n3ds', value: "Nintendo 3DS" },

    { key: 'ps1', value: "Playstation 1" },
    { key: 'psMini', value: "Playstation Mini" },
    { key: 'ps2', value: "Playstation 2" },
    { key: 'ps3', value: "Playstation 3" },
    { key: 'ps4', value: "Playstation 4" },
    { key: 'ps5', value: "Playstation 5" },
    { key: 'psn', value: "Playstation Network" },
    { key: 'psp', value: "Playstion Portable" },
    { key: 'pstv', value: "Playstation TV" },

    { key: 'xbox', value: "Xbox" },
    { key: 'xbox360', value: "Xbox 360" },

    { key: 'emulator', value: "Emulator" },
];

export type LocalGame = {
        _id?: string
        title: string,
        sortTitle: string,
        progress: string,
        progressDescription: string | undefined,
        consoles: string[],
        image: string,
        playedTimes: number,
        releaseYear: number,
        interest: string,
        addedDate: Date    
};