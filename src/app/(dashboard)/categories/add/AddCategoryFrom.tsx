"use client";

import type React from "react";
import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, X } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

export default function AddCategoryFrom() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  // Quill modules configuration
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ direction: "rtl" }],
      [{ align: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "script",
    "blockquote",
    "code-block",
    "list",
    "bullet",
    "indent",
    "direction",
    "align",
    "link",
    "image",
    "video",
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setThumbnail(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setThumbnailPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);

      console.log("Uploaded file:", {
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified,
      });
    }
  };

  const removeThumbnail = () => {
    setThumbnail(null);
    setThumbnailPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    console.log("Thumbnail removed");
  };

  const handleDescriptionChange = (content: string) => {
    setFormData({ ...formData, description: content });
    console.log("Description changed:", content);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      return;
    }

    // Create FormData object for the API request
    const blogFormData = new FormData();
    blogFormData.append("title", formData.title);
    blogFormData.append("description", formData.description);

    if (thumbnail) {
      blogFormData.append("thumbnail", thumbnail);
    }

    console.log("=== BLOG FORM DATA ===");
    console.log("Title:", formData.title);
    console.log("Description:", formData.description);
    console.log(
      "Thumbnail:",
      thumbnail
        ? {
            name: thumbnail.name,
            size: thumbnail.size,
            type: thumbnail.type,
          }
        : null
    );
    console.log("======================");
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 overflow-auto">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-lg">
              <div className="p-6">
                <form
                  id="blog-form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <Label htmlFor="title">Blog Title</Label>
                    <Input
                      id="title"
                      placeholder="Add your title..."
                      value={formData.title}
                      onChange={(e) => {
                        const newTitle = e.target.value;
                        setFormData({ ...formData, title: newTitle });
                        console.log("Title changed:", newTitle);
                      }}
                      className="mt-3 border border-[#707070] h-[50px]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Description</Label>
                    <div className="mt-3">
                      <div className="border border-[#707070] rounded-md overflow-hidden">
                        <ReactQuill
                          theme="snow"
                          value={formData.description}
                          onChange={handleDescriptionChange}
                          modules={modules}
                          formats={formats}
                          placeholder="Write your blog content here..."
                          style={{
                            height: "300px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="space-y-6 bg-white rounded-lg">
              <div className="p-6">
                <Label>Thumbnail</Label>
                <Card className="mt-3 shadow-none h-[410px] border border-[#707070]">
                  <CardContent className="p-6 h-full">
                    {thumbnailPreview ? (
                      <div className="relative h-full">
                        <Image
                          src={thumbnailPreview || "/placeholder.svg"}
                          alt="Thumbnail preview"
                          fill
                          className="object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={removeThumbnail}
                          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ) : (
                      <div
                        className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center h-full flex flex-col justify-center cursor-pointer hover:border-gray-400 transition-colors"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500">Upload thumbnail</p>
                        <p className="text-sm text-gray-400 mt-2">
                          Click to browse files
                        </p>
                      </div>
                    )}
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .ql-editor {
          min-height: 300px !important;
          font-family: inherit;
        }
        .ql-toolbar {
          border-top: none !important;
          border-left: none !important;
          border-right: none !important;
          border-bottom: 1px solid #707070 !important;
        }
        .ql-container {
          border-bottom: none !important;
          border-left: none !important;
          border-right: none !important;
        }
        .ql-snow .ql-tooltip {
          z-index: 1000;
        }
      `}</style>
    </div>
  );
}
