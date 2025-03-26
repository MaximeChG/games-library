import { LocalGame } from "@/types/common";
import { redirect } from "next/navigation";

export const fetchGames = async () => {
    const res = await fetch("http://localhost:3000/api/games");
    const games = await res.json();
    return games; 
}

export const addGame = async (game: LocalGame) => {

    /*const reqBody = {
        game: game
    };*/
    await fetch("http://localhost:3000/api/games", {
        method: "put",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(game)
    });
    //return redirect("/");
}