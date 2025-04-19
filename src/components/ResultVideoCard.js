// ResultVideoCard.js
import React from "react";
import { RxDotFilled } from "react-icons/rx";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import { kFormatter } from "../utlis/constants.js";

dayjs.extend(relativeTime);

const ResultVideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt, description } = snippet;

  return (
    <div className="space-y-2 mb-2 md:h-52 md:m-2 md:my-3 flex-col md:flex-row flex cursor-pointer p-1 rounded-lg">
      <img
        src={thumbnails.medium.url}
        alt="thumbnail"
        className="rounded-xl md:w-fit w-full xs1:w-[319px] xs2:w-[370px] xs3:w[424px] "
      />
      <div className="flex flex-col px-2 md:gap-5">
        <h2 className="font-semibold">{title}</h2>
        <div className="flex items-center text-xs font-semibold text-gray-500">
          <p>{channelTitle}</p>
          <RxDotFilled />
          <p>{dayjs(publishedAt).fromNow()}</p>
        </div>
       
      </div>
    </div>
  );
};

export default ResultVideoCard;
