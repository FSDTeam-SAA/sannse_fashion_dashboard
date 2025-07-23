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
    fabric_name: "Twill",
    title: "Navy Blue",
    type: "Serge",
    addedDate: "2024-07-01",
    price: 40,
    image: categoryImage,
  },
  {
    id: 2,
    price: 40,
    fabric_name: "Twill",
    title: "Navy Blue",
    type: "Serge",
    addedDate: "2024-06-28",
    image: categoryImage,
  },
  {
    id: 3,
    price: 40,
    fabric_name: "Twill",
    title: "Navy Blue",
    type: "Serge",
    addedDate: "2024-06-20",
    image: categoryImage,
  },
  {
    id: 4,
    fabric_name: "Twill",
    title: "Navy Blue",
    price: 40,
    type: "Serge",
    addedDate: "2024-06-15",
    image: categoryImage,
  },
  {
    id: 5,
    price: 40,
    fabric_name: "Twill",
    title: "Navy Blue",
    type: "Serge",
    addedDate: "2024-06-10",
    image: categoryImage,
  },
  {
    id: 6,
    price: 40,
    fabric_name: "Twill",
    title: "Navy Blue",
    type: "Serge",
    addedDate: "2024-06-01",
    image: categoryImage,
  },
  {
    id: 7,
    price: 40,
    fabric_name: "Twill",
    title: "Navy Blue",
    type: "Serge",
    addedDate: "2024-05-25",
    image: categoryImage,
  },
  {
    id: 8,
    price: 40,
    fabric_name: "Twill",
    title: "Navy Blue",
    type: "Serge",
    addedDate: "2024-05-18",
    image: categoryImage,
  },
  {
    id: 9,
    price: 40,
    fabric_name: "Twill",
    title: "Navy Blue",
    type: "Serge",
    addedDate: "2024-05-18",
    image: categoryImage,
  },
  {
    id: 10,
    price: 40,
    fabric_name: "Twill",
    title: "Navy Blue",
    type: "Serge",
    addedDate: "2024-05-18",
    image: categoryImage,
  },
  {
    id: 11,
    price: 40,
    fabric_name: "Twill",
    title: "Navy Blue",
    type: "Serge",
    addedDate: "2024-05-18",
    image: categoryImage,
  },
  {
    id: 12,
    price: 40,
    fabric_name: "Twill",
    title: "Navy Blue",
    type: "Serge",
    addedDate: "2024-05-18",
    image: categoryImage,
  },
  {
    id: 13,
    price: 40,
    fabric_name: "Twill",
    title: "Navy Blue",
    type: "Serge",
    addedDate: "2024-05-18",
    image: categoryImage,
  },
  {
    id: 14,
    price: 40,
    fabric_name: "Twill",
    title: "Navy Blue",
    type: "Serge",
    addedDate: "2024-05-18",
    image: categoryImage,
  },
];

const FabricPage = () => {
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
            <TableHead className="w-1/4 px-4 py-4 text-base leading-[120%] font-semibold">
              Fabric Name
            </TableHead>
            <TableHead className="w-1/4 px-4 py-4 text-center font-semibold text-base leading-[120%]">
              type
            </TableHead>
            <TableHead className="w-1/4 px-4 py-4 text-center font-semibold text-base leading-[120%]">
              Price
            </TableHead>
            <TableHead className="w-1/4 px-4 py-4 text-center font-semibold text-base leading-[120%]">
              Added
            </TableHead>
            <TableHead className="w-1/4 px-4 py-4 text-center font-semibold text-base leading-[120%]">
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
                    alt={category.fabric_name}
                    width={70}
                    height={78}
                    className="rounded-md object-cover border"
                  />
                  <div>
                    <p className="font-medium text-[20px] leading-[120%] mb-2">
                      {category.fabric_name}
                    </p>
                    <p className="text-sm text--[#595959e] line-clamp-2">
                      {category.title}
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="w-1/4 text-center ">
                <p className="text-sm text--[#595959e]">{category.type}</p>
              </TableCell>
              <TableCell className="w-1/4 text-center">
                <p className="text-sm text-[#595959e]">{category.price}</p>
              </TableCell>
              <TableCell className="w-1/4 text-center">
                <p className="text-sm text-[#595959e]">{category.addedDate}</p>
              </TableCell>
              <TableCell className="w-1/4 text-center">
                <div className="flex justify-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Eye className="w-4 h-4 text-gray-600" />
                  </Button>
                  <Link href={`/fabric/edit/${category.id}`}>
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

export default FabricPage;
