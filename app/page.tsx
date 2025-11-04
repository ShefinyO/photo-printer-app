import NavBar from "@/components/navbar";
import Preview from "@/components/preview";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <main className="container mx-auto min-h-screen">
        <Preview/>
      </main>
    </div>
  );
}
