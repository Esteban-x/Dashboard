import connectToDB from "@/database";
import Visitor from "@/models/visitors";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();
    const getAllVisitorsInfo = await Visitor.find({});

    if (getAllVisitorsInfo) {
      return NextResponse.json({
        success: true,
        data: getAllVisitorsInfo,
      });
    } else {
      return NextResponse.json({
        success: false,
        message:
          "Impossible de récuperer les visiteurs veuillez ressayer plus tard",
      });
    }
  } catch (e) {
    console.log(e);

    return NextResponse.json({
      success: false,
      message: "Une erreur est survenue",
    });
  }
}
