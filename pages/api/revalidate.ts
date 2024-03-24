import { NextRequest } from "next/server";

export async function handler(req: NextRequest) {
    try{
       return new Response("Hello, World!");
    }catch(err){
        console.error(err);
        return new Response(err.message, { status: 500 });
    }
}