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

export const blankGame: LocalGame = {
    _id: "",
    title: "",
    sortTitle: "",
    progress: "notStarted",
    progressDescription: "",
    consoles: [],
    image: "",
    playedTimes: 0,
    releaseYear: 1000,
    interest: "unknown",
    addedDate: new Date("2025-01-01")
};