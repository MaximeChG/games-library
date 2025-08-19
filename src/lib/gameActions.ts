'use server'
import { LocalGame } from "@/types/common";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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

export async function AddGame(game: LocalGame) {

    await fetch("http://localhost:3000/api/games/game", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(game)
    });

    return revalidatePath("/games");
}

export async function UpdateGame(game: LocalGame, _id: string) {
    await fetch("http://localhost:3000/api/games/game", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ game, _id })
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