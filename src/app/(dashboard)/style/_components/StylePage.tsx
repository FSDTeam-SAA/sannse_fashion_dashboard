"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Eye, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import categoryImage from "@/public/images/categoryImage.png";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

// Dummy category data
const dummyCategories = [
  {
    id: 1,
    style_name: "Beauty",
    title: "Breast Pocket",
    types_of_styles: 27,
    addedDate: "2024-05-18",
    image: categoryImage,
  },
  {
    id: 2,
    style_name: "Beauty",
    title: "Breast Pocket",
    types_of_styles: 27,
    addedDate: "2024-05-18",
    image: categoryImage,
  },
  {
    id: 3,
    style_name: "Beauty",
    title: "Breast Pocket",
    types_of_styles: 27,
    addedDate: "2024-05-18",
    image: categoryImage,
  },
  {
    id: 4,
    style_name: "Beauty",
    title: "Breast Pocket",
    types_of_styles: 27,
    addedDate: "2024-05-18",
    image: categoryImage,
  },
  {
    id: 5,
    style_name: "Beauty",
    title: "Breast Pocket",
    types_of_styles: 27,
    addedDate: "2024-05-18",
    image: categoryImage,
  },
  {
    id: 6,
    style_name: "Beauty",
    title: "Breast Pocket",
    types_of_styles: 27,
    addedDate: "2024-05-18",
    image: categoryImage,
  },
  {
    id: 7,
    style_name: "Beauty",
    title: "Breast Pocket",
    types_of_styles: 27,
    addedDate: "2024-05-18",
    image: categoryImage,
  },
  {
    id: 8,
    style_name: "Beauty",
    title: "Breast Pocket",
    types_of_styles: 27,
    addedDate: "2024-05-18",
    image: categoryImage,
  },
  {
    id: 9,
    style_name: "Beauty",
    title: "Breast Pocket",
    types_of_styles: 27,
    addedDate: "2024-05-18",
    image: categoryImage,
  },
  {
    id: 10,
    style_name: "Beauty",
    title: "Breast Pocket",
    types_of_styles: 27,
    addedDate: "2024-05-18",
    image: categoryImage,
  },
  {
    id: 11,
    style_name: "Beauty",
    title: "Breast Pocket",
    types_of_styles: 27,
    addedDate: "2024-05-18",
    image: categoryImage,
  },
  {
    id: 12,
    style_name: "Beauty",
    title: "Breast Pocket",
    types_of_styles: 27,
    addedDate: "2024-05-18",
    image: categoryImage,
  },
  {
    id: 13,
    style_name: "Beauty",
    title: "Breast Pocket",
    types_of_styles: 27,
    addedDate: "2024-05-18",
    image: categoryImage,
  },
  {
    id: 14,
    style_name: "Beauty",
    title: "Breast Pocket",
    types_of_styles: 27,
    addedDate: "2024-05-18",
    image: categoryImage,
  },
];

const StylePage = () => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(dummyCategories.length / itemsPerPage);
  const paginatedCategories = dummyCategories.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full bg-[#FFFFFF] rounded-lg overflow-hidden">
      <Table>
        <TableHeader className="">
          <TableRow className="bg-white">
            <TableHead className="w-1/4 px-4 py-4 font-semibold">
              Style Name
            </TableHead>
            <TableHead className="w-1/4 px-4 py-4 text-center font-semibold">
              Types of Styles
            </TableHead>
            <TableHead className="w-1/4 px-4 py-4 text-center font-semibold">
              Added
            </TableHead>
            <TableHead className="w-1/4 px-4 py-4 text-center font-semibold">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {paginatedCategories.map((category) => (
            <TableRow key={category.id}>
              <TableCell className="w-1/4 py-3 px-3">
                <div className="flex items-center space-x-3">
                  <Image
                    src={category.image}
                    alt={category.style_name}
                    width={70}
                    height={78}
                    className="rounded-md object-cover border"
                  />
                  <div>
                    <p className="font-medium">{category.style_name}</p>
                    {/* <p className="text-sm text-gray-500 line-clamp-2">
                      {category.describe}
                    </p> */}
                  </div>
                </div>
              </TableCell>
              <TableCell className="w-1/4 text-center">
                {category.types_of_styles}
              </TableCell>
              <TableCell className="w-1/4 text-center">
                {category.addedDate}
              </TableCell>
              <TableCell className="w-1/4 text-center">
                <div className="flex justify-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Eye className="w-4 h-4 text-gray-600" />
                  </Button>
                  <Link href={`/style/edit/${category.id}`}>
                    <Button variant="ghost" size="icon">
                      <Edit className="w-4 h-4 text-gray-600" />
                    </Button>
                  </Link>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 py-3 bg-gray-50 border-t gap-2">
        <p className="text-sm text-gray-600">
          Showing {paginatedCategories.length} of {dummyCategories.length}{" "}
          results
        </p>
        <div className="flex space-x-1">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="border-gray-300 w-10 h-10 rounded-[4px]"
          >
            &lt;
          </Button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              size="sm"
              onClick={() => handlePageChange(page)}
              variant={currentPage === page ? "default" : "outline"}
              className={
                currentPage === page
                  ? "bg-[#EF1A26] w-10 h-10 rounded-[4px] text-white"
                  : "w-10 rounded-[4px] h-10"
              }
            >
              {page}
            </Button>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="border-gray-300 w-10 h-10 rounded-[4px]"
          >
            &gt;
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StylePage;
