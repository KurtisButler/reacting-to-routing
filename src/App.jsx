import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AllFilms from './Pages/AllFilms.jsx'
import Info from './Pages/Info'
import People from './Pages/People'
import PeopleInfo from './Pages/PeopleInfo'
import Locations from './Pages/LocationsInfo'
import LocationsInfo from './Pages/LocationsInfo'
import NavBar from './components/NavBar'

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>

                <Route exact path='/' element={<HomePage />} />

                <Route exact path='/films' element={<AllFilms />} />

                <Route exact path='/films/:filmid' element={<Info />} />

                <Route exact path='/people' element={<People />} />

                <Route exact path='/people/:peopleid' element={<PeopleInfo />} />

                <Route exact path='/locations' element={<Locations />} />

                <Route exact path='/locations/:locationsid' element={<LocationsInfo />} />

                <Route exact path='*'>
                    {() => <h1>404: Not Found</h1>}
                </Route>
            </Routes>

        </BrowserRouter>
    )
}



export default App;