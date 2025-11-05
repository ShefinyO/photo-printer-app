'use server'

import { cacheLife } from "next/cache"

export async function getAllImages(){
  'use cache'
  cacheLife('hours')

  try{
  
    const res = await fetch('/api/getPresignedURL',{
      method: "POST",
      body: JSON.stringify({
        urlType: 'get'
      })
    })

    const data = await res.json()

    if(!res.ok){
      throw new Error(data.error)
    }

    const {urls} = data


    const responses = await Promise.all(
      urls.map((url:string) => fetch(url))
    );

    const failed = responses.filter(r => !r.ok);
    if (failed.length > 0) {
      throw new Error(`Some requests failed: ${failed.map(f => f.url).join(", ")}`);
    }

    const blobs = await Promise.all(responses.map(r => r.blob()));

    return blobs;

  } catch (err) {
    console.error("Error fetching images:", err);
    return [];
  }
} 
  
export async function deleteImage(key: string){

  try{
  const res = await fetch('/api/getPresignedURL',{
    method: 'POST',
    body:JSON.stringify({
      fileName:key,
      urlType: 'delete'
    })
  })

  const data = await res.json()

  if(!res.ok){
    throw new Error(data.error)
  }

  const {url} = data
  
  return url
  }catch(err){
    console.log(err instanceof Error ? err.message : "failed to delete image")
  }
}