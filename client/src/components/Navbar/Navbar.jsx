import React from 'react'
import classes from './Navbar.module.css'
import {Link} from 'react-router-dom'
import { SiArchlinux } from "react-icons/si";
const Navbar = () => {
  return (
    <>
    <div className={classes.container}> 
      <div className={classes.wrapper}>
        <Link to='/' className={classes.left}>
          Wonder Homes <SiArchlinux/>
        </Link>
        <ul className={classes.center}>
          <li className={classes.listItem}> Home </li>
          <li className={classes.listItem}> About </li>
          <li className={classes.listItem}> Featured </li>
          <li className={classes.listItem}> Contacts </li>
        </ul>
        <div className={classes.right}>
          <Link to='/SignUp'>Sign Up</Link>
          <Link to='/Login'>Log In</Link>
        </div>

      </div>
    </div>
    </>
  )
}

export default Navbar