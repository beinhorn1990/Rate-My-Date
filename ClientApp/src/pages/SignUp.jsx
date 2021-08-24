import React from 'react'

export function SignUp() {
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
          <h2>Sign Up Here:</h2>
        </nav>

        <form action="#">
          <p className="form-input">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </p>
          <p className="form-input">
            <label htmlFor="name">Email</label>
            <input type="email" name="email" />
          </p>
          <p className="form-input">
            <label htmlFor="name">Gender</label>
            <select name="Gender" id="Gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            </p>
            <p className="form-input">
            <label htmlFor="name">Age</label>
            <select name="Age" id="Age">
              <option value="18">18 Years Old</option>
              <option value="19">19 Years Old</option>
              <option value="20">20 Years Old</option>
              <option value="21">21 Years Old</option>
              <option value="22">22 Years Old</option>
              <option value="23">23 Years Old</option>
              <option value="24">24 Years Old</option>
              <option value="25">25 Years Old</option>
              <option value="26">26 Years Old</option>
              <option value="27">27 Years Old</option>
              <option value="28">28 Years Old</option>
              <option value="29">29 Years Old</option>
              <option value="30">30 Years Old</option>
              <option value="31">31 Years Old</option>
              <option value="32">32 Years Old</option>
              <option value="33">33 Years Old</option>
              <option value="34">34 Years Old</option>
              <option value="35">35 Years Old</option>
              <option value="36">36 Years Old</option>
              <option value="37">37 Years Old</option>
              <option value="38">38 Years Old</option>
              <option value="39">39 Years Old</option>
              <option value="40">40 Years Old</option>
              <option value="41">41 Years Old</option>
              <option value="42">42 Years Old</option>
              <option value="43">43 Years Old</option>
              <option value="44">44 Years Old</option>
              <option value="45">45 Years Old</option>
              <option value="46">46 Years Old</option>
              <option value="47">47 Years Old</option>
              <option value="48">48 Years Old</option>
              <option value="49">49 Years Old</option>
              <option value="50">50 Years Old</option>
              <option value="51">51 Years Old</option>
              <option value="52">52 Years Old</option>
              <option value="53">53 Years Old</option>
              <option value="54">54 Years Old</option>
              <option value="55">55 Years Old</option>
              <option value="56">56 Years Old</option>
              <option value="57">57 Years Old</option>
              <option value="58">58 Years old</option>
              <option value="59">59 Years Old</option>
              <option value="60">60 Years Old</option>
              <option value="61">61 Years Old</option>
              <option value="62">62 Years Old</option>
              <option value="63">63 Years Old</option>
              <option value="64">64 Years Old</option>
              <option value="65+">65 Years Old or Older</option>
            </select>
            </p>
            <p className="form-input">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" />
          </p>
          <p className="form-input">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </p>
           <p className="form-input">
            <label htmlFor="repeatpassword">Repeat Password</label>
            <input type="password" name="repeatpassword" />
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