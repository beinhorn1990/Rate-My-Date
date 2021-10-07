import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

export function NewLocation() {
  const history = useHistory() 

const [errorMessage, setErrorMessage] = useState()

const [newLocation, setNewLocation] = useState({
    name: '',
    description: '',
    address: '',
    telephone: '',
  })

function handleStringFieldChange(event){
  const value = event.target.value
  const fieldName = event.target.name

const updatedLocation = { ...newLocation, [fieldName]: value }

setNewLocation(updatedLocation)
}

async function handleFormSubmit(event) {
  event.preventDefault()

  const response = await fetch('/api/DateLocation', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(newLocation),
  })

  const json = await response.json()

  if (response.status === 400) {
    setErrorMessage(Object.values(json.errors).join(' '))
  } else {
    history.push('/')
  }
}

  return (
    <>
      <header>
        <i className="title">Rate my Date! (location)</i>
            <nav>
              <Link to="/home">
                 <i className="homepagenav">Return to the Home Page Here!</i>
                 </Link>

                 <Link to="/">
               <i className="addadatelocation"> Search for a Date Location Here!</i>
                </Link>

                <Link to="/delete">
               <i className="addadatelocation"> Info on How to Get a Date Location Deleted Here!</i>
                </Link>
            </nav>
      </header>
       <main className="page">
        <nav>
         
          <h2><i className="addadatelocation">Add a Date Location</i></h2>
        </nav>
        <form onSubmit={handleFormSubmit}>
       <i className="errormessagenewlocation">   {
           errorMessage ? <p>{errorMessage}</p> : null
          }</i>
          <p className="form-input">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={newLocation.name}
              onChange={handleStringFieldChange}
            />
          </p>
          <p className="form-input">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              value={newLocation.description}
              onChange={handleStringFieldChange}
            ></textarea>
            <span className="note">
              Enter a brief description of the date location.
            </span>
          </p>
          <p className="form-input">
            <label htmlFor="name">Address</label>
            <textarea
              name="address"
              value={newLocation.address}
              onChange={handleStringFieldChange}
            ></textarea>
          </p>
          <p className="form-input">
            <label htmlFor="name">Telephone</label>
            <input
              type="tel"
              name="telephone"
              value={newLocation.telephone}
              onChange={handleStringFieldChange}
            />
          </p>
          <p>
            <input type="submit" value="Submit" />
          </p>
        </form>
      </main>
      <footer>
        <p>
          <i className="locationsfooter"> Built in 2021. Contact <a href="mailto:BEinhorn90@gmail.com">Brendan Einhorn</a> with any questions or concerns.</i>
        </p>
      </footer>
    </>
  )
}