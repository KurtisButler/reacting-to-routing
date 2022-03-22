import { useParams, Link } from "react-router-dom"
import React, { useState, useEffect } from "react";


const PeopleInfo = () => {
  const [people, setPeople] = useState(null)
  const { peopleid } = useParams()

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/people/${peopleid}`)
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

        <div className=" card col-md-4" key={`film-card-${people?.id}`}>
          <h1 className="card-header">{people?.name}</h1>
          <p className="card-body">{`This person is ${people?.age} years old, is a ${people?.gender}, and has amazing ${people?.hair_color} hair`}</p>
          <Link to='/people' className=" btn btn-primary">Return To People</Link>
        </div>

      </section>
    </main>
  )

}

export default PeopleInfo