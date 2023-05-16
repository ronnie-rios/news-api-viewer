import { useState, useEffect } from "react";
import SearchForm from "../components/SearchForm";
import NewsCard from "../components/NewsCard";
import { useCountry } from "../context/countrycontext";

const KEY = process.env.REACT_APP_KEY;

const Search = () => {
  const [newsData, setNewsData] = useState();
  const [query, setQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?}&q=${query}&apiKey=${KEY}`
      );

      const data = await response.json();
      setNewsData(data.articles);
    };
    fetchData();
  }, [query]);

  const onSubmit = (data) => {
    setQuery(data);
  };

  return (
    <div>
      <SearchForm searchSubmit={onSubmit} />

      <section className="grid md:grid-cols-3 gap-4 mt-4">
        <h2 className="text-2xl font-medium">Search Results</h2>
        {newsData &&
          newsData.map((item, i) => (
            <div key={i} className="col-span-1">
              <NewsCard
                title={item.title}
                imgsrc={item.urlToImage}
                description={item.description}
                key={i}
              />
              {selectedItem && selectedItem.title === item.title && (
                <div className="p-4 text-center bg-gray-100 border rounded-md">
                  <h2 className="font-medium text-lg pb-1">Article Details</h2>
                  <h3 className="font-medium">Author: {item.author}</h3>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer my-2"
                    className="hover:underline"
                  >
                    View Original URL
                  </a>
                  <h3 className="font-medium my-2">
                    Source: {item.source.name}
                  </h3>
                  <button
                    className="bg-red-200 p-2 rounded-lg hover:bg-red-300 mt-2"
                    onClick={() => setSelectedItem(null)}
                  >
                    Close details
                  </button>
                </div>
              )}
            </div>
          ))}
      </section>
    </div>
  );
};

export default Search;
