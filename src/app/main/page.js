import Link from "next/link";
import { DeleteBtn } from "@/components/form";
import { Button } from "@heroui/react";
import { PencilSquareIcon } from "@heroicons/react/24/solid";

import moment from "moment";
import { getName } from "@/utils/getName";

export default async function Mainpage() {
  const name = await getName();
  const res = await fetch(
    `https://v1.appbackend.io/v1/rows/MEriGeC20Gs8/?filterKey=name&filterValue=${name}`
  );
  const userReviews = await res.json();

  return (
    <main className="min-h-screen bg-purple-200 pb-10">
      <div className="max-w-3xl m-auto my-4 space-y-8 ">
        <div className="flex justify-end gap-4 mt-10">
          <Link href="/main/addForm">
            <Button className="bg-pink-400 font-bold text-white hover:bg-pink-500">
              + Add Review
            </Button>
          </Link>
          <Link href="/logout">
            <Button className="bg-pink-400 font-bold text-white hover:bg-pink-500">
              Logout
            </Button>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-4">
          {userReviews.data.map((userReview) => (
            <div
              key={userReview._id}
              className="border-10 border-purple-300 p-4 rounded-lg bg-yellow-50 w-[750px] font-amaranth"
            >
              <div className="flex justify-between items-center mb-4">
                <p className="font-bold text-sm text-purple-400">
                  {moment(userReview.createdAat).format("MMM Do, YYYY")}
                </p>

                <div className="flex items-center gap-2">
                  <Link href={`/main/${userReview._id}/edit`}>
                    <Button isIconOnly type="submit" radius="full">
                      <PencilSquareIcon className="w-5 h-5 text-white" />
                    </Button>
                  </Link>
                  <DeleteBtn id={userReview._id} />
                </div>
              </div>
              <div className="flex mb-1">
                <span className="text-rose-400 w-32 font-bold">Skin Type</span>
                <span>: {userReview.skintype}</span>
              </div>
              <div className="flex mb-1">
                <span className="text-rose-400 w-32 font-bold">Category</span>
                <span>: {userReview.category}</span>
              </div>
              <div className="flex mb-1">
                <span className="text-rose-400 w-32 font-bold">Product</span>
                <span>: {userReview.product}</span>
              </div>
              <div className="flex mb-1">
                <span className="text-rose-400 w-32 font-bold">Rating</span>
                <span>: {userReview.rating}/5</span>
              </div>
              <div className="flex mb-1">
                <span className="text-rose-400 w-32 font-bold">
                  Wipe or Wear
                </span>
                <span>: {userReview.result}</span>
              </div>
              <div className="flex mt-4 mb-1">
                <span>{userReview.review}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
