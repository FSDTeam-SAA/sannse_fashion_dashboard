"use client";

import React, { useState, useRef, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, X } from "lucide-react";
import Image from "next/image";

interface FabricFormData {
  fabricName: string;
  type: string;
  color: string;
  price: string;
  photo: File | null;
}

const EditFabricPageFrom: React.FC = () => {
  const [formData, setFormData] = useState<FabricFormData>({
    fabricName: "",
    type: "",
    color: "#000000",
    price: "",
    photo: null,
  });

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const colorInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (field: keyof FabricFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFileUpload = useCallback((file: File) => {
    if (file && file.type.startsWith("image/")) {
      setFormData((prev) => ({ ...prev, photo: file }));

      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewUrl(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragOver(false);

      const file = e.dataTransfer.files?.[0];
      if (file) {
        handleFileUpload(file);
      }
    },
    [handleFileUpload]
  );

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const removeImage = () => {
    setFormData((prev) => ({ ...prev, photo: null }));
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setFormData((prev) => ({ ...prev, color: newColor }));
  };

  return (
    <div className="min-h-screen">
      <div className="flex justify-center gap-10">
        {/* Left Side - Form Fields */}
        <div className="space-y-10 w-2/3 bg-white p-6 rounded-lg">
          {/* Fabric Name */}
          <div className="space-y-2">
            <Label
              htmlFor="fabricName"
              className="text-sm font-medium text-gray-900"
            >
              Fabric Name
            </Label>
            <Input
              id="fabricName"
              type="text"
              placeholder="Type Fabric name here..."
              value={formData.fabricName}
              onChange={(e) => handleInputChange("fabricName", e.target.value)}
              className="w-full px-4 h-[51px] border border-gray-500 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Type */}
          <div className="space-y-2">
            <Label htmlFor="type" className="text-sm font-medium text-gray-900">
              Type
            </Label>
            <Input
              id="type"
              type="text"
              placeholder="Type Fabric Type here..."
              value={formData.type}
              onChange={(e) => handleInputChange("type", e.target.value)}
              className="w-full px-4 h-[51px] border border-gray-500 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Color and Price Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Color */}
            <div className="space-y-2 relative">
              <Label
                htmlFor="color"
                className="text-sm font-medium text-gray-900"
              >
                Color
              </Label>
              <div className="relative flex items-center">
                {/* Color input (hidden but functional) */}
                <input
                  id="color"
                  type="color"
                  value={formData.color}
                  onChange={(e) => handleInputChange("color", e.target.value)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-[35px] h-[35px] p-0 border-0 cursor-pointer bg-transparent"
                  style={{ appearance: "none" }}
                />

                {/* Text input showing hex value */}
                <Input
                  type="text"
                  value={formData.color}
                  onChange={(e) => handleInputChange("color", e.target.value)}
                  placeholder="#000000"
                  className="w-full px-4 h-[51px] border border-gray-500 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {showColorPicker && (
                <div className="absolute top-full left-0 mt-2 z-10">
                  <div
                    className="fixed inset-0"
                    onClick={() => setShowColorPicker(false)}
                  />
                  <div className="relative bg-white p-4 rounded-lg shadow-xl border">
                    <input
                      ref={colorInputRef}
                      type="color"
                      value={formData.color}
                      onChange={handleColorChange}
                      className="w-64 h-40 border-0 cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, 
                          hsl(0, 100%, 50%), 
                          hsl(60, 100%, 50%), 
                          hsl(120, 100%, 50%), 
                          hsl(180, 100%, 50%), 
                          hsl(240, 100%, 50%), 
                          hsl(300, 100%, 50%), 
                          hsl(360, 100%, 50%))`,
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Price */}
            <div className="space-y-2">
              <Label
                htmlFor="price"
                className="text-sm font-medium text-gray-900"
              >
                Price
              </Label>
              <Input
                id="price"
                type="text"
                placeholder="Type Fabric Price here..."
                value={formData.price}
                onChange={(e) => handleInputChange("price", e.target.value)}
                className="w-full px-4 h-[51px] border border-gray-500 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Photo Upload */}
        <div className="space-y-2 flex-1 bg-white p-6 rounded-lg">
          <Label className="text-sm font-medium text-gray-900">Photo</Label>
          <Card className="border-2 border-dashed border-gray-300">
            <CardContent className="p-0">
              <div
                className={`relative min-h-[350px] flex flex-col items-center justify-center p-8 cursor-pointer transition-colors ${
                  isDragOver ? "bg-blue-50 border-blue-400" : "hover:bg-gray-50"
                }`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={openFileDialog}
              >
                {previewUrl ? (
                  <div className="relative w-full h-full min-h-[300px]">
                    <Image
                      src={previewUrl}
                      alt="Preview"
                      fill
                      className="object-contain rounded-md"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeImage();
                      }}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                      <Upload className="w-8 h-8 text-pink-500" />
                    </div>
                    <p className="text-gray-600 text-center">
                      Drag and drop image here, or click add image
                    </p>
                  </>
                )}
              </div>
            </CardContent>
          </Card>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileInputChange}
            className="hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default EditFabricPageFrom;
