'use client'
import { JSX, useCallback } from "react";
import { Button } from "./ui/button";
import { Plus} from "lucide-react";
import Order from "./order";
import { Input } from "./ui/input";
import usePreview from "@/lib/hooks/usePreview";
import SizeSelector from "./sizeSelector";

export default function Preview(): JSX.Element{

  const {handlePhotoUpload, handleSelector, allPhotoComponents, allPhotos, 
    clickUploadButton, uploadFileInput, isPending, startPayment, handleSubmit, formNotCompletelyFilled} = usePreview()

  const memoizedHandleSelector = useCallback((value:string)=>{
    handleSelector(value)
  }, [])


  return(
    <>
    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] h-auto sm:min-h-[calc(100dvh-72px)]">
      <form onSubmit={handleSubmit} className="md:border-r-2 md:border-r-gray-100 md:max-w-[500px] lg:max-w-[700px] xl:max-w-[900px] 2xl:max-w-[1100px]">
        <h2 className="text-center mt-3 text-xl sm:text-2xl text-gray-700 font-bold py-3">Fill The Form Below and Pay to Order</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 px-5 gap-4">
          <div className="">
            <label className="text-sm sm:text-lg text-gray-700 font-medium" htmlFor="full_name">Full Name</label>
            <input name="fullName" id="full_name" className="rounded-sm w-full focus:outline-1 focus:outline-gray-600 mt-3 block p-2 border-1 border-gray-200" type="text" />
          </div>
          <div>
            <label htmlFor="print-size" className="text-sm sm:text-lg text-gray-700 font-medium">Emirate</label>
            <select name="emirate" defaultValue="default" className="block w-full h-[42px] px-2 border-1 mt-3 rounded-sm border-gray-200">
              <option value="default" disabled>--select-your-emirate--</option>
              <option value="dubai">Dubai</option>
              <option value="ras_al_khaimah">Ras-Al Khaimah</option>
              <option value="sharjah">Sharjah</option>
            </select>
          </div>
          <div className="">
            <label className="text-sm sm:text-lg text-gray-700 font-medium" htmlFor="address">Address</label>
            <input name="address" id="address" className="rounded-sm w-full mt-3 block p-2 outline-none border-1 border-gray-200" type="text" />
          </div>
          <div className="">
            <label className="text-sm sm:text-lg text-gray-700 font-medium" htmlFor="phone_number">Phone</label>
            <input name="phoneNumber" id="phone_number" className="rounded-sm w-full mt-3 block p-2 outline-none border-1 border-gray-200" type="text" />
          </div>
        </div>
        <div className={`flex overflow-auto my-5 mx-5 bg-gray-300 p-2 gap-3 max-w-[1100px] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:bg-gray-500 [&::-webkit-scrollbar-track]:bg-gray-100 scroll-smooth snap-x snap-mandatory rounded-sm
        ${allPhotos.length === 0 ? 'h-[230px]':''}`}>
          {allPhotos.length !== 0 ? allPhotoComponents : <div className="flex items-center justify-center w-full h-full">
            <h3 className="text-gray-500 text-md sm:text-2xl text-center">Click upload button to add photos</h3>
            </div>}
        </div>
        <div className="flex flex-col sm:items-center justify-between sm:flex-row items-start">
          <div className="w-full sm:w-auto">
            <div className="px-5 pt-3">
              <Button disabled={allPhotos.length < 5 ? false:true} type="button" onClick={clickUploadButton} 
              className="text-xs w-full sm:w-auto sm:text-sm">
                {allPhotos.length < 5 ? 'Upload Photo': 'Max Uploads 5'}{allPhotos.length < 5 && <Plus className="mr-2"/>}</Button>
              <Input multiple name="photoFiles" onChange={handlePhotoUpload} className="hidden" ref={uploadFileInput} id="upload_file" type="file" accept="image/*"/>
            </div>
            <SizeSelector handleSelector={memoizedHandleSelector}/>
          </div>
          <div className="block sm:hidden w-full px-5">
            {allPhotos.length !== 0 ? <Order uploadedPhotos={allPhotos}/> : null}
          </div>
          <div className="px-5 pb-5 sm:pb-0 w-full sm:w-auto mt-5 sm:mt-0">
            {formNotCompletelyFilled ? <p className="text-red-700 text-sm sm:text-md mb-2">Please fill all the fields!!</p> : null}
            <Button disabled={startPayment?true:false} type="submit" className="px-6 py-3 w-full sm:w-auto sm:mr-auto">
              {startPayment ? (isPending? 'Payment Processing....':'Payment Completed'):'Pay'}</Button>
          </div>
        </div>
      </form>
      <div className="hidden sm:block">
      {allPhotos.length !== 0 ? <Order uploadedPhotos={allPhotos}/>: 
      <div className="h-auto sm:min-h-[calc(100dvh-72px)] flex items-center justify-center pb-4">
        <h3 className="">Upload photos and View your Order here</h3>
      </div>
      }</div>
    </div>
    </>
  )

}