'use client'
import { JSX, useRef, useState, useId } from "react";
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
import { Input } from "./ui/input";
import { Label } from "./ui/label";



type Photo = {
  name: string
  src: string
}

export default function Preview(): JSX.Element{

  const [allPhotos, setAllPhotos] = useState<Photo []>([])
  const [selectedPhotos, setSelectedPhotos] = useState<Photo []>([])

  const uploadFileInput = useRef<HTMLInputElement>(null)

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files?.[0])
    const file = e.target.files?.[0]
    
    const imageUrl = URL.createObjectURL(file!)

    const photo: Photo = {
      name: file?.name!,
      src: imageUrl
    }

    setAllPhotos(prev => [photo, ...prev])
  }

  const clickUploadButton = () =>{
    uploadFileInput.current?.click()
  }

  const allPhotoComponents = allPhotos.map((photo: Photo, i)=>{
    
    return(
      <div key={i} className="bg-white overflow-hidden flex items-center w-[170px] h-[200px] justify-between flex-none snap-center">
        <img className="rounded-md w-full object-contain" src={photo.src} alt={photo.name}/>
      </div>
    )
  })


  return(
    <>
    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] min-h-[calc(100dvh-64px)] sm:min-h-[calc(100dvh-72px)]">
      <div className="md:border-r-2 md:border-r-gray-100 max-w-[1000px]">
        <h2 className="text-center mt-3 text-xl sm:text-2xl text-gray-700 font-bold py-3">Please Upload Your Photos for Printing</h2>
        <div className="flex overflow-auto my-5 mx-5 bg-gray-300 p-2 gap-3 max-w-[1000px] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:bg-gray-500 [&::-webkit-scrollbar-track]:bg-gray-100 scroll-smooth snap-x snap-mandatory">
          {allPhotoComponents}
        </div>
        <div className="px-5 pt-3">
          <Button onClick={clickUploadButton} className="text-xs w-full sm:w-auto sm:text-sm">Upload Photo <Plus className="mr-2"/> </Button>
          <Input onChange={handlePhotoUpload} className="hidden" ref={uploadFileInput} id="upload_file" type="file" accept="image/*"/>
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