import DashboardLayout from "@/components/dashboard";

async function extractAllProducts() {
  const res = await fetch("/api/product/all-products", {
    method: "GET",
    cache: "no-store",
  });

  const data = await res.json();

  return data;
}

async function extractAllVisitors() {
  const res = await fetch("/api/visitors/all-visitors", {
    method: "GET",
    cache: "no-store",
  });

  const data = await res.json();

  return data;
}

export default async function Home() {
  const allProducts = await extractAllProducts();
  const allVisitors = await extractAllVisitors();

  return (
    <DashboardLayout
      allProducts={allProducts && allProducts.data}
      allVisitors={allVisitors && allVisitors.data}
    />
  );
}
