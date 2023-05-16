import { useState, useEffect } from "react";
import SearchForm from "../components/SearchForm";
import NewsCard from "../components/NewsCard";
import { useCountry } from "../context/countrycontext";

const KEY = process.env.REACT_APP_KEY;

const Search = () => {
  const [newsData, setNewsData] = useState();
  const [query, setQuery] = useState("");
  const { country } = useCountry()
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&q=${query}&apiKey=${KEY}`
      );

      const data = await response.json();
      setNewsData(data.articles);
    };
    fetchData();
  }, [country, query]);

  const onSubmit = (data) => {
    setQuery(data);
  };

  return (
    <div>
      <SearchForm searchSubmit={onSubmit} />

      <section className="p-10">
      <h2 className="text-2xl font-bold">Search Results</h2>
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
    </div>
  );
};

export default Search;
