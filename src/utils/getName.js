import { cookies } from "next/headers";
import "server-only";

export async function getName() {
  const cookieStore = await cookies();
  const name = cookieStore.get("name").value;

  return name;
}
