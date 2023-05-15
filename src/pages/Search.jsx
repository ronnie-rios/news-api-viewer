import { useState,  useEffect } from 'react'
import SearchForm from '../components/SearchForm';
import NewsCard from '../components/NewsCard';

const KEY = process.env.REACT_APP_KEY

const Search = () => {
  const [newsData, setNewsData] = useState();
  const [ errState, setErrState] = useState(false)
  const [query, setQuery] = useState('')
  
  useEffect(() => {
    const fetchData = async () => {
      
        const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${KEY}`);
        if(response.ok) {

          const data = await response.json();
          setNewsData(data.articles);
          setErrState(false)
        } else {
          setErrState(true)
        }
      
    }
    fetchData();
  }, [query])

  const onSubmit = data => {
    setQuery(data)
  }

  return (
    <div>
      <SearchForm searchSubmit={onSubmit}/>
      {errState === true ?'Please Search Again': ''}
      <h2>Search Results</h2>
      <section>
        {newsData && newsData.map((item, i) => (
          <NewsCard
          title={item.title}
          imgsrc={item.urlToImage}
          description={item.description}
          key={i}
        />
        ))}
      </section>
    </div>
  )
}

export default Search