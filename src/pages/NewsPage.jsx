import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsCard from "../components/NewsCard.component";
import ArticlePage from "./ArticlePage";
import axios from "axios";
import TitleBar from "../components/TitleBar.component";
import Skeleton from "../components/Skeleton.component";

function NewsPage() {
  const params = useParams();

  const [preview, setPreview] = useState(false);
  const [newsResults, setNewsResults] = useState([]);
  const [ArticleUrl, setArticleUrl] = useState("");
  const [category, SetCategory] = useState(params?.name);
  const [isMobile, setIsMobile] = useState(false);
  const [loading,setLoading] = useState(false)
  console.log(category);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  useEffect(() => {
    SetCategory(params?.name || "");
    setPreview(false);
  }, [params.name]);

  useEffect(() => {
    setLoading(true)
    let Api = import.meta.env.VITE_NEWS_API_KEY;
    const fetchData = async () => {
      try {
        let res;
        if (category == "" || category == undefined || category == null) {
          console.log("in Category" + category);

          res = await axios.get(
            `https://newsapi.org/v2/top-headlines?country=us&apiKey=${Api}`
          );
        } else {
          console.log("in NOOOO" + category);
          res = await axios.get(
            `https://newsapi.org/v2/top-headlines?country=US&category=${category.toLowerCase()}&apiKey=${Api}`
          );
        }

        console.log(res);
        let filterNews = res?.data?.articles.filter((news) => {
          if (news.description != null && news.description != "[Removed]") {
            return true;
          }

          return false;
        });
        console.log(filterNews);
        setNewsResults(filterNews);
        setPreview(false);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [category]);

  function changePreview(url) {
    console.log(url);
    if (!url) {
      console.error("Invalid URL passed:", url);
      return;
    }
    setArticleUrl(url);
    setPreview(true);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  if(loading) {
    return <Skeleton/>
  }
  const newsComponent = preview ? (
    <>
      <div className="grid  md:grid-cols-12 m-4 w-full gap-2">
        <div className="col-span-5">
          {newsResults.map((el) => (
            <NewsCard
              togglePreview={changePreview}
              news={el}
              isMobile={isMobile}
            />
          ))}
        </div>

        <div className="col-span-7">
          <ArticlePage url={ArticleUrl} />
        </div>
      </div>
    </>
  ) : (
    <div className="m-4  max-w-md mx-auto bg-white   md:max-w-5xl h-screen">
      {<TitleBar titleContent={"For The Best Experience use Inshorts app"} />}
      <div className="m-4  max-w-md mx-auto bg-white   md:max-w-4xl h-screen">
        {newsResults.map((el, index) => (
          <NewsCard
            key={el.url || index}
            togglePreview={changePreview}
            news={el}
            isMobile={isMobile}
          />
        ))}
      </div>
    </div>
  );
  return newsComponent;
}

export default NewsPage;
