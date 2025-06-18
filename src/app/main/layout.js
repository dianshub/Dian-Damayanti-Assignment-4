import Image from "next/image";

export default function MainLayout({ children }) {
  return (
    <>
      <header className="relative w-full h-[300px]">
        {" "}
        <Image
          src="/images/main-head.png"
          alt="Header"
          fill
          priority
          className="object-cover"
        />
      </header>
      <main className="min-h-screen bg-purple-200 pb-10">{children}</main>
    </>
  );
}
