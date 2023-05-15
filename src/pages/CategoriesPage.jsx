import { useState, useEffect } from "react";
import NewsCard from "../components/NewsCard";

const KEY = process.env.REACT_APP_KEY;

const CategoriesPage = () => {
  const [newsData, setNewsData] = useState([]);
  const [category, setCategory] = useState("");

  const categories = [
    " business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines/sources?category=${category}&apiKey=${KEY}`
        );
        const data = await response.json();
        setNewsData(data.sources);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [category]);

  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };

  return (
    <section>
      <h2>Search by category</h2>
      <form>
        <select onChange={categoryHandler}>
          <option>Select a category</option>
          {categories.map((item, index) => {
            return <option key={index}>{item}</option>;
          })}
        </select>
      </form>
      <div>
        {newsData &&
          newsData.map((item, i) => (
            <NewsCard
              title={item.title}
              imgsrc={item.urlToImage}
              description={item.description}
              key={i}
            />
          ))}
      </div>
    </section>
  );
};

export default CategoriesPage;
