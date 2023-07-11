import { notFound, redirect } from "next/navigation"
import { Product, User } from "@prisma/client"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import { Editor } from "@/components/editor"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


async function getProductForUser(productId: Product["id"], userId: User["id"]) {
  return await db.product.findFirst({
    where: {
      id: productId,
      authorId: userId,
    },
  })
}

interface EditorPageProps {
  params: { productId: string }
}

export default async function EditorPage({ params }: EditorPageProps) {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/")
  }

  const product = await getProductForUser(params.productId, user.id)

  if (!product) {
    notFound()
  }

  return (
    <Tabs defaultValue="description" className="mt-10">
  <TabsList>
    <TabsTrigger value="description">Product Description</TabsTrigger>
    <TabsTrigger value="product">Product details</TabsTrigger>
    <TabsTrigger value="content">Digital Files</TabsTrigger>
  </TabsList>
  <TabsContent value="description">
  <Editor
      product={{
        id: product.id,
        name: product.name,
        description: product.description,
        published: product.published,
      }}
    />
  </TabsContent>
  <TabsContent value="product">Add Product Details.</TabsContent>
  <TabsContent value="content">Add Digital Files.</TabsContent>
</Tabs>    
  )
}
