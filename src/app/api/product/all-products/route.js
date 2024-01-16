import connectToDB from "@/database";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();
    const getAllProducts = await Product.find({});

    if (getAllProducts) {
      return NextResponse.json({
        success: true,
        data: getAllProducts,
      });
    } else {
      return NextResponse.json({
        success: false,
        message:
          "Impossible de recupérer les produits veuillez ressayer plus tard",
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
