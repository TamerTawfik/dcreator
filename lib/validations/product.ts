import * as z from "zod"

export const productPatchSchema = z.object({
  name: z.string().min(3).max(128).optional(),
  // TODO: Type this properly from editorjs block types?
  description: z.any().optional(),
  images: z.object({ url: z.string() }).array(),
  price: z.coerce.number().min(1),
  categoryId: z.string().min(1),
  isFeatured: z.boolean().default(false).optional(),
  isPublished: z.boolean().default(false).optional()
})
