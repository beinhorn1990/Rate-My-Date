import React from 'react'

export function Locations() {
  return (
    <>
      <header><i className="title">Rate my Date! (location)</i>
            <nav>
               <a href="./src/pages/Homepage">
                 <i className="homepagenav">Return to the Home Page!</i>
              </a>
            </nav>
      </header>
      <main className="page">
        <nav>
          <h2>Showing Date Location Information for: John's Steak House
              
              <span
            className="stars"
            style={{ '--rating': 4.7 }} 
            aria-label="Star rating of this location is 4.7 out of 5."
          ></span>(2,188)</h2>
        </nav>
        <p>
           <i className="reviewtext">
             - John's Steak House<hr></hr>
             -123 Main St<hr></hr>
              Capital City, Montana<hr></hr>
             <hr></hr>
             - Website: <a href="www.JohnsSteakHouse.com">www.JohnsSteakHouse.com </a> <hr></hr>
             - Phone: <a href="tel:+1234567890">123-456-7890</a><hr></hr>
             - E-mail: <a href="mailto:manager@JohnsSteakHouse.com">manager@JohnsSteakHouse.com</a><hr></hr>
             <hr></hr>
             - John's Steak House is the world famous steak house located
               in city center.
             John's Steak House provides a number of high-quality lunch
             and dinner options to fill a diverse 
             number of tastes, not just those who like staeak!</i>
      
        </p>
        <hr />
        <h3><i className="reviewtextheader">Reviews for John's Steak House!</i></h3>

            <div className="author">
              Gavin said: 
            </div>
            <div className="body">
              <p>Yummy!</p>
            </div>
            <div className="meta">
              <span
                className="stars"
                style={{ '--rating': 3.2 }}
                aria-label="Star rating of this location is 4.7 out of 5."
              ></span>
              <time>Tuesday, July 7th, 2020 at 3:10 AM</time>
            </div>
        
            <div className="author">
              Jason said: 
            </div>
            <div className="body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, a? Voluptatibus quibusdam ratione ex minima corporis
                fugiat accusamus, atque, magni laboriosam voluptate molestiae
                expedita, reprehenderit perferendis! Fuga aspernatur aut minus.
              </p>
            </div>
            <div className="meta">
              <span
                className="stars"
                style={{ '--rating': 4.7 }}
                aria-label="Star rating of this location is 4.7 out of 5."
              ></span><hr></hr>
              <time>Tuesday, July 7th, 2020 at 3:10 AM</time>
            </div>
       
        <h3><i className="reviewtextheader">Enter your own review</i></h3>
        <form action="#">
          <p className="form-input">
            <label htmlFor="summary">Summary</label>
            <input type="text" name="summary" />
            <span className="note">
              Enter a brief summary of your review. Example:{' '}
              <strong>Great food, good prices.</strong>
            </span>
          </p>
          <p className="form-input">
            <label htmlFor="body">Review</label>
            <textarea name="body"></textarea>
          </p>
          <div className="rating">
            <input id="star-rating-1" type="radio" name="stars" value="1" />
            <label htmlFor="star-rating-1">1 star</label>
            <input id="star-rating-2" type="radio" name="stars" value="2" />
            <label htmlFor="star-rating-2">2 stars</label>
            <input id="star-rating-3" type="radio" name="stars" value="3" />
            <label htmlFor="star-rating-3">3 stars</label>
            <input id="star-rating-4" type="radio" name="stars" value="4" />
            <label htmlFor="star-rating-4">4 stars</label>
            <input id="star-rating-5" type="radio" name="stars" value="5" />
            <label htmlFor="star-rating-5">5 stars</label>

            <div className="star-rating">
              <label
                htmlFor="star-rating-1"
                aria-label="1 star"
                title="1 star"
              ></label>
              <label
                htmlFor="star-rating-2"
                aria-label="2 stars"
                title="2 stars"
              ></label>
              <label
                htmlFor="star-rating-3"
                aria-label="3 stars"
                title="3 stars"
              ></label>
              <label
                htmlFor="star-rating-4"
                aria-label="4 stars"
                title="4 stars"
              ></label>
              <label
                htmlFor="star-rating-5"
                aria-label="5 stars"
                title="5 stars"
              ></label>
            </div>
          </div>
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