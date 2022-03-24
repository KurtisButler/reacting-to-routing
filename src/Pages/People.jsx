import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then((peoples) => setPeople(peoples))
      .catch((err) => {
        err = new Error('Failed to Fetch')
        console.log(err)
      })
  }, []);

  return (
    <main className="container">
      <section className="row justify-content-center mt-5">
        <div className="col offset-2">

          {people.map((peoples) => (
            <div className="card mb-4" key={`film-card-${peoples?.id}`}>
              <h1 className="card-header text-center">{peoples?.name}</h1>
              <p className="card-body text-center">{peoples?.description}</p>
              <Link to={`/People/${peoples.id}`} className=" btn btn-success">Read More</Link>
            </div>

          ))};

        </div>
      </section>
    </main>
  );
};

export default People;