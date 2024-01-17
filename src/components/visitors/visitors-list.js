import {
  deviceMapper,
  monthsMapper,
  visitorsTableHeaders,
} from "@/utils/config";
import Table from "../Table";

async function extractAllVisitors() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/visitors/all-visitors`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

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
