'use server'

export const paymentAction = async (formData: FormData, allPhotos: File[]):Promise<boolean> =>{
  await new Promise(resolve => setTimeout(resolve, 3000))
  console.log(allPhotos)
  return true
}