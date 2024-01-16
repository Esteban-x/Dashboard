import {
  deviceMapper,
  monthsMapper,
  visitorsTableHeaders,
} from "@/utils/config";
import Table from "../Table";

async function extractAllVisitors() {
  const res = await fetch("http://localhost:3000/api/visitors/all-visitors", {
    method: "GET",
    cache: "no-store",
  });

  const data = await res.json();

  return data;
}

export default async function VisitorsList() {
  const allVisitors = await extractAllVisitors();
  return (
    <Table
      tableHeaderText="Liste de tous les visiteurs"
      tableHeaderCells={visitorsTableHeaders}
      data={
        allVisitors && allVisitors.data && allVisitors.data.length
          ? allVisitors.data.map((item) => ({
              ...item,
              month: monthsMapper[item.month],
              device: deviceMapper[item.device],
            }))
          : []
      }
    />
  );
}
