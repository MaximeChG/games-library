import dbConnect from "@/lib/mongodb";
import Game from "@/types/games";
import { NextResponse } from "next/server";

export async function GET() {    
    await dbConnect();

    try {
        const games = await Game.find({});

        return NextResponse.json(games);
    }
    catch (errorMessage: any) {
        return NextResponse.json({ error: errorMessage.message});
    }
}

export async function PUT() {    
    await dbConnect();

    try {
        console.log("here");
        return NextResponse.json({success: true});
    }
    catch (errorMessage: any) {
        return NextResponse.json({error: errorMessage.message});
    }
}

export async function PATCH() {    
    await dbConnect();

    try {

    }
    catch (errorMessage: any) {
        return NextResponse.json({error: errorMessage.message});
    }
}

export async function DELETE() {
    await dbConnect();

    try {

    }
    catch (errorMessage: any) {
        return NextResponse.json({error: errorMessage.message});
    }
}