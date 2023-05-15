import { useState, useEffect } from "react";

const KEY = process.env.REACT_APP_KEY;
const TopNewsPage = () => {
  const [newsData, setNewsData] = useState([]);
  const [country, setCountry] = useState("us");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=${KEY}`
        );
        const data = await response.json();
        setNewsData(data.articles);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  },[country]);


  console.log(newsData);
  return (
    <main>
        <section>
            {newsData && newsData.map((item, i) => (
                <div key={i}>
                    <h1>{item.title}</h1>
                    <img src={item.urlToImage} alt='News' />
                    <p>{item.description}</p>
                </div>
            ))}
        </section>
    </main>
    );
};

export default TopNewsPage;
