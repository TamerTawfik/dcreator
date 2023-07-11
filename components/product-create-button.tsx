"use client"

import * as React from "react"
import { useRouter } from "next/navigation"

import { cn } from "@/lib/utils"
import { ButtonProps, buttonVariants } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"

interface PostCreateButtonProps extends ButtonProps {}

export function ProductCreateButton({
  className,
  variant,
  ...props
}: PostCreateButtonProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  // async function onClick() {
  //   setIsLoading(true)

  //   const response = await fetch("/api/products", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name: "Untitled Product",
  //     }),
  //   })

  //   setIsLoading(false)

  //   if (!response?.ok) {
      
  //     return toast({
  //       title: "Something went wrong.",
  //       description: "Your Product was not created. Please try again.",
  //       variant: "destructive",
  //     })
  //   }

  //   const product = await response.json()

  //   // This forces a cache invalidation.
  //   router.refresh()

  //   router.push(`/editor/${product.id}`)
  // }

  return (
    <button
      onClick={() => router.push(`/dashboard/products/new`)}
      className={cn(
        buttonVariants({ variant }),
        {
          "cursor-not-allowed opacity-60": isLoading,
        },
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Icons.add className="mr-2 h-4 w-4" />
      )}
      New product
    </button>
  )
}
