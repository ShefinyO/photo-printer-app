'use server'


export const paymentAction = async (formData: FormData, allPhotos: File[]):Promise<boolean> =>{

  await new Promise(resolve => setTimeout(resolve, 4000))
  console.log('formData is here', formData)

  return true
}