import { NextRequest, NextResponse } from "next/server";
import{DeleteObjectCommand, GetObjectCommand, PutObjectCommand, ListObjectsV2Command } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { createS3Client } from "@/lib/s3Client";

export async function POST(request: NextRequest){

  const s3Client = createS3Client()

  try{

  const body = await request.json()
  
  if(body.urlType === "put"){
    const command = new PutObjectCommand({
      Bucket: process.env.S3_BUCKET_NAME!,
      Key: body.fileName,
      ContentType: body.contentType
    })

    const url = await getSignedUrl(s3Client, command, {expiresIn:60})

    return NextResponse.json({success:true, url}, {status:201})

  }else if(body.urlType === "get"){
    const list = await s3Client.send(
      new ListObjectsV2Command({ Bucket: process.env.S3_BUCKET_NAME! })
    );

    const urls = await Promise.all(
      (list.Contents ?? []).map(async (obj) => {
        const command = new GetObjectCommand({
          Bucket: process.env.S3_BUCKET_NAME!,
          Key: obj.Key!,
        });
        const url = await getSignedUrl(s3Client, command, { expiresIn: 60 });
        return { key: obj.Key, url };
      })
    );

    return NextResponse.json({success:true, urls}, {status:201})    

  }else if(body.urlType === "delete"){
    const command = new DeleteObjectCommand({
      Bucket: process.env.S3_BUCKET_NAME!,
      Key: body.fileName,
    })

    const url = await getSignedUrl(s3Client, command, {expiresIn:60})

    return NextResponse.json({ success: true, url }, {status:201});
  }

  return NextResponse.json({success:true, message:"invalid urlType added to the request body"}, {status:400})

}catch(err){
  return NextResponse.json({
    success: false,
    error: err instanceof Error ? err.message : "Something went wrong!"},{status:500})
}

}

