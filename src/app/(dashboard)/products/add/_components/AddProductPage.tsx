"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { CloudUpload } from "lucide-react";

// Dynamically import ReactQuill with SSR disabled
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const fabricOptions = ["Cotton", "Twill", "Silk", "Wool"];
const categoryOptions = ["Clothing", "Accessories", "Footwear"];
const styleOptions = ["Sleeve Buttons"];
const accentOptions = ["Pocket Square"];

const AddProductPage = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#000000");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [sku, setSku] = useState("");
  const [stock, setStock] = useState("");
  const [defaultFabric, setDefaultFabric] = useState("");
  const [category, setCategory] = useState("");
  const [customFabrics, setCustomFabrics] = useState<string[]>([]);
  const [customStyles, setCustomStyles] = useState<string[]>([]);
  const [customAccents, setCustomAccents] = useState<string[]>([]);
  const [images, setImages] = useState<string[]>([]);

  // Handle multiple image upload with max 5 images total
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const remainingSlots = 5 - images.length;
      const files = Array.from(event.target.files).slice(0, remainingSlots);

      const readers = files.map(
        (file) =>
          new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
              if (reader.result) {
                resolve(reader.result.toString());
              } else {
                reject("File reading failed");
              }
            };
            reader.onerror = () => reject("File reading error");
            reader.readAsDataURL(file);
          })
      );

      Promise.all(readers)
        .then((newImages) => {
          setImages((prev) => [...prev, ...newImages].slice(0, 5));
        })
        .catch((error) => {
          console.error("Error reading files:", error);
        });

      // Reset input to allow uploading the same file again if needed
      event.target.value = "";
    }
  };

  const handleTagInput = (
    e: React.KeyboardEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string[]>>,
    options: string[]
  ) => {
    const input = e.currentTarget;
    const value = input.value.trim();
    if (e.key === "Enter" && value && !options.includes(value)) {
      setter((prev) => [...prev, value]);
      input.value = "";
      e.preventDefault();
    }
  };

  const removeTag = (
    tag: string,
    setter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setter((prev) => prev.filter((t) => t !== tag));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
      {/* Left Section */}
      <div className="w-full lg:w-2/3 rounded-lg bg-white p-4 sm:p-6">
        <div className="space-y-4 sm:space-y-6">
          {/* Product Name */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-2 h-10 sm:h-[50px]"
              placeholder="Type Product name here..."
            />
          </div>

          {/* Description - ReactQuill */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700">
              Description
            </label>
            <ReactQuill
              value={description}
              onChange={setDescription}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm h-[150px] sm:h-[250px] overflow-hidden"
              placeholder="Type Product description here..."
            />
          </div>

          {/* Color + Size */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="w-full sm:w-1/2">
              <label className="block text-xs sm:text-sm font-medium text-gray-700">
                Color
              </label>
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="mt-1 block w-full h-10 sm:h-[50px] border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label className="block text-xs sm:text-sm font-medium text-gray-700">
                Size
              </label>
              <input
                type="text"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="mt-1 block w-full border h-10 sm:h-[50px] border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Type Product Size here..."
              />
            </div>
          </div>

          {/* Price + SKU + Stock */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="w-full sm:w-1/3">
              <label className="block text-xs sm:text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="mt-1 block w-full border h-10 sm:h-[50px] border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Type Product Price here..."
              />
            </div>
            <div className="w-full sm:w-1/3">
              <label className="block text-xs sm:text-sm font-medium text-gray-700">
                SKU
              </label>
              <input
                type="text"
                value={sku}
                onChange={(e) => setSku(e.target.value)}
                className="mt-1 block w-full h-10 sm:h-[50px] border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="JY18B7C17Y9"
              />
            </div>
            <div className="w-full sm:w-1/3">
              <label className="block text-xs sm:text-sm font-medium text-gray-700">
                Stock
              </label>
              <input
                type="text"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="mt-1 block w-full h-10 sm:h-[50px] border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Type Product Stock here..."
              />
            </div>
          </div>

          {/* Default Fabric */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700">
              Default Fabric
            </label>
            <Select onValueChange={setDefaultFabric} value={defaultFabric}>
              <SelectTrigger className="w-full h-10 sm:h-[50px] border border-gray-300 rounded-md shadow-sm p-2">
                <SelectValue placeholder="Select Fabric" />
              </SelectTrigger>
              <SelectContent>
                {fabricOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Customize Fabric */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700">
              Customize Fabric
            </label>
            <div className="mt-1 flex flex-wrap gap-2">
              {customFabrics.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2 py-1 bg-red-500 text-white rounded-full text-xs sm:text-sm"
                >
                  {tag}
                  <button
                    onClick={() => removeTag(tag, setCustomFabrics)}
                    className="ml-1 text-white hover:text-gray-200"
                  >
                    ×
                  </button>
                </span>
              ))}
              <input
                type="text"
                onKeyDown={(e) =>
                  handleTagInput(e, setCustomFabrics, fabricOptions)
                }
                className="mt-1 block w-full h-10 sm:h-[50px] border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Search Fabric"
              />
            </div>
          </div>

          {/* Customize Style */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700">
              Customize Style
            </label>
            <div className="mt-1 flex flex-wrap gap-2">
              {customStyles.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2 py-1 bg-red-500 text-white rounded-full text-xs sm:text-sm"
                >
                  {tag}
                  <button
                    onClick={() => removeTag(tag, setCustomStyles)}
                    className="ml-1 text-white hover:text-gray-200"
                  >
                    ×
                  </button>
                </span>
              ))}
              <input
                type="text"
                onKeyDown={(e) =>
                  handleTagInput(e, setCustomStyles, styleOptions)
                }
                className="mt-1 h-10 sm:h-[50px] block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Search Style"
              />
            </div>
          </div>

          {/* Customize Accents */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700">
              Customize Accents
            </label>
            <div className="mt-1 flex flex-wrap gap-2">
              {customAccents.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2 py-1 bg-red-500 text-white rounded-full text-xs sm:text-sm"
                >
                  {tag}
                  <button
                    onClick={() => removeTag(tag, setCustomAccents)}
                    className="ml-1 text-white hover:text-gray-200"
                  >
                    ×
                  </button>
                </span>
              ))}
              <input
                type="text"
                onKeyDown={(e) =>
                  handleTagInput(e, setCustomAccents, accentOptions)
                }
                className="mt-1 block h-10 sm:h-[50px] w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Search Accents"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Category & Image Upload */}
      <div className="w-full lg:w-1/3 bg-white p-4 sm:p-6 rounded-lg shadow space-y-4 sm:space-y-6 h-auto lg:h-[500px]">
        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700">
            Category
          </label>
          <Select onValueChange={setCategory} value={category}>
            <SelectTrigger className="w-full h-10 sm:h-[50px] border border-gray-300 rounded-md shadow-sm p-2">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              {categoryOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700">
            Photo
          </label>
          <div className="mt-1 border-2 border-gray-300 border-dashed rounded-md p-3 sm:p-4 text-center">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="imageUpload"
              multiple
            />
            <label
              htmlFor="imageUpload"
              className="cursor-pointer flex flex-col items-center"
            >
              <div className="flex items-center justify-center h-[100px] sm:h-[150px]">
                <CloudUpload className="w-8 h-8 sm:w-10 sm:h-10 text-red-600" />
              </div>
              <span className="text-red-500 text-xs sm:text-sm">
                Drag and drop image here, or click add image (max 5)
              </span>
            </label>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-3 sm:mt-4">
              {Array.from({ length: 5 }, (_, index) => (
                <div
                  key={index}
                  className="w-16 h-16 sm:w-20 sm:h-20 border border-gray-300 rounded flex items-center justify-center text-xs sm:text-sm text-gray-500"
                >
                  {images[index] ? (
                    <Image
                      width={80}
                      height={80}
                      src={images[index]}
                      alt={`Image ${index + 1}`}
                      className="w-full h-full object-cover rounded"
                    />
                  ) : (
                    `Image ${index + 1}`
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;