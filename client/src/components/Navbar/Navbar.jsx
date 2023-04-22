// import React, { useState } from 'react'
// import classes from './Navbar.module.css'
// import {Link} from 'react-router-dom'
// import { SiArchlinux } from "react-icons/si";
// import {useSelector} from 'react-redux'
// const Navbar = () => {

//   const {user} = useSelector((state) => state.auth)
//   // const {showFrom,setShowFrom}=useState(false);

//   return (
//     <>
//     <div className={classes.container}> 
//       <div className={classes.wrapper}>
//         <Link to='/' className={classes.left}>
//           Wonder Homes <SiArchlinux/>
//         </Link>
//         <ul className={classes.center}>
//           <li className={classes.listItem}> Home </li>
//           <li className={classes.listItem}> About </li>
//           <li className={classes.listItem}> Featured </li>
//           <li className={classes.listItem}> Contacts </li>
//         </ul>
//         <div className={classes.right}>
//           {/* {!user? */}
//           {/* <>           */}
//             <Link to='/SignUp'>Sign Up</Link>
//             <Link to='/Login'>Log In</Link>
//           {/* </> */}
//           {/* : */}
//           {/* <>
//             <span>Hello {user.username}</span>
//             <span className={classes.logoutBtn}>Logout</span>
//             <link onClick={()=> setShowFrom(true)} className={classes.list}>List your property</link>
//           </> */}
//           {/* } */}


//         </div>

//       </div>
//     </div>
//     </>
//   )
// }

// export default Navbar

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