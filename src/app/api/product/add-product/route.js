import connectToDB from "@/database";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();

    const extractData = await req.json();
    const newlyCreatedProduct = await Product.create(extractData);

    if (newlyCreatedProduct) {
      return NextResponse.json({
        success: true,
        message: "Produit ajouté avec succés",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Ajout du produit impossible veuillez ressayer plus tard",
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
