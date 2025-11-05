'use client'

import {useRef, useState} from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { paymentAction } from "@/app/actions/paymentActions";
import { useTransition } from "react";


export type Photo = {
  name: string
  src: string
  size: string | null
  file: File
}


export default function usePreview(){

  const [allPhotos, setAllPhotos] = useState<Photo []>([])

  const [selectedSize, setSelectedSize] = useState<string | null>(null)

  const uploadFileInput = useRef<HTMLInputElement>(null)

  const [startPayment, setStartPayment] = useState<boolean>(false)

  const [isPending, startTransition] = useTransition()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    setStartPayment(true)

    const formData = new FormData(e.currentTarget)
    
    const allFiles = allPhotos.map(photo => photo.file)

    startTransition(()=>{

      paymentAction(formData, allFiles)
    })

    setTimeout(()=>{
      setStartPayment(false)
    },4000)

  }

  const handleSelector = (value:string) =>{
    console.log(value)
    setSelectedSize(value)
    
  }

  const deletePhoto = (id: number) =>{
    const newSetOfPhotos = allPhotos.filter((photo:Photo,i:number) => id !== i)
    

    setAllPhotos(newSetOfPhotos)
  }

  console.log(selectedSize)

  const handlePhotoUpload = async(e: React.ChangeEvent<HTMLInputElement>) => {

    console.log('object',e.target.files?.[0])
    const file = e.target.files?.[0]

    console.log('fileInfo', file)
    
    if(!file) return
    const imageUrl = URL.createObjectURL(file)
    const nameArray = file?.name.split('')
    
    const fileName = nameArray!.length > 10 ? `${nameArray?.slice(0,11).join('')}.jpg` : file?.name

    /*  {S3 upload code}
    try{

      const res = await fetch('/api/getPresignedURL',{
        method: 'POST',
        body: JSON.stringify({
          fileName: file.name,
          contentType: file.type,
          urlType: 'put'
        })
      })
      const data = await res.json()
      if(!res.ok){
        throw new Error(data.error)
      }

      const {url} = data

      const uploadRes = await fetch(url, {
        method: "PUT",
        body: file,
        headers: { "Content-Type": file.type },
      });

      if(!uploadRes.ok) throw new Error("Upload failed")

    }catch(err){
      console.log(err instanceof Error ? err.message : "Something went wrong")
    }*/

    const photo: Photo = {
      name: fileName!,
      src: imageUrl,
      size: selectedSize,
      file: file
    }

    setAllPhotos(prev => [photo, ...prev])
  
  }

  const clickUploadButton = () =>{
    if(selectedSize === null){
      alert("Please set a suitable size for your print before uploading photo!")
      return
    }
    uploadFileInput.current?.click()
  }

  const allPhotoComponents = allPhotos.map((photo: Photo, i)=>{

    console.log(photo)
    
    return(
      <div key={i} className="bg-white relative overflow-hidden flex flex-col w-[170px] flex-none snap-center pt-2 rounded-sm">
        <img className="block w-full object-contain h-[170px]" src={photo.src} alt={photo.name}/>
        <div className="">
          <p className="py-0.5 border-2 border-black text-center text-xs font-medium text-gray-700 sm:text-sm">Size: {photo.size}</p>
          <p className="py-0.5 pb-1 border-x-2 border-b-2 border-b-black border-x-black text-center text-sm bg-gray-800 text-white">{photo.name}</p>
        </div>
        <Button onClick={()=>deletePhoto(i)} variant="outline" size="icon" className="rounded-full absolute top-0 right-0 hover:cursor-pointer"><X color='red'/></Button>
      </div>
    )
  })

  return {handlePhotoUpload, handleSelector, allPhotoComponents, 
    allPhotos, clickUploadButton, deletePhoto, uploadFileInput, isPending, handleSubmit, startPayment}

}