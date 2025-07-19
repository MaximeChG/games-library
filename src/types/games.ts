import mongoose, { Document, Schema } from "mongoose";

export interface IGame extends Document {
    title: string,
    sortTitle: string,
    consoles: string[],
    progress: string,
    progressDescription: string,
    image: string,
    playedTimes: number,
    releaseYear: number,
    addedDate: Date    
};

const gameSchema: Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    sortTitle: {
        type: String,
        required: true
    },
    consoles: {
        type: [String],
        required: false
    },
    progress: {
        type: String,
        required: true
    },
    progressDescription: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    playedTimes: {
        type: Number,
        required: true
    },
    releaseYear: {
        type: Number,
        required: true
    },
    addedDate: {
        type: Date,
        required: true
    }
});

const Game = mongoose.models.Game || mongoose.model<IGame>('Game', gameSchema); 

export default Game;
