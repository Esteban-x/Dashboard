import { monthsMapper, productTableHeaders } from "@/utils/config";
import Table from "../Table";

async function extractAllProducts() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/product/all-products`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error(`Échec de la récupération des données: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des produits: ", error);
    return { data: [] };
  }
}

export default async function ProductListing() {
  let allProductsData = [];

  try {
    const allProducts = await extractAllProducts();
    allProductsData = allProducts.data;
  } catch (error) {
    console.error("Erreur lors de l'extraction des produits: ", error);
  }

  return (
    <Table
      tableHeaderText="Liste de tous les produits"
      tableHeaderCells={productTableHeaders}
      data={
        allProductsData.length
          ? allProductsData.map((item) => ({
              ...item,
              revenue: parseInt(item.price * item.sales),
              month: monthsMapper[item.month],
            }))
          : []
      }
    />
  );
}
