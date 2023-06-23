import * as z from "zod"

export const productPatchSchema = z.object({
  name: z.string().min(3).max(128).optional(),

  // TODO: Type this properly from editorjs block types?
  description: z.any().optional(),
})
