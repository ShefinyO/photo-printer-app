import { JSX } from "react";

export default function NavBar(): JSX.Element{
  return(
    <header className="shadow-sm">
      <nav className="container mx-auto px-5 h-16 sm:h-18 flex items-center justify-between sticky z-15">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-700">Photo Printer</h1>
      </nav>
    </header>
  )
}