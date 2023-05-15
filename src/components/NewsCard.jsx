import React from "react";

const NewsCard = ({ title, imgsrc, description, key}) => {
  return (
    <div key={key}>
      <h1>{title}</h1>
      <img src={imgsrc} alt="News" />
      <p>{description}</p> 
    </div>
  );
};

export default NewsCard;
