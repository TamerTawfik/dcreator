"use client";

import { UploadButton } from "@/lib/uploadthing";
import Link from "next/link"
import "@uploadthing/react/styles.css";

import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { ImagePlus, Trash } from 'lucide-react';

interface FileUploadProps {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
}

const FileUpload: React.FC<FileUploadProps> = ({
  disabled,
  onChange,
  onRemove,
  value
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [files, setFiles] = useState<{
    fileUrl: string;
    fileKey: string;
}[]>([])

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onUpload = (result: any) => {
    console.log(result)
    onChange(result);
  };

  if (!isMounted) {
    return null;
  }

  const fileList = (
    <>
        <ul>
            {files.map(file => (
                <li key={file.fileUrl} className="mt-2">
                    <Link href={file.fileUrl} target="_blank">
                        {file.fileUrl}
                    </Link>
                </li>
            ))}
        </ul>
    </>
)
  

  return ( 
    <div>
      <div className="mb-4 flex items-center gap-4">
        {value.map((url) => (
          <div key={url} className="relative w-[200px] h-[200px] rounded-md overflow-hidden">
            <div className="z-10 absolute top-2 right-2">
              <Button type="button" onClick={() => onRemove(url)} variant="destructive" size="sm">
                <Trash className="h-4 w-4" />
              </Button>
            </div>
            <Link
              href={url}
            />
          </div>
        ))}
      </div>
      <UploadButton
                    endpoint="fileUploader"
                    onClientUploadComplete={(res) => {
                      if (res) {
                          setFiles(res)
                          onUpload(files.map(file => file.fileUrl))
                          const json = JSON.stringify(res)
                          // Do something with the response
                          console.log(json);
                      }
                      //alert("Upload Completed");
                  }}
                  onUploadError={(error: Error) => {
                      // Do something with the error.
                      alert(`ERROR! ${error.message}`);
                  }}
                  />
                  {fileList}
    </div>
  );
}
 
export default FileUpload;
