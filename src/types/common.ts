export type LocalGame = {
        title: String,
        sortTitle: String,
        progress: String,
        progressDescription: String,
        consoles: [String],
        image: String,
        playedTimes: Number,
        releaseYear: Number,
        addedDate: Date    
};

const blankGame: LocalGame = {
    title: "",
    sortTitle: "",
    progress: "notStarted",
    progressDescription: "",
    consoles: [""],
    image: "",
    playedTimes: 0,
    releaseYear: 1000,
    addedDate: new Date("2025-01-01")
};