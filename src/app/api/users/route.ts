import dbConnect from "@/lib/dbConnect";
import User from "@/app/models/User";
import { NextResponse } from "next/server";

export async function POST(req: Request){
    const { uid, name, links }: { uid: string, name: string, links: string[] } = await req.json();
    try{
        await dbConnect()
        await User.create({uid,name,links})
        return NextResponse.json({message:"User created successfully"})
    }
    catch(err){
        console.log(err);
        return NextResponse.json({message:"User request failed"})
        
        
    }
    
    

}