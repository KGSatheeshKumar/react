import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <center><img src="img/saveetha-logo.jpg" alt="" /></center>
      <form action="" method="get" >
        <h1>ADMISSION FORM</h1>
        <input type="text" minlength="3" maxlength="100" pattern="[A-Za-z. ]*" name="fname" placeholder="First Name" /><br />
        <input type="text" minlength="3" maxlength="100" name="lname" pattern="[A-Za-z. ]*" placeholder="Last Name" /><br />
        <input type="email" required name="email" pattern="[a-z0-9._]+@[a-z0-9.\-]+.[a-z]{2,4}$" placeholder="Email" /><br />
        DOB: <input type="date" name="date" /><br />
        <input type="number" min="6000000000" max="9999999999" name="number" placeholder="Number" /><br />
        <textarea name="address" id="" cols="30" rows="3" placeholder="Address"></textarea><br />
        GENDER: <br />
        <input type="radio" name="gender" value="m" />Male <br />
        <input type="radio" name="gender" value="f" />Female <br />
        
        SELECT DEPARMENT: <br /><select name="course" >
            <option value="">Select an option</option>
            <option value="IT">IT</option>
            <option value="CSE">CSE</option>
            <option value="AIML">AIML</option>
            <option value="AIDS">AIDS</option>
            <option value="EEE">EEE</option>
            <option value="ECE">ECE</option>
            <option value="MECH">MECH</option>
            <option value="CIVIL">CIVIL</option>
        </select> <br />

        <input type="submit" value="Save" />
        <input type="reset" value="Clear" />
    </form>
    </>
  )
}

export default App
