import { LocalGame } from "@/types/common";
import { redirect } from "next/navigation";

export const fetchGames = async () => {
    const res = await fetch("http://localhost:3000/api/games");
    const games = await res.json();
    console.log(games);
    return games; 
}

export const fetchGame = async (_id: string) => {
    const res = await fetch(`http://localhost:3000/api/games?query=${_id}`);
    const game = await res.json();
    return game;
}

export const addGame = async (game: LocalGame) => {

    await fetch("http://localhost:3000/api/games", {
        method: "put",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(game)
    });
    return redirect("/");
}

export const updateGame = async (game: LocalGame) => {
    await fetch("http://localhost:3000/api/games", {
        method: "patch",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(game)
    });
    return redirect("/");
}