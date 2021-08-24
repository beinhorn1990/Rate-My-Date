import React from 'react'


export function SignIn() {
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
          <h2>Sign In</h2>
        </nav>
        <form action="#">
          <p className="form-input">
            <label htmlFor="name">Email</label>
            <input type="email" name="email" />
          </p>
          <p className="form-input">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </p>
          <p>
            <input type="submit" value="Submit" />
          </p>
           <p>
            <input type="email" value="Forgot Password" />
          </p>
          <p>
            <input type="submit" value="Submit" />
          </p>
        </form>
      </main>
      <footer>
        <p>
          Built in 2021. Contact <a href="mailto:BEinhorn90@gmail.com">Brendan Einhorn</a> with any questions or concerns.
        </p>
      </footer>
    </>
  )
}