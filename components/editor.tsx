"use client"

import * as React from "react"
import EditorJS from "@editorjs/editorjs"

import "@/styles/editor.css"

interface EditorProps {
  value: any,
  onChange: (value: any) => void;
}


export function Editor({ value, onChange }: EditorProps) {
  const ref = React.useRef<EditorJS>()
  const [isMounted, setIsMounted] = React.useState<boolean>(false)

  const initializeEditor = React.useCallback(async () => {
    const EditorJS = (await import("@editorjs/editorjs")).default
    const Header = (await import("@editorjs/header")).default
    const Embed = (await import("@editorjs/embed")).default
    const Table = (await import("@editorjs/table")).default
    const List = (await import("@editorjs/list")).default
    const Code = (await import("@editorjs/code")).default
    const LinkTool = (await import("@editorjs/link")).default
    const InlineCode = (await import("@editorjs/inline-code")).default


    if (!ref.current) {
      const editor = new EditorJS({
        holder: "editor",
        onReady() {
          ref.current = editor
        },
        placeholder: "Type here to write your description...",
        inlineToolbar: true,
        data: value,
        onChange: (api, data) => {
          // Call the onChange function passed from the parent
          console.log(data)
          onChange(data);
        },
        tools: {
          header: Header,
          linkTool: LinkTool,
          list: List,
          code: Code,
          inlineCode: InlineCode,
          table: Table,
          embed: Embed,
        },
      })
    }
  }, [onChange, value])

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true)
    }
  }, [])

  React.useEffect(() => {
    if (isMounted) {
      initializeEditor()

      return () => {
        ref.current?.destroy()
        ref.current = undefined
      }
    }
  }, [isMounted, initializeEditor])

  // const onDataUpdate = (result: any) => {
  //   console.log(result.blocks)
  //   onChange(result.blocks);
  // };


  return (
    <div className="grid w-full gap-10">
      <div className="prose prose-stone mx-auto w-[800px] dark:prose-invert">
        <div id="editor" className="min-h-[500px]" />
        <p className="text-sm text-gray-500">
          Use{" "}
          <kbd className="rounded-md border bg-muted px-1 text-xs uppercase">
            Tab
          </kbd>{" "}
          to open the command menu.
        </p>
      </div>
    </div>
  )
}
