"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function loginAction(_, formData) {
  const cookieStore = await cookies();
  const name = formData.get("name");

  cookieStore.set("name", name);
  redirect("/main");
}
