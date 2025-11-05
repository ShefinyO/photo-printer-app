Photo Printer app is a responsive web application that allows users to easily upload, preview, and manage their photos for printing. Built with Next.js (App Router) and Tailwind CSS, it provides a smooth, interactive experience that mimics real-world photo order workflows.

🚀 Features:

- 🖼️ Upload and preview photos before placing an order

- 📏 Choose print sizes (e.g., 4x6, 5x7, 8x10) from an intuitive dropdown

-  Automatic Price calculation based on the page size and displays Order summary.

-  Maximum of 5 photo uploads.

- 💳 Order form integration — users can input details such as name, address, and phone number

- 🗑️ Photo management — ability to delete photos before submission

- 🌐 Responsive design for seamless use across mobile, tablet, and desktop

- ☁️ S3 integration (ready) — all server-side routes and actions are configured for uploading, downloading, and deleting images from an AWS S3 bucket

- 🧩 Scalable architecture — uses server actions, API routes, and React hooks for modular functionality

-   Fake payment button (Simulation using setTimeout)

⚙️ How It Works

- User uploads photos — images are stored in memory and will be uploaded to s3 bucket in future.
  
- Presigned S3 URLs are requested from the API route (/api/getPresignedURL).(routes and server functions are ready, integration pending..)
  
- Images are uploaded directly to S3 using these URLs.(routes and server functions are ready, integration pending..)
  
- User fills the order form — name, address, print size, etc
  
- Preview section dynamically displays all uploaded photos
  
- Order submission triggers the form action that will (in the future) process payment and finalize uploads. For now, only payment simulation is implemented

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
