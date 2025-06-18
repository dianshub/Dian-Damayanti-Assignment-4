"use server";

import { getName } from "@/utils/getName";
import { revalidatePath } from "next/cache";

export async function createReview(_, formData) {
  const skintype = formData.get("skintype");
  const category = formData.get("category");
  const product = formData.get("product");
  const rating = formData.get("rating");
  const result = formData.get("result");
  const review = formData.get("review");
  const name = await getName();

  if (!skintype || !category || !product || !rating || !result || !review) {
    return {
      status: "error",
      message: "can’t read minds. fill the blanks, bestie",
    };
  }

  await fetch("https://v1.appbackend.io/v1/rows/MEriGeC20Gs8", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([
      { name, skintype, category, product, rating, result, review },
    ]),
  });

  revalidatePath("/");

  return {
    status: "success",
    message: "report received. consider yourself iconic!",
  };
}

export async function deleteReviewAction(formData) {
  const userID = formData.get("id");

  await fetch("https://v1.appbackend.io/v1/rows/MEriGeC20Gs8", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([userID]),
  });

  revalidatePath("/");
}
