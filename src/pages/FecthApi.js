import React, { useState, useEffect } from "react";

function FecthApi() {
  useEffect(() => {
    fecthItems();
  }, []);

  const [dataArticle, setItems] = useState([]);

  const fecthItems = async () => {
    const data = await fetch(
      "https://newsapi.org/v2/top-headlines?country=id&apiKey=90044855222f4ed9b5409dbb7d5ee7d2"
    );

    const items = await data.json();
    console.log(items.articles);
    setItems(items.articles);
  };

  // const dataBerita = dataArticle.map((value, index, arr) => {
  //   return `${index} ke adalah ${value}, dari ${arr}`;
  // });
  // console.log(dataBerita);

  return (
    <div>
      {dataArticle.map((data) => {
        const { author, title, content } = data;
        return (
          <div key={data.title}>
            <h1>{author}</h1>
            <h3>{title}</h3>
            <p>{content}</p>
          </div>
        );
      })}
    </div>
  );
}

export default FecthApi;
