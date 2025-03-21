import { redirect } from "next/navigation";
import { Router } from "next/router";

export const fetchGames = async () => {
    const res = await fetch("http://localhost:3000/api/games");
    const games = await res.json();
    return games; 
}

export const addGame = async (game: any) => {
    const options = {
        method: "PUT",
        body: game
    }

    const res = await fetch("http://localhost:3000/api/games", options);
    return redirect("/");
}