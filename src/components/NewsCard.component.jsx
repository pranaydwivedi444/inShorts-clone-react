import React, { useEffect, useState } from "react";
import Button from "./Button.component";
import { dateFormatter } from "../utils/dateFormatter";

function NewsCard({ togglePreview,news ,isMobile}) {
  
  const {
    urlToImage = "https://placehold.co/1024X768",
    description = "",
    title = "",
    publishedAt = "",
    url = "",
    author = "",
  } = news || {};
  console.log(url)
   if(!news) {
    return null
   }
  

  return (
    <div className=" mt-2 mb-2 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ">
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-1/3 md:rounded-none md:rounded-s-lg"
        src={urlToImage}
        alt={title}
        onError={(e) => {
          e.target.src = "https://placehold.co/1024X768";
        }}
      />
      <div className="flex flex-col items-start justify-start p-4  h-full ">
        <h6 className=" text-2xl  tracking-tight text-gray-900 dark:text-white">
          {title}
        </h6>
        <p className="text-xs text-gray-500 mb-2">
          {"  "}
          <b>Short</b> By {`${author ?? " "}`} |{" "}
          {`${dateFormatter(publishedAt) ?? " "}`}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description ?? " "}
        </p>
        {isMobile ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 underline"
          >
            Read More
          </a>
        ) : (
          <Button onClick={() => togglePreview(url)}>Read More</Button>
        )}
      </div>
    </div>
  );
}

export default NewsCard;
