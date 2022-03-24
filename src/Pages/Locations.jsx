import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

const Locations = () => {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/locations")
      .then((res) => res.json())
      .then((locations) => setLocation(locations))
      .catch((err) => {
        err = new Error('Failed to Fetch')
        console.log(err)
      })
  }, []);


  return (
    <main className="container">
      <section className="row justify-content-center mt-4">
          <div className="col-md-6 offset-2">
        {location.map((loc) => (
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center" key={`location: ${loc.id}`}>
                {loc.name}
                <Link to ={`/locations/${loc.id}`} className = 'btn btn-success'>Read More</Link>
              </li>
            </ul>
        ))}
          </div>
      </section>
    </main>
  );
};


export default Locations;