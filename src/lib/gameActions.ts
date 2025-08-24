'use server'
import { StringToArray } from "@/hooks/util";
import { LocalGame } from "@/types/common";
import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function FetchGames() {
    const res = await fetch("http://localhost:3000/api/games", {
        cache: 'no-store'
    });
    const games = await res.json();
    return games;
}

export async function FetchGame(_id: string) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const res = await fetch(`http://localhost:3000/api/games/game?query=${_id}`, {
        cache: 'no-store'
    });
    const game = await res.json();
    return game;
}

export async function AddGame( formData: FormData) {
    //const formDataObj = Object.fromEntries(formData);
    let tempConsoles = formData.get('consoleString');

    if (!tempConsoles){
        tempConsoles = "";
    }
    const _consoles = StringToArray(tempConsoles?.toString()); 
    

    const game: LocalGame = {
        title: formData.get('title') as string,
        sortTitle: formData.get('sortTitle') as string,
        progress: formData.get('progress') as string,
        progressDescription: formData.get('progressDescription') as string,
        consoles: _consoles,
        image: "",
        playedTimes: 0,
        releaseYear: formData.get('releaseYear') as unknown as number,
        addedDate: new Date()
    };

    await new Promise((resolve) => setTimeout(resolve, 5000));  
    await fetch("http://localhost:3000/api/games/game", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(game)
    });

    return revalidatePath("/games");
}

export async function UpdateGame(formData: FormData) {

    //const formDataObj = Object.fromEntries(formData);
    let tempConsoles = formData.get('consoleString');

    if (!tempConsoles){
        tempConsoles = "";
    }
    const _consoles = StringToArray(tempConsoles?.toString()); 
    

    const game: LocalGame = {
        _id: formData.get('id') as string,
        title: formData.get('title') as string,
        sortTitle: formData.get('sortTitle') as string,
        progress: formData.get('progress') as string,
        progressDescription: formData.get('progressDescription') as string,
        consoles: _consoles,
        image: "",
        playedTimes: 0,
        releaseYear: formData.get('releaseYear') as unknown as number,
        addedDate: new Date()
    };

    await fetch("http://localhost:3000/api/games/game", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({game})
    });
    return revalidatePath("/games");
}

export async function DeleteGame(game: LocalGame) {

    await fetch("http://localhost:3000/api/games/game", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(game)
    });
    return revalidatePath("/games");
}