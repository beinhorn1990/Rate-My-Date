import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Stars } from '../pages/Stars'

function SingleDateLocationFromList(props) {
  return (
    <li>
      <h2>
        <Link to={`/DateLocation/${props.datelocation.id}`}>
        {props.datelocation.name}
        </Link>
        </h2>
      <p>
        <Stars datelocation={props.datelocation} />(
        {props.datelocation.reviews.length})
      </p>
      <address>{props.datelocation.address}</address>
    </li>
  )
}

export function SearchResults() {
  const [filterText, setFilterText] = useState('')
  const [dateLocation, setDateLocations] = useState([])
  
  useEffect(() => {
    async function loadDateLocations() {
      const url =
        filterText.length === 0
        ? `/api/DateLocation`
        : `/api/DateLocation?filter=${filterText}`

        const response = await fetch(url)
    
        const json = await response.json()

        setDateLocations(json)
    }
    
     loadDateLocations()
  }, [filterText])

    return (
         <>
      <header>
         <i className="title">Rate my Date! (location)</i>
            <nav>
              <Link to="/new">
               <i className="addadatelocation"> Add a Date Location</i>
                </Link>
              <Link to="/home">
                 <i className="homepagenav">Return to the Home Page!</i>
                 </Link>
            </nav>
      </header>
      <main className="pagesearcresults">
        <form className="search">
          <input
            type="text"
            placeholder="Search..."
            value={filterText}
            onChange={function (event) {
              setFilterText(event.target.value)
            }}
          />
        </form>

        <i className="hereareyoursearchresults">Here are your search results:</i> 
        <ul className="resultssearchresults">
          {dateLocation.map((datelocation) => (
            <SingleDateLocationFromList
             key={datelocation.id}
             datelocation={datelocation}
             />    
          ))}   
           </ul>
      </main>
      <footer>
        <p>
           <i className="locationsfooter"> Built in 2021. Contact <a href="mailto:BEinhorn90@gmail.com">Brendan Einhorn</a> with any questions or concerns.</i>
        </p>
      </footer>
    </>
  )
  }