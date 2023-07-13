import { NextResponse } from 'next/server';
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth/next"
import { db } from "@/lib/db"
 
export async function POST(
  req: Request,
) {
  try {
    const session = await getServerSession(authOptions)

    const body = await req.json();

    const { name } = body;

    if (!session) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }
    
    const { user } = session
   
    const category = await db.category.create({
      data: {
        name,
        authorId: user?.id,
      }
    });
  
    return NextResponse.json(category);
  } catch (error) {
    console.log('[CATEGORIES_POST]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};

export async function GET(
  req: Request,
) {
  try {

    const categories = await db.category.findMany();
  
    return NextResponse.json(categories);
  } catch (error) {
    console.log('[CATEGORIES_GET]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};
