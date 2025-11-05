import NavBar from "@/components/navbar";
import Preview from "@/components/preview";
import Image from "next/image";
import { getAllImages } from "./actions/imageActions";

export default async function Home() {

  return (
    <div>
      <NavBar/>
      <main className="container mx-auto min-h-[calc(100dvh-64px)] sm:min-h-[calc(100dvh-72px)]">
        <Preview />
      </main>
    </div>
  );
}
