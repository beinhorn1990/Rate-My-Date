import React, { useEffect, useState } from 'react'


function SingleDateLocationFromList(props) {
  return (
    <li>
      <h2>{props.datelocation.name}</h2>
      <p>
        <span
          className="stars"
          style={{ '--rating': 4.7 }}
          aria-label="Star rating of this location is 4.7 out of 5."
        ></span>
        (2,188)
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
              <a href="./src/pages/Homepage">
                 <i className="homepagenav">Return to the Home Page!</i>
              </a>
            </nav>
      </header>
      <main className="pagesearcresults">
        Here are your search results:
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