import React from "react";
import ProductListPage from "./_components/ProductListPage";
import ProductPageHeader from "./_components/ProductPageHeader";

function page() {
  return (
    <div>
      <ProductPageHeader />
      <ProductListPage />
    </div>
  );
}

export default page;
