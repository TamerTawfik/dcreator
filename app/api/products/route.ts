import { getServerSession } from "next-auth/next"
import * as z from "zod"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"

const productCreateSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
})

export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return new Response("Unauthorized", { status: 403 })
    }

    const { user } = session
    const products = await db.product.findMany({
      select: {
        id: true,
        name: true,
        published: true,
        createdAt: true,
      },
      where: {
        authorId: user.id,
      },
    })

    return new Response(JSON.stringify(products))
  } catch (error) {
    return new Response(null, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return new Response("Unauthorized", { status: 403 })
    }
    
    const json = await req.json()
    const body = productCreateSchema.parse(json)

    const product = await db.product.create({
      data: {
        name: body.name,
        description: body.description,
        authorId: session.user.id,
      },
      select: {
        id: true,
      },
    })

    return new Response(JSON.stringify(product))
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}
