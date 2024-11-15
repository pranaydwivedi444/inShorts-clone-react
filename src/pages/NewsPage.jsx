import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import NewsCard from "../components/NewsCard.component";
import ArticlePage from "./ArticlePage";
import axios from "axios";
import TitleBar from "../components/TitleBar.component";
import Skeleton from "../components/Skeleton.component";
import ErrorPage from "./ErrorPage";

function NewsPage() {
  const { name: categoryFromParams } = useParams();

  const [preview, setPreview] = useState(false);
  const [newsResults, setNewsResults] = useState([]);
  const [articleUrl, setArticleUrl] = useState("");
  const [category, setCategory] = useState(categoryFromParams);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState(null)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    setCategory(categoryFromParams);
    setPreview(false);
  }, [categoryFromParams]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const apiKey = import.meta.env.VITE_NEWS_API_KEY;

    try {
      const apiUrl = category
        ? `https://newsapi.org/v2/top-headlines?country=US&category=${category.toLowerCase()}&apiKey=${apiKey}`
        : `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

      const res = await axios.get(apiUrl);

      const filteredNews = res?.data?.articles.filter(
        (news) => news.description && news.description !== "[Removed]"
      );
      if(filteredNews.length<1){
        throw new Error("Sorry, no news found");
      }
      setNewsResults(filteredNews);
      setPreview(false);
    } catch (error) {
      console.error("Error fetching news:", error);
      setError('API Error')
    } finally {
      setLoading(false);
    }
  }, [category]);

  useEffect(() => {
    fetchData();
  }, [category, fetchData]);

  const changePreview = (url) => {
    if (url) {
      setArticleUrl(url);
      setPreview(true);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      console.error("Invalid URL passed:", url);
    }
  };

  if (loading) {
    return <Skeleton />;
  }

  if(error) {
    return <ErrorPage errorMessage={error}/>
  }
  const newsComponent = preview ? (
    <div className="grid md:grid-cols-12 m-4 w-full gap-2">
      <div className="col-span-5">
        {newsResults.map((news) => (
          <NewsCard
            key={news.url || index}
            togglePreview={changePreview}
            news={news}
            isMobile={isMobile}
          />
        ))}
      </div>
      <div className="col-span-7">
        <ArticlePage url={articleUrl} />
      </div>
    </div>
  ) : (
    <div className="m-4 max-w-md mx-auto bg-white md:max-w-5xl h-screen">
      <TitleBar titleContent={"For The Best Experience use Inshorts app"} />
      <div className="m-4 max-w-md mx-auto bg-white md:max-w-4xl h-screen">
        {newsResults.map((news) => (
          <NewsCard
            key={ news.url || index }
            togglePreview={changePreview}
            news={news}
            isMobile={isMobile}
          />
        ))}
      </div>
    </div>
  );

  return newsComponent;
}

export default NewsPage;
