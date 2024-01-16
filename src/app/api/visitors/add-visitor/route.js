import connectToDB from "@/database";
import visitor from "@/models/visitors";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();

    const extractData = await req.json();
    const newlyCreatedVisitorsInfo = await visitor.create(extractData);

    if (newlyCreatedVisitorsInfo) {
      return NextResponse.json({
        success: true,
        message: "Données de l'utilisateur ajoutées avec succès",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Impossible d'ajouter un visiteur veuillez ressayer plus tard",
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
