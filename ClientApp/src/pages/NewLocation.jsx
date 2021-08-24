import React from 'react'

export function NewLocation() {
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
         <h2>Add a New Date Location!</h2>
        </nav>
        <form action="#">
          <p className="form-input">
           <p className="labels"> <label htmlFor="name">Date Location Name</label></p>
            <input type="text" name="name" />
             <span className="note">
              Enter the name of the date location.
            </span>
          </p>
          <p className="form-input">
           <p className="labels"> <label htmlFor="name">Address</label></p>
            <input type="text" name="name" />
            <span className="note">
              Enter the address of the date location.
            </span>
          </p>
          <p className="form-input">
            <p className="labels"><label htmlFor="name">Web URL</label></p>
            <input type="text" name="name" />
            <span className="note">
              Enter the web address of the date location.
            </span>
          </p>
           <p className="form-input">
            <p className="labels"><label htmlFor="name">Contact Telephone</label></p>
            <input type="tel" name="telephone" />
            <span className="note">
              Enter the owner's or manager's telephone number for the date location.
            </span>
          </p>
          <p className="form-input">
            <p className="labels"><label htmlFor="name">Contact E-mail</label></p>
            <input type="tel" name="telephone" />
            <span className="note">
            Enter the owner's or manager's e-mail address for the date location.
            </span>
          </p>
          <p className="form-input">
            <p className="labels"><label htmlFor="description">Description</label></p>
            <textarea name="description"></textarea>
            <span className="note">
              Enter a brief description of the date location.
            </span>
          </p>
          <p className="form-input">
            <p className="labels"><label htmlFor="picture">Picture</label></p>
            <input type="file" name="picture" />
            <span className="note">
              Submit a picture of the date location (optional).
            </span>
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

