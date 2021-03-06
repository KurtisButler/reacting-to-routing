import { useParams, Link } from "react-router-dom"
import React, { useState, useEffect } from "react";


const LocationsInfo = () => {
  const [location, setLocation] = useState(null);
  const { locationsid } = useParams()

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/locations/${locationsid}`)
      .then((res) => res.json())
      .then((loc) => setLocation(loc))
      .catch((err) => {
        err = new Error('Failed to Fetch')
        console.log(err)
      })
  }, [locationsid]);


  return (
    <main className="container">
    <section className="row justify-content-center mt-4">
      
        <div className=" card col-md-5" key={`location-card-${location?.id}`}>
          <h1 className="card-header text-center">{location?.name}</h1>
          <p className="card-body text-center">{`This place has a ${location?.climate} type of climate and a ${location?.terrain} type of terrain`}</p>
          <Link to ='/locations' className=" btn btn-primary">Return To Locations</Link>
        </div>
     
    </section>
  </main>
)

}

export default LocationsInfo