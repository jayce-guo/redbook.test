import { useDropzone } from "react-dropzone";
import { Button } from "@/components/aily/Button";
import { useState } from "react";

export default function ImageUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    onDrop: acceptedFiles => {
      const file = acceptedFiles[0];
      setFile(file);
      setPreview(URL.createObjectURL(file));
    }
  });

  const handleProcess = () => {
    console.log("Processing image:", file?.name);
  };

  return (
    <div className="mt-4 space-y-4">
      <div 
        {...getRootProps()} 
        className="border-2 border-dashed border-white/30 rounded-lg p-6 text-center cursor-pointer hover:border-white/50 transition-colors"
      >
        <input {...getInputProps()} />
        <p className="text-white/90">
          {preview ? "点击更换图片" : "拖放图片至此或点击上传"}
        </p>
      </div>
      
      {preview && (
        <div className="relative">
          <img 
            src={preview} 
            alt="上传预览" 
            className="rounded-lg object-cover w-full h-48"
          />
          <div className="absolute bottom-2 right-2 space-x-2">
            <Button 
              onClick={handleProcess}
              className="bg-white text-[#FF2442] hover:bg-gray-100"
            >
              智能抠图
            </Button>
            <Button 
              className="bg-white/20 text-white hover:bg-white/30"
              onClick={() => setPreview(null)}
            >
              清除图片
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
