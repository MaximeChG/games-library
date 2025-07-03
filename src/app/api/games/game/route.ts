import dbConnect from "@/lib/mongodb";
import { LocalGame } from "@/types/common";
import Game from "@/types/games";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

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

// Function to add the game to the DB
export async function PUT(req: any, res: NextApiResponse) {    
    await dbConnect();

    // Get the game sent as paramater
    const data: LocalGame = await req.json();
    try {
        // Try to create the game, should be await the creation of the game so the app does not proceed until we get ok or error 
        await Game.create(data);

        // return the success
        return NextResponse.json({success: true});
    }
    catch (errorMessage: any) {
        // return error message
        return NextResponse.json({error: errorMessage.message});
    }
}

// Function to edit a game
export async function PATCH(req: any, res: NextApiResponse) {    
    await dbConnect();

    // Grab the new information of the game
    const data: LocalGame = await req.json();

    try {
        // Try to find the game based on the ID send to the function and update with the new data
        await Game.findByIdAndUpdate(data._id, data, {new: false});

        // Return success
        return NextResponse.json({success: true});
    }
    catch (errorMessage: any) {
        // Return error message
        return NextResponse.json({error: errorMessage.message});
    }
}

// Function to delete game
export async function DELETE() {
    await dbConnect();
    // Grab the ID of the game to delete

    try {
        // Find and delete the game based on the id sent

        // return success

    }
    catch (errorMessage: any) {
        // return error message
        return NextResponse.json({error: errorMessage.message});
    }
}