import React from 'react'
import themap from "../Images/themap.png"
import { Link } from 'react-router-dom'

export function Homepage() {
  return (
    <>
      <header><i className="title">Rate my Date! (location)</i>
            <nav>
               <Link to="/new">
               <i className="addadatelocation"> Add a Date Location</i>
                </Link>
             
            </nav>
 
        

      </header>
      <main className="home">
        <h1>
          <i className="homepagewelcomemsg">Welcome to Rate My Date! (location)</i>
        </h1>
        <span className="homepagenote">
             We are here to help you and that special someone in your life find the
             perfect spot in town to hit up as a date. Yep, kind of like Yelp for
             daters! 
             Simply just search below for the type of date you and your special
             someone would like to go on and search! Let us find some good spots
             for you!
            </span>

        <i className="mapimage">
        <img src={themap} alt="map"/></i>

        <form className="search">
          <input type="text" placeholder="Search..." />
        </form>
  <p>
            <input type="submit" value="Submit" /> <input type="submit" value="Advanced Filters" />
         
          </p> 
       
      </main>
      <footer>
          <i className="locationsfooter"> Built in 2021. Contact <a href="mailto:BEinhorn90@gmail.com">Brendan Einhorn</a> with any questions or concerns. </i>
      </footer>
    </>
  )
}