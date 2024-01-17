import DashboardLayout from "@/components/dashboard";

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

async function extractAllVisitors() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/visitors/all-visitors`,
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
    console.error("Erreur lors de la récupération des visiteurs: ", error);
    return { data: [] };
  }
}

export default async function Home() {
  let allProductsData = [];
  let allVisitorsData = [];

  try {
    const allProducts = await extractAllProducts();
    allProductsData = allProducts.data;
  } catch (error) {
    console.error("Erreur lors de l'extraction des produits: ", error);
  }

  try {
    const allVisitors = await extractAllVisitors();
    allVisitorsData = allVisitors.data;
  } catch (error) {
    console.error("Erreur lors de l'extraction des visiteurs: ", error);
  }

  return (
    <DashboardLayout
      allProducts={allProductsData}
      allVisitors={allVisitorsData}
    />
  );
}
