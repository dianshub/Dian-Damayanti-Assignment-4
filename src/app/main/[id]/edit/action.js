"use server";

import { getName } from "@/utils/getName";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updateReviewAaction(_, formData) {
  const id = formData.get("id");
  const skintype = formData.get("skintype");
  const category = formData.get("category");
  const product = formData.get("product");
  const rating = formData.get("rating");
  const result = formData.get("result");
  const review = formData.get("review");
  const name = await getName();

  await fetch("https://v1.appbackend.io/v1/rows/MEriGeC20Gs8", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _id: id,
      name,
      skintype,
      category,
      product,
      rating,
      result,
      review,
    }),
  });

  revalidatePath("/main");
  redirect("/main");
}
