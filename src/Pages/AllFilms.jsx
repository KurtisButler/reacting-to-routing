import { Link } from "react-router-dom"
import React, { useState, useEffect } from "react";


const AllFilms = () => {
  const [films, setFilms] = useState([]);
  

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((films) => setFilms(films))
      .catch((err) => {
        err = new Error('Failed to Fetch')
        console.log(err)
      })
  }, []);


  return (
    <main className="container">
      <section className="row justify-content-center mt-5">
          <div className="col-md-4 offset-2">
        {films.map((film) => (
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center" key={`film: ${film.id}`}>
                {film.title}
                <Link to ={`/films/${film.id}`} className = 'btn btn-primary'>Read More</Link>
              </li>
            </ul>
        ))}
          </div>
      </section>
    </main>
  );
};

export default AllFilms;