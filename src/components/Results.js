// Results.js
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SEARCH_RESULT_API } from "../utlis/constants.js";
import ResultVideoCard from "./ResultVideoCard.js";
import ResultShimmer from "./ResultsPageShimmer.js";

const Results = () => {
  const [videos, setVideos] = useState([]);
  const [searchParams] = useSearchParams();
  const search_query = searchParams?.get("search_query");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getVideos = async () => {
      try {
        setIsLoading(true);
        const data = await fetch(SEARCH_RESULT_API + search_query);
        const json = await data.json();
        const onlyVideos = json.items.filter(
          (video) => video.id.kind === "youtube#video"
        );
        setVideos(onlyVideos);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setVideos(null);
        setIsLoading(false);
      }
    };

    if (search_query) {
      getVideos();
    }
  }, [search_query]);

  if (isLoading) return <ResultShimmer />;

  if (!videos)
    return (
      <div className="mt-48 text-lg text-red-400 bg-gray-100 p-2 rounded-xl shadow-inner w-fit mx-auto">
        Oops! Looks like we have exceeded YouTube API quota
      </div>
    );

  return (
    <div className="md:flex flex-col md:flex-wrap md:justify-center mx-auto w-fit">
      {videos.map((video) => (
        <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId}>
          <ResultVideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default Results;
