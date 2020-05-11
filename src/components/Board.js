import React, { useState, useEffect } from "react";
import Moment from 'react-moment';

const Board = () => {
  const [hasError, setErrors] = useState(false);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    async function loadQuotes() {
      const res = await fetch("https://elpuas.com/wp-json/wp/v2/posts");

	    res.json().then(res => setQuotes(res)).catch(err => setErrors(err));
    }

     loadQuotes();

  },[]);

  const num = Math.floor(Math.random() * Math.floor(quotes.length))
  const days = new Date()
  return (
	<div>
      <h3>
        Felicidades llevas <Moment format="DD">{days}</Moment> sin Fumar.
      </h3>
      {console.log(quotes[num])}
      <div>{  quotes.length ? quotes.map((quote) => (
        <div key={quote.id} >
          <div>
            <p>
              {quote.title.rendered}
            </p>
            <div className="quote-container" dangerouslySetInnerHTML={{__html: quote.excerpt.rendered}} />
          </div>
        </div>
      )) : `Cargando tu Mensaje del dia...`}</div>
    </div>
  )
};

export default Board



