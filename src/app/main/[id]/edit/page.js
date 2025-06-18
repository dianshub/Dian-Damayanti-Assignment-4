import EditForm from "./EditForm";
import { getName } from "@/utils/getName";

export default async function Page({ params }) {
  const id = params.id;
  const name = await getName();

  const res = await fetch(`https://v1.appbackend.io/v1/rows/MEriGeC20Gs8`, {
    cache: "no-store",
  });

  const result = await res.json();
  const review = result?.data?.find((r) => r._id === id);

  return <EditForm id={id} userReview={review} name={name} />;
}
