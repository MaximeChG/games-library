import dbConnect from "@/lib/mongodb";
import { LocalGame } from "@/types/common";
import Game from "@/types/games";
import { NextApiRequest, NextApiResponse } from "next";
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

export async function PUT(req: any, res: NextApiResponse) {    
    await dbConnect();

    const data: LocalGame = await req.json();

    try {
        console.log(data);

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