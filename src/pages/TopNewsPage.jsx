import { useState, useEffect } from "react";
import NewsCard from "../components/NewsCard";
import { useCountry } from "../context/countrycontext";

const KEY = process.env.REACT_APP_KEY;
const TopNewsPage = () => {
  const [newsData, setNewsData] = useState([]);

  const { country, toggleCountry } = useCountry();

  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelected = (item) => {
    setSelectedItem(item);
  };

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
    <main className="p-10">
      <div className="display flex justify-between items-center">
        <h2 className="text-2xl font-medium">
          Top news from {country === "gb" ? "Great Britain" : "United States"}
        </h2>
        <button onClick={toggleCountry} className="bg-gray-200 p-4 rounded-lg">
          {country === "us" ? "View Great Britain News" : "View US News"}
        </button>
      </div>
      <section className="grid md:grid-cols-3 gap-4 mt-4">
        {newsData &&
          newsData.map((item, i) => (
            <div key={i} className="col-span-1">
              <NewsCard
                title={item.title}
                imgsrc={item.urlToImage}
                description={item.description}
                index={i}
                handleSelected={() => handleSelected(item)}
              />

              {selectedItem && selectedItem.title === item.title && (
                <div className="p-4 text-center bg-gray-100 border rounded-md">
                  <h2 className="font-medium text-lg pb-1">Article Details</h2>
                    <h3 className="font-medium">Author: {item.author}</h3>
                    <a href={item.url} target="_blank" rel="noopener noreferrer my-2" className="hover:underline">View Original URL</a>
                    <h3 className="font-medium my-2">Source: {item.source.name}</h3>
                    <button className="bg-red-200 p-2 rounded-lg hover:bg-red-300 mt-2" onClick={()=> setSelectedItem(null)}>Close details</button>
                </div>
              )}
            </div>
          ))}
      </section>
    </main>
  );
};

export default TopNewsPage;

// {
//   selectedItem && selectedItem.title === item.title ? (
//     <Modal isOpen={modalIsOpen}>
//       <button onClick={() => setModalIsOpen(false)}>Close</button>
//     </Modal>
//   ) : (
//     ""
//   );
// }
