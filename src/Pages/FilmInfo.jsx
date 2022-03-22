import { useParams, Link } from "react-router-dom"
import React, { useState, useEffect } from "react";


const Info = () => {
  const [film, setFilms] = useState({});
  const { filmid } = useParams();

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
      .then((res) => res.json())
      .then((film) => setFilms(film))
      .catch((err) => {
        err = new Error('Failed to Fetch')
        console.log(err)
      })
  }, [filmid]);


  return (
    <main className="container">
      <section className="row justify-content-center mt-5">

        <div className=" card col-md-4" key={`film-card-${film?.id}`}>
          <h1 className="card-header text-center">{film?.title}</h1>
          <p className="card-body text-center">{film?.description}</p>
          <Link to='/Films' className=" btn btn-danger">Return to All Films</Link>
        </div>

      </section>
    </main>
  )

}

export default Info