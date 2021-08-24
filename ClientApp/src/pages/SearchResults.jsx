import React from 'react'

export function SearchResults() {
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
      <main className="page">
        <nav>
          <h2> 
                 <i className="homepagenav">Search Results:</i>
             (2)</h2>
        </nav>
        <p>
           <i className="reviewtext">
             1. <a href="./src/pages/LocationPage">
                 <i>John's Steak House</i>
              </a><hr></hr>
             </i>
             <hr></hr>
               <span
            className="stars"
            style={{ '--rating': 4.7 }} 
            aria-label="Star rating of this location is 4.7 out of 5."
          ></span>
          <i className="reviewtext">(2,188)</i> <hr></hr>
      <i className="reviewtext">
             2. <a href="./src/pages/LocationPage">
                 <i>John's Fun House</i>
              </a><hr></hr>
             </i>
             <hr></hr>
               <span
            className="stars"
            style={{ '--rating': 3.8 }} 
            aria-label="Star rating of this location is 3.8 out of 5."
          ></span><i className="reviewtext">(150)</i>
        </p>
        
        <hr />
        
        
      </main>
      <footer>
        <p>
           <i className="locationsfooter"> Built in 2021. Contact <a href="mailto:BEinhorn90@gmail.com">Brendan Einhorn</a> with any questions or concerns.</i>
        </p>
      </footer>
    </>
  )
}