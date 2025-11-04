'use client'
import { JSX } from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import photo from '@/public/photo.jpg'
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Order from "./order";



export default function Preview(): JSX.Element{

  return(
    <>
    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] min-h-screen">
      <div className="border-r-2 border-r-gray-100">
        <h2 className="text-center mt-3 text-xl sm:text-2xl text-gray-700 font-bold py-3">Please Upload Your Photos for Printing</h2>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-3
        px-5 sm:gap-4 auto-rows-[150px] my-4 sm:my-6">
            <Image className="rounded-lg w-full h-full object-cover" alt="uploaded photo to print" src={photo}/>
            <Image className="rounded-lg w-full h-full object-cover" alt="uploaded photo to print" src={photo}/>
            <Image className="rounded-lg w-full h-full object-cover" alt="uploaded photo to print" src={photo}/>
            <Image className="rounded-lg w-full h-full object-cover" alt="uploaded photo to print" src={photo}/>
            <Image className="rounded-lg w-full h-full object-cover" alt="uploaded photo to print" src={photo}/>
        </div>
        <div className="px-5">
          <Button className="text-xs w-full sm:w-auto sm:text-sm">Upload Photo <Plus className="mr-2"/> </Button>
        </div>
        <div className="px-5">
          <Select>
            <SelectTrigger className="w-full sm:w-[180px] mt-3 sm:mt-4">
              <SelectValue placeholder="Select a Print Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Available Print Sizes</SelectLabel>
                <SelectItem value="4x6">4x6</SelectItem>
                <SelectItem value="5x7">5x7</SelectItem>
                <SelectItem value="8x10">8x10</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Order/>
    </div>
    </>
  )

}