import dbConnect from "@/lib/mongodb";
import { LocalGame } from "@/types/common";
import Game from "@/types/games";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {    
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query');
    
    await dbConnect();

    try {
        const games = query ? await Game.findOne({_id: query}) : await Game.find();

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
        
        await Game.create(data);

        return NextResponse.json({success: true});
    }
    catch (errorMessage: any) {
        return NextResponse.json({error: errorMessage.message});
    }
}

export async function PATCH(req: any, res: NextApiResponse) {    
    await dbConnect();

    const data: LocalGame = await req.json();

    try {
        
        await Game.findByIdAndUpdate({_id: data._id}, data);

        return NextResponse.json({success: true});
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