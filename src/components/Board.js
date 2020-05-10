import React, { useState, useEffect } from "react";

const Board = () => {
  const [hasError, setErrors] = useState(false);
  const [quotes, setQuotes] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://public-api.wordpress.com/wp-json/wp/v2/posts");
	  res.json()
	  .then(res => setQuotes(res))
	  .catch(err => setErrors(err));
    }

    fetchData();
  });

  return (
	<div>
      <span>{JSON.stringify(quotes)}</span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  )
};

export default Board



