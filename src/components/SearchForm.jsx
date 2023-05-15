import { useState } from 'react';

const SearchForm = ({ searchSubmit }) => {
  const [formData, setFormData] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    searchSubmit(formData);
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label></label>
        <input onChange={e => setFormData(e.target.value)}/>
        <button>Search</button>
      </form>
    </div>
  )
}

export default SearchForm