import { LocalGame } from "@/types/common";
import { redirect } from "next/navigation";

export const fetchGames = async () => {
    const res = await fetch("http://localhost:3000/api/games", {
        cache: 'no-store'
    });
    const games = await res.json();
    return games;
}

export const fetchGame = async (_id: string) => {
    const res = await fetch(`http://localhost:3000/api/games/game?query=${_id}`, {
        cache: 'no-store'
    });
    const game = await res.json();
    return game;
}

export const addGame = async (game: LocalGame) => {

    await fetch("http://localhost:3000/api/games/game", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(game)
    });

    return redirect("/games");
}

export const updateGame = async (game: LocalGame, _id: string) => {
    await fetch("http://localhost:3000/api/games/game", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({game, _id})
    });
    return redirect("/games");
}

export const deleteGame = async (game: LocalGame) => {

    await fetch("http://localhost:3000/api/games/game", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(game)
    });
    return redirect("/games");
}