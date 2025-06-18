"use client";

import { Button, Input } from "@heroui/react";
import { caprasimo } from "@/lib/fonts";
import { loginAction } from "./action";
import { useActionState } from "react";

export default function Login() {
  const [_, action, pending] = useActionState(loginAction, null);
  return (
    <main className="h-full bg-purple-200">
      <header>
        <img src="/images/main-head.png" />
      </header>
      <div className="max-w-3xl m-auto my-12 space-y-12 pb-10 ">
        <section className="flex flex-col items-center gap-4 p-6 border-10 border-red-300 rounded-lg bg-yellow-50">
          <h2
            className={`flex justify-center font-bold text-red-400 my-4 text-xl ${caprasimo.className}`}
          >
            What's your name?
          </h2>
          <form
            action={action}
            className="flex flex-col items-center space-y-12"
          >
            <Input
              name="name"
              placeholder="tell me your name"
              variants="flat"
              isClearable
              isRequired
              className="max-w-sm w-full h-5"
            />
            <Button
              isLoading={pending}
              type="submit"
              className="text-white font-bold my-2"
            >
              Login
            </Button>
          </form>
        </section>
      </div>
    </main>
  );
}
