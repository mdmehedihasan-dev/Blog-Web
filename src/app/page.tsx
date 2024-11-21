import Banner from "@/components/banner/Banner";
import NewsCard from "@/components/banner/NewsCard";
import { NewsItem } from "./types/news";

export default async function  Home () {
  const data =  await fetch('https://news-api-next-js-kappa.vercel.app/api/news')
  const news = await data.json()

  return (
    <>
     <Banner/>
     <div className="py-10 ">
       <h1 className="font-bold text-xl py-5">Latest News</h1>
       <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 ">
        {
          news.slice(0,6).map((item:NewsItem)=>(
            <NewsCard key={item._id}  item={item} />
          ))
        }
       
       </div>
     </div>
    </>
  );
}
