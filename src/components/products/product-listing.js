import { monthsMapper, productTableHeaders } from "@/utils/config";
import Table from "../Table";

async function extractAllProducts() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/product/all-products`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  const data = await res.json();

  return data;
}

//prod test
export default async function ProductListing() {
  const allProducts = await extractAllProducts();

  console.log(allProducts);

  return (
    <Table
      tableHeaderText="Liste de tous les produits"
      tableHeaderCells={productTableHeaders}
      data={
        allProducts && allProducts.data && allProducts.data.length
          ? allProducts.data.map((item) => ({
              ...item,
              revenue: parseInt(item.price * item.sales),
              month: monthsMapper[item.month],
            }))
          : []
      }
    />
  );
}
