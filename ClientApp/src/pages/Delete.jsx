import React from 'react'
import { Link } from 'react-router-dom'

export function Delete() {
  return (
          <>
      <header><i className="title">Rate my Date! (location)</i>
            <nav>
                 <Link to="/home">
                 <i className="homepagenav">Return to the Home Page Here!</i>
                 </Link>

               <Link to="/new">
               <i className="addadatelocation"> Add a Date Location Here!</i>
                </Link>

                <Link to="/">
               <i className="addadatelocation"> Search for a Date Location Here!</i>
                </Link>
             
            </nav>
 
        

      </header>
      <main className="home">
        <h1>
        <span className="homepagenote">
             Currently, we do not have individual users. As such, we are not allowing
             guests to delete date location entries. If you see a date location that 
             you believe should be deleted, please contact the website administrator at 
             <a href="mailto:BEinhorn90@gmail.com">Brendan Einhorn</a>, and he will look 
             into it.

             We are currently working on adding users and eventually allowing users to 
             manually remove date locations that they added.

             Thank you for your patience!
            </span>
            </h1>
      </main>
      <footer>
          <i className="locationsfooter"> Built in 2021. Contact <a href="mailto:BEinhorn90@gmail.com">Brendan Einhorn</a> with any questions or concerns. </i>
      </footer>
    </>
  )
}