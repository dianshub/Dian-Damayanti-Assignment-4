import Link from "next/link";
import { caprasimo } from "@/lib/fonts";
import Image from "next/image";

export default function Homepage() {
  return (
    <main>
      <header className="relative w-full h-screen">
        <Image
          src="/images/open-header.png"
          alt="Header Image"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 mt-2 ml-7">
          <Link
            href="/login"
            className={`${caprasimo.className} relative inline-block px-6 py-3 font-bold text-white rounded-lg bg-gradient-to-r from-red-400 to-pink-500 bg-[length:200%_100%] bg-left hover:bg-right transition-[background-position] duration-300`}
          >
            Let&#39;s Start!{" "}
          </Link>
        </div>
      </header>
    </main>
  );
}
