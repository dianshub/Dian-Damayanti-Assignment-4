"use client";

import { useActionState } from "react";
import { createReview, deleteReviewAction } from "./action";
import { caprasimo } from "@/lib/fonts";
import { Button, Card, Select, SelectItem } from "@heroui/react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { Textarea } from "@heroui/input";
import Link from "next/link";

export const Form = () => {
  const [state, action, pending] = useActionState(createReview, null);

  return (
    <Card className="flex flex-col bg-yellow-50 border-red-300 border-20 rounded-lg">
      <h2
        className={`flex justify-center font-bold text-red-400 my-4 text-2xl ${caprasimo.className}`}
      >
        Wipe or Wear Report
      </h2>
      <form
        action={action}
        className="flex flex-col gap-4 p-6 max-w-md mx-auto"
      >
        <div>
          <label htmlFor="skintype" className="text-red-400 font-bold">
            Skintype :
          </label>
          <Select
            name="skintype"
            label="Skin Type"
            isRequired
            variant="flat"
            className="mt-1"
          >
            <SelectItem key="oily" value="oily">
              Oily
            </SelectItem>
            <SelectItem key="dry" value="dry">
              Dry
            </SelectItem>
            <SelectItem key="combination" value="combination">
              Combination
            </SelectItem>
          </Select>
        </div>

        <div>
          <label htmlFor="category" className="text-red-400 font-bold">
            Category :
          </label>
          <Select
            name="category"
            label="Category"
            isRequired
            variant="flat"
            className="mt-1"
          >
            <SelectItem key="makeup" value="makeup">
              Makeup
            </SelectItem>
            <SelectItem key="skincare" value="skincare">
              Skincare
            </SelectItem>
          </Select>
        </div>

        <div>
          <label htmlFor="product" className="text-red-400 font-bold">
            Product Name :
          </label>
          <input
            name="product"
            placeholder="Product"
            className="w-full border-purple-300 p-2 border-5 rounded-lg mt-1"
          />
        </div>

        <div>
          <label htmlFor="rating" className="text-red-400 font-bold">
            Rating :
          </label>
          <Select
            name="rating"
            label="Rating"
            isRequired
            variant="flat"
            className="mt-1"
          >
            {["1", "2", "3", "4", "5"].map((num) => (
              <SelectItem key={num} value={num}>
                {num}
              </SelectItem>
            ))}
          </Select>
        </div>

        <div>
          <label htmlFor="result" className="text-red-400 font-bold">
            Slay Status :
          </label>
          <Select
            name="result"
            label="Result"
            isRequired
            variant="flat"
            className="mt-1"
          >
            <SelectItem key="wipe" value="wipe">
              Wipe
            </SelectItem>
            <SelectItem key="wear" value="wear">
              Wear
            </SelectItem>
          </Select>
        </div>

        <div>
          <label htmlFor="review" className="text-red-400 font-bold ">
            Unfiltered Opinion :
          </label>
          <Textarea
            name="review"
            minRows={5}
            isClearable
            variants="faded"
            className="border-10 border-purple-200 p-2 rounded-lg"
          />
        </div>

        <div className="flex flex-col items-center gap-4 mt-6">
          <Button
            type="submit"
            isLoading={pending}
            className="w-fit text-yellow-50 font-bold"
            radius="full"
            variant="shadow"
          >
            Submit Report
          </Button>

          {state?.status === "error" && (
            <div className="text-rose-500 text-sm font-bold text-center">
              {state.message}
            </div>
          )}

          <div className="flex flex-col items-center gap-4 mt-6">
            {state?.status === "success" && (
              <>
                <div className="text-sky-600 text-sm font-bold text-center">
                  {state.message}
                </div>
                <Link
                  href="/main"
                  className="text-sm text-stone-500 hover:underline hover:text-red-400"
                >
                  Check it on the feed
                </Link>
              </>
            )}
          </div>
        </div>
      </form>
    </Card>
  );
};

export const DeleteBtn = ({ id }) => {
  return (
    <form action={deleteReviewAction}>
      <input hidden name="id" value={id} readOnly />
      <Button type="submit" isIconOnly color="danger" radius="full">
        <TrashIcon className="w-5 h-5" />
      </Button>
    </form>
  );
};
