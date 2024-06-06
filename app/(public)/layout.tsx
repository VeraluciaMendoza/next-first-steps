import { NavBar } from "@/components";

export default function PublicLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
    <NavBar/>
    <main className="flex flex-col items-center p-24">
      <span className="text-lg">Hola mundo</span>
      {children}
    </main>
    </>
  );
}