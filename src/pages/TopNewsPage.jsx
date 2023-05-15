import { useState, useEffect } from "react";
import NewsCard from "../components/NewsCard";
import { useCountry } from "../context/countrycontext";

const KEY = process.env.REACT_APP_KEY;
const TopNewsPage = () => {
  const [newsData, setNewsData] = useState([]);
  
  const { country } = useCountry()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${KEY}`
        );
        const data = await response.json();
        setNewsData(data.articles);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [country]);

  return (
    <main>
      <section>
        {newsData &&
          newsData.map((item, i) => (
            <NewsCard
              title={item.title}
              imgsrc={item.urlToImage}
              description={item.description}
              key={i}
            />
          ))}
      </section>
    </main>
  );
};

export default TopNewsPage;
