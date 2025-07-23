"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SquarePen, Trash2 } from "lucide-react";
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
    name: "Electronics",
    describe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio lorem, mollis eget est eu dolor.",
    productCount: 24,
    addedDate: "2024-07-01",
    image: categoryImage,
  },
  {
    id: 2,
    name: "Clothing",
    describe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio lorem, mollis eget est eu dolor.",
    productCount: 35,
    addedDate: "2024-06-28",
    image: categoryImage,
  },
  {
    id: 3,
    name: "Books",
    describe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio lorem, mollis eget est eu dolor.",
    productCount: 12,
    addedDate: "2024-06-20",
    image: categoryImage,
  },
  {
    id: 4,
    name: "Groceries",
    describe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio lorem, mollis eget est eu dolor.",
    productCount: 48,
    addedDate: "2024-06-15",
    image: categoryImage,
  },
  {
    id: 5,
    name: "Toys",
    describe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio lorem, mollis eget est eu dolor.",
    productCount: 18,
    addedDate: "2024-06-10",
    image: categoryImage,
  },
  {
    id: 6,
    name: "Furniture",
    describe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio lorem, mollis eget est eu dolor.",
    productCount: 9,
    addedDate: "2024-06-01",
    image: categoryImage,
  },
  {
    id: 7,
    name: "Shoes",
    describe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio lorem, mollis eget est eu dolor.",
    productCount: 15,
    addedDate: "2024-05-25",
    image: categoryImage,
  },
  {
    id: 8,
    name: "Beauty",
    describe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio lorem, mollis eget est eu dolor.",
    productCount: 27,
    addedDate: "2024-05-18",
    image: categoryImage,
  },
  {
    id: 9,
    name: "Beauty",
    describe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio lorem, mollis eget est eu dolor.",
    productCount: 27,
    addedDate: "2024-05-18",
    image: categoryImage,
  },
  {
    id: 10,
    name: "Beauty",
    describe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio lorem, mollis eget est eu dolor.",
    productCount: 27,
    addedDate: "2024-05-18",
    image: categoryImage,
  },
  {
    id: 11,
    name: "Beauty",
    describe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio lorem, mollis eget est eu dolor.",
    productCount: 27,
    addedDate: "2024-05-18",
    image: categoryImage,
  },
  {
    id: 12,
    name: "Beauty",
    describe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio lorem, mollis eget est eu dolor.",
    productCount: 27,
    addedDate: "2024-05-18",
    image: categoryImage,
  },
  {
    id: 13,
    name: "Beauty",
    describe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio lorem, mollis eget est eu dolor.",
    productCount: 27,
    addedDate: "2024-05-18",
    image: categoryImage,
  },
  {
    id: 14,
    name: "Beauty",
    describe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio lorem, mollis eget est eu dolor.",
    productCount: 27,
    addedDate: "2024-05-18",
    image: categoryImage,
  },
];

const CategoryTable = () => {
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
              Category Name
            </TableHead>
            <TableHead className="w-1/4 px-4 py-4 text-center font-semibold">
              Product
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
                    alt={category.name}
                    width={70}
                    height={78}
                    className="rounded-md object-cover border"
                  />
                  <div>
                    <p className="font-medium">{category.name}</p>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {category.describe}
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="w-1/4 text-center">
                {category.productCount}
              </TableCell>
              <TableCell className="w-1/4 text-center">
                {category.addedDate}
              </TableCell>
              <TableCell className="w-1/4 text-center">
                <div className="flex justify-center">
                  <Button variant="ghost" size="icon">
                    <Trash2 className="w-4 h-4 text-gray-600" />
                  </Button>
                  <Link href={`/categories/edit/${category.id}`}> 
                    <Button variant="ghost" size="icon">
                      <SquarePen className="w-4 h-4 text-gray-600" />
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

export default CategoryTable;
