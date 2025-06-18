export default function MainLayout({ children }) {
  return (
    <>
      <header>
        <img src="/images/main-head.png" alt="Header" />
      </header>
      <main className="min-h-screen bg-purple-200 pb-10">{children}</main>
    </>
  );
}
