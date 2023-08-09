"use client";

import { UploadButton } from "@/lib/uploadthing";
import Link from "next/link"
import "@uploadthing/react/styles.css";

import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Trash } from 'lucide-react';

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

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onUpload = (result: any) => {
    onChange(result);
  };

  if (!isMounted) {
    return null;
  }


  return (
    <div>
      <div className="mb-4 flex items-center gap-4">
        {value.map((url) => (
          <div key={url} className="relative rounded-md">
            <div className="z-10 absolute">
              <Button type="button" onClick={() => onRemove(url)} variant="destructive" size="sm">
                <Trash className="h-4 w-4" />
              </Button>
            </div>
            <Link
              href={url}
            >
              {url}
            </Link>
          </div>
        ))}
      </div>
      <UploadButton
        endpoint="fileUploader"
        onClientUploadComplete={(res) => {
          if (res) {
            const uploadedFileUrl = res[0].fileUrl
            onUpload(uploadedFileUrl)
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
    </div>
  );
}

export default FileUpload;
