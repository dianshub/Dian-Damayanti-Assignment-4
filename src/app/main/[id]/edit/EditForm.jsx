"use client";

import { useActionState } from "react";
import { Button, Select, SelectItem } from "@heroui/react";
import Link from "next/link";
import { caprasimo } from "@/lib/fonts";
import { updateReviewAaction } from "./action";
import { Textarea, Input } from "@heroui/input";

export default function EditForm({ id, userReview, name }) {
  const [state, action, pending] = useActionState(updateReviewAaction, null);

  return (
    <main className="bg-purple-200 pb-10">
      <div className="max-w-3xl m-auto my-12 space-y-12">
        <div className="flex flex-col items-center gap-6 border-10 border-red-300 rounded-lg bg-yellow-50 my-12 p-10">
          <h2
            className={`flex justify-center font-bold text-red-400 my-2 text-2xl ${caprasimo.className}`}
          >
            Edit Form
          </h2>

          <form action={action} className="flex flex-col gap-y-4 w-full">
            <input name="id" defaultValue={id} readOnly hidden />
            <input type="hidden" name="name" value={name} />

            <Select
              name="skintype"
              label="Skin Type"
              defaultSelectedKeys={[userReview.skintype]}
              variant="flat"
              isRequired
            >
              <SelectItem key="oily">Oily</SelectItem>
              <SelectItem key="dry">Dry</SelectItem>
              <SelectItem key="combination">Combination</SelectItem>
            </Select>

            <Select
              name="category"
              label="Category"
              defaultSelectedKeys={[userReview.category]}
              variant="flat"
              isRequired
            >
              <SelectItem key="makeup">Makeup</SelectItem>
              <SelectItem key="skincare">Skincare</SelectItem>
            </Select>

            <Input
              name="product"
              label="Product"
              defaultValue={userReview.product}
            />

            <Select
              name="rating"
              label="Rating"
              defaultSelectedKeys={[userReview.rating]}
              variant="flat"
              isRequired
            >
              {["1", "2", "3", "4", "5"].map((num) => (
                <SelectItem key={num} value={num}>
                  {num}
                </SelectItem>
              ))}
            </Select>

            <Select
              name="result"
              label="Result"
              defaultSelectedKeys={[userReview.result]}
              variant="flat"
              isRequired
            >
              <SelectItem key="wipe">Wipe</SelectItem>
              <SelectItem key="wear">Wear</SelectItem>
            </Select>

            <Textarea
              name="review"
              minRows={5}
              isClearable
              variants="faded"
              defaultValue={userReview.review}
              className="border-10 border-purple-200 p-2 rounded-lg"
            />

            <div className="flex flex-col items-center gap-4 mt-6">
              <Button
                type="submit"
                isLoading={!!pending}
                className="w-fit text-yellow-50 font-bold"
                radius="full"
                variant="shadow"
              >
                Update
              </Button>
              <Link
                href="/main"
                className="text-sm text-stone-500 hover:underline"
              >
                Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
