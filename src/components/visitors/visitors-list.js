import {
  deviceMapper,
  monthsMapper,
  visitorsTableHeaders,
} from "@/utils/config";
import Table from "../Table";

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

export default async function VisitorsList() {
  let allVisitorsData = [];

  try {
    const allVisitors = await extractAllVisitors();
    allVisitorsData = allVisitors.data;
  } catch (error) {
    console.error("Erreur lors de l'extraction des visiteurs: ", error);
  }

  return (
    <Table
      tableHeaderText="Liste de tous les visiteurs"
      tableHeaderCells={visitorsTableHeaders}
      data={
        allVisitorsData.length
          ? allVisitorsData.map((item) => ({
              ...item,
              month: monthsMapper[item.month],
              device: deviceMapper[item.device],
            }))
          : []
      }
    />
  );
}
