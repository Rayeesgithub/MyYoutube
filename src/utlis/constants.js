50-1
const GOOGLE_API_KEY = "AIzaSyAlJ-cR6snNEUBW8NTwuWamhQYbLQ07-Ao";
export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=501&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_Search_API= "https://api.allorigins.win/raw?url=" +
encodeURIComponent("https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=");

export const YOUTUBE_VIDEO_BYID = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}&id=`;
export const COMMENTS_API =
  "https://www.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&maxResults=50&key=" +
  GOOGLE_API_KEY +
  "&videoId=";
  export const SEARCH_RESULT_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" +
  GOOGLE_API_KEY +
  "&q=";
  export const LIVE_CHAT_COUNT = 25;
  export const kFormatter = (num) => {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
  };
