import { useState } from "react";

const SearchForm = ({ searchSubmit }) => {
  const [formData, setFormData] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    searchSubmit(formData);
  };
  return (
    <div className="p-10">
      <form onSubmit={submitHandler}>
        <div className="">
          <label className="block text-md font-medium">
            Search for news based on keywords.
          </label>
          <input
            className="block w-full p-2.5 my-4 bg-gray-50 border border-gray-900 text-black rounded-lg focus:border-blue-900"
            onChange={(e) => setFormData(e.target.value)}
            placeholder="Climate Change"
          />
          <button className="bg-gray-200 border py-2 px-4 rounded-lg hover:border-gray-600">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
