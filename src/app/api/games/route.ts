import dbConnect from "@/lib/mongodb";
import { LocalGame } from "@/types/common";
import Game from "@/types/games";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

// File for makin calls to database, 
// Called from /lib/gameActions

// Basic Get request for getting 1 game
export async function GET(request: NextRequest) {    
    // grab the params for the 1 game
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query');
    
    await dbConnect();

    try {
        // Check if the game can be found
        const games = query ? await Game.findOne({_id: query}) : await Game.find();

        // return the game
        return NextResponse.json(games);
    }
    catch (errorMessage: any) {
        // return error message. 
        // Should add a message specifying what game could not be found.
        return NextResponse.json({ error: errorMessage.message});
    }
}

