import React from 'react'

export function AdvancedSearch() {
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
        <h2>Filter Your Search Here:</h2>
        </nav>

        <form action="#">
          <p className="form-input">
            <label htmlFor="name">Location Name</label>
            <input type="text" name="name" />
          </p>
          <p className="form-input">
            <label htmlFor="name">Keyword</label>
            <input type="email" name="email" />
          </p>
            <p className="form-input">
            <label htmlFor="name">Maximum Miles Away From My Location</label>
            <select name="Age" id="Age">
              <option value="18">1 mile</option>
              <option value="19">5 miles</option>
              <option value="20">10 miles</option>
              <option value="21">25 miles</option>
              <option value="22">50 miles</option>
              <option value="23">100 miles</option>
              <option value="24">No Maximum</option>
            </select>
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