import { getServerSession } from "next-auth"
import * as z from "zod"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { productPatchSchema } from "@/lib/validations/product"

const routeContextSchema = z.object({
  params: z.object({
    productId: z.string(),
  }),
})

export async function DELETE(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  try {
    // Validate the route params.
    const { params } = routeContextSchema.parse(context)

    // Check if the user has access to this post.
    if (!(await verifyCurrentUserHasAccessToPost(params.productId))) {
      return new Response(null, { status: 403 })
    }

    // Delete the post.
    await db.product.delete({
      where: {
        id: params.productId as string,
      },
    })

    return new Response(null, { status: 204 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}

export async function PATCH(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  try {
    // Validate route params.
    const { params } = routeContextSchema.parse(context)

    // Check if the user has access to this post.
    if (!(await verifyCurrentUserHasAccessToPost(params.productId))) {
      return new Response(null, { status: 403 })
    }

    // Get the request body and validate it.
    const json = await req.json()
    const body = productPatchSchema.parse(json)

    // Update the product.
    // TODO: Implement sanitization for content.
    await db.product.update({
      where: {
        id: params.productId,
      },
      data: {
        name: body.name,
        description: body.description,
      },
    })

    return new Response(null, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}

async function verifyCurrentUserHasAccessToPost(productId: string) {
  const session = await getServerSession(authOptions)
  const count = await db.product.count({
    where: {
      id: productId,
      authorId: session?.user.id,
    },
  })

  return count > 0
}
