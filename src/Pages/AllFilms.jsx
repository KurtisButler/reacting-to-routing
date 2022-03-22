import { useParams, Link } from "react-router-dom"
import React, { useState, useEffect } from "react";


const AllFilms = () => {
  const [films, setFilms] = useState([]);
  const { filmid } = useParams();

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
      .then((res) => res.json())
      .then((film) => setFilms(film))
      .catch((err) => {
        err = new Error('Failed to Fetch')
        console.log(err)
      })
  }, []);


  return (
    <main className="container">
      <section className="row justify-content-center mt-5">
        <h1>Studio Ghibli Films</h1>
<div className="row">

              {(films.map(film => (
          <div className=" card col-md-4" key={`film-card-${films?.id}`}>
            <h1 className="card-header text-center">{films?.title}</h1>
            <p className="card-body text-center">{films?.description}</p>           
            <Link to='/films' className=" btn btn-primary">Return To AllFilms</Link>
      
          </div>
        )))
      }
        </div>

      </section>
    </main>
  )

}

export default AllFilms