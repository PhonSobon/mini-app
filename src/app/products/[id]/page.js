import React from "react";

async function getProductDetails(id) {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
  const data = await res.json();
  return data;
}

export async function generateMetadata({ params }) {
  const { id } = params;
  const product = await getProductDetails(id);
  return {
    title: product.title,
    description: product.description,
    metadataBase: new URL("https://istad.co"),
    alternates: {
      canonical: "/", // canonical mean the original page
      languages: {
        "en-US": "/en-US", 
        "de-DE": "/de-DE",
      },
      
    },
    openGraph: {
      images: product.images[0],
    },
  };
}
export default async function ProductDetails({ params }) {
  const { id } = params;
  const product = await getProductDetails(id);
  return (
  <section class="bg-white dark:bg-gray-900 flex min-h-screen flex-wrap items-center justify-between p-24">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            {product.title ? product.title : "Loading..."}
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            {product.description ? product.description : "Loading..."}
            </p>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        {product.images && (
          <img
            className="object-cover w-full h-full md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={product.images[0]}
            alt=""
          />
        )}
        </div>                
    </div>
</section>
  );
}
