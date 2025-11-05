import { Photo } from "@/lib/hooks/usePreview";
import OrderItem from "./orderItem";
import { useState } from "react";

type priceInfo = {
  small : number
  medium : number
  large : number
}

export default function Order({uploadedPhotos}: {uploadedPhotos: Photo[]}){

  const priceInfo = {
    small : 1.5,
    medium : 3,
    large : 5
  }

  let photoPrice = 0
  let totalPrice = 0



  const allOrderItemComponents = uploadedPhotos.map((photo, i) =>{
    const size = photo.size
    console.log("size", size)
    if(size === '4x6'){
      photoPrice = 1.5
      console.log(size, '4x6', photoPrice)
    }else if(size === '5x7'){
      photoPrice = 3
      console.log(size, '5x7', photoPrice)
    }
    else if(size === '8x10'){
      photoPrice = 5
      console.log(size, '8x10', photoPrice)
    }


    totalPrice += photoPrice

    return(
    <OrderItem key={i} name={photo.name} size={photo.size} price={photoPrice}/>
    )
  })

  return(
    <>
      <div>
        <div className="py-2 sm:py-3 mt-3 md:pl-6 md:pr-6">
          <span className="block pt-4 md:pt-15 text-gray-500 text-md sm:text-lg font-medium pb-1 border-b-2 border-b-gray-200">Your Order:</span>
          {allOrderItemComponents}
          <div className="border-t-2 border-t-gray-100 pt-2 mt-2 flex justify-between">
            <h3 className="text-sm sm:text-lg text-gray-500 font-medium">Total Price:</h3>
            <h3 className="font-bold text-sm sm:text-lg text-gray-700">{totalPrice} AED</h3>
          </div>
        </div>
      </div>
    </>
  )
}