"use client";

import React, { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Upload, Plus } from "lucide-react";
import Image from "next/image";

interface StyleFormData {
  styleName: string;
  typesOfStylesName: string;
  icon: File | null;
}

const EditStylePageFrom: React.FC = () => {
  const [formData, setFormData] = useState<StyleFormData>({
    styleName: "",
    typesOfStylesName: "",
    icon: null,
  });

  const [iconPreviewUrl, setIconPreviewUrl] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (field: keyof StyleFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFileUpload = (file: File) => {
    if (file && file.type.startsWith("image/")) {
      setFormData((prev) => ({ ...prev, icon: file }));

      const reader = new FileReader();
      reader.onload = (e) => {
        setIconPreviewUrl(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const handleAddMore = () => {
    // Add your logic here for adding more items
    console.log("Add More clicked");
  };

  return (
    <div className="min-h-screen">
      <Card className="">
        <CardContent className="">
          {/* Style Name */}
          <div className="space-y-2 mb-10">
            <Label
              htmlFor="styleName"
              className="text-sm font-medium text-gray-900"
            >
              Style Name
            </Label>
            <Input
              id="styleName"
              type="text"
              placeholder="Type Style name here..."
              value={formData.styleName}
              onChange={(e) => handleInputChange("styleName", e.target.value)}
              className="w-full px-4 h-[50px] border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500  text-gray-900 placeholder-gray-500"
            />
          </div>

          <div className="bg-white p-7 rounded-lg">
            <div className="flex justify-center gap-10">
              <div className="col-span-2 space-y-2 w-64">
                <Label className="text-sm font-medium text-gray-900">
                  Icon
                </Label>
                <Card className="border-2 border-dashed border-gray-300 bg-white">
                  <CardContent className="p-0">
                    <div
                      className={`relative h-40 flex flex-col items-center justify-center cursor-pointer transition-colors ${
                        isDragOver
                          ? "bg-blue-50 border-blue-400"
                          : "hover:bg-gray-50"
                      }`}
                      onDrop={handleDrop}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onClick={openFileDialog}
                    >
                      {iconPreviewUrl ? (
                        <div className="relative w-full h-full">
                          <Image
                            src={iconPreviewUrl}
                            alt="Icon Preview"
                            fill
                            className="object-contain rounded"
                          />
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center">
                          <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mb-1">
                            <Upload className="w-4 h-4 text-pink-500" />
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="col-span-9 space-y-2 w-full mt-3">
                <Label
                  htmlFor="typesOfStylesName"
                  className="text-sm font-medium text-gray-900"
                >
                  Types of Styles Name
                </Label>
                <Input
                  id="typesOfStylesName"
                  type="text"
                  placeholder="Type Types of Styles name here..."
                  value={formData.typesOfStylesName}
                  onChange={(e) =>
                    handleInputChange("typesOfStylesName", e.target.value)
                  }
                  className="w-full px-4 h-[50px] border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 placeholder-gray-500"
                />
              </div>
            </div>

            <div className="col-span-1 flex justify-end items-end h-full pt-7">
              <Button
                type="button"
                onClick={handleAddMore}
                className="bg-[#EF1A26] hover:bg-red-600 h-[50px] text-white px-6 py-2 rounded-md font-medium text-sm flex items-center space-x-2 transition-colors"
              >
                <span>Add More</span>
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileInputChange}
            className="hidden"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default EditStylePageFrom;
