"use client";
import React from 'react'
export default function CardCategory({name,image}) {
  return (
    <div
      className="shrink-0 my-4 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
    >
        <img
          className="p-8 rounded-t-lg"
          src={image ? image : "/images/placeholder-image.png"}
          alt="product image"
        />
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {name? name: "Untitled"}
          </h5>
        </a>
      </div>
    </div>
  )
}
