// export default Navbar

// import React, { useState } from 'react'
// import {AiOutlineClose, AiOutlineFileImage} from 'react-icons/ai'
// import classes from './Navbar.module.css'
// import {Link} from 'react-router-dom'
// import { SiArchlinux } from "react-icons/si";
// import useSelector from 'react-redux'

// const Navbar = () => {
//   const [photo,setPhoto]=useState("");
//   const [state,setState]=useState({});
//   const [showForm,setShowForm]=useState(false);
  // const  token  = useSelector((state) => state.auth)

  // const handleState=(e)=>{
  //   setState(prev=>{
  //     return {...prev,[e.target.name]: e.target.value}
  //   })
  // }

  // const handleCloseForm=()=>{
  //   setShowForm(false)
  //   setPhoto(null)
  //   setState({})
  // }

  // const handleListProperty=async(e)=>{
  //   e.preventDefault();
    // let filename = null
    // if (photo) {
    //   const formData = new FormData()
    //   filename = crypto.randomUUID() + photo.name
    //   formData.append('filename', filename)
    //   formData.append('image', photo)

    //   await request("/upload/image", 'POST', options, formData, true)
    // }
    // else
    // {
    //   return
    // }

    // try{
    //   const options = {
    //     "Authorization": `Bearer ${token}`,
    //     "Content-Type": 'application/json'
    //   }

    //   const data = await request("/property", 'POST', options, { ...state, img: filename })
    //   handleCloseForm()
    // }catch(error)
    // {
    //   console.log(error)
    // }


  // }

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
//           <Link to='/SignUp'>Sign Up</Link>
//           <Link to='/Login'>Log In</Link>
//           <Link onClick={()=> setShowForm(true)} className={classes.list}>List your property</Link>

//         </div>

//       </div>
//       {
//         showForm && (
//           <div className={classes.listPropertyForm} onClick={handleCloseForm}>
//             <div className={classes.listPropertyWrapper} onClick={(e) => e.stopPropagation()}>
//               <h2>List Property</h2>
//               <form onSubmit={handleListProperty}>
//                 <input type="text" placeholder='Title...' name='title' onChange={handleState}></input>
//                 <input type="text" placeholder='Type...' name='type' onChange={handleState}></input>
//                 <input type="text" placeholder='Desc...' name='desc' onChange={handleState}></input>
//                 <input type="text" placeholder='Continent...' name='continent' onChange={handleState}></input>

//                 <input type="number" placeholder='Price...' name='price' onChange={handleState}></input>
//                 <input type="number" placeholder='Sq. meters...' name='sqmeters' onChange={handleState}></input>
//                 <input type="number" placeholder='Beds..' name='beds' step={1} min={2} onChange={handleState}></input>


//                 <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '50%' }}>
//                   <label htmlFor='photo'>Property picture <AiOutlineFileImage/></label>
//                   <input
//                     type='file'
//                     id='photo'
//                     style={{display:'none'}}
//                     onChange={(e)=>setPhoto(e.target.files[0])}
//                   />
//                   {photo && <p>{photo.name}</p>}
//                 </div>
//                 <button>List property</button>

//               </form>
//               <AiOutlineClose onClick={handleCloseForm} className={classes.removeIcon}/>
//             </div>
//           </div>
//         )
//       }
//     </div>
//     </>
//   )
// }

// export default Navbar

import React,{ useState } from 'react'
import classes from './Navbar.module.css'
import {Link} from 'react-router-dom'
import { SiArchlinux } from "react-icons/si";
import {AiOutlineClose, AiOutlineFileImage} from 'react-icons/ai'
import { request } from '../../util/fetchAPI';
//  import useSelector from 'react-redux'

const Navbar = () => {

   const [showForm,setShowForm]=useState(false);
   const [state,setState]=useState({});
   const [photo,setPhoto]=useState("");
  //  const  token  = useSelector((state) => state.auth)



   const handleState=(e)=>{
    setState(prev=>{
      return {...prev,[e.target.name]: e.target.value}
    })
  }

   const handleCloseForm=()=>{
    setShowForm(false)
    setPhoto(null)
    setState({})
  }


   const handleListProperty=async(e)=>{
    e.preventDefault();
    const options = {
      // "Authorization": `Bearer ${token}`,
      "Content-Type": 'application/json'
    }

    let filename = null
    if (photo) {
      const formData = new FormData()
      filename = crypto.randomUUID() + photo.name
      formData.append('filename', filename)
      formData.append('image', photo)

      await request("/upload/image", 'POST', options, formData, true)
    }
    else
    {
      return
    }

    //not working after this
    try{
      const options = {
        // "Authorization": `Bearer ${token}`,
        "Content-Type": 'application/json'
      }

      const data = await request("/property", 'POST', options, { ...state, img: filename })
      console.log(data);

      handleCloseForm()
    }catch(error)
    {
      console.log(error)
    }

    
  }

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
          <Link to='/auth/SignUp'>Sign Up</Link>
          <Link to='/auth/Login'>Log In</Link>
          <Link onClick={()=> setShowForm(true)} className={classes.list}>List your property</Link>

        </div>

      </div>

      {
        showForm &&(
          <div className={classes.listPropertyForm} onClick={handleCloseForm}>
             <div className={classes.listPropertyWrapper} onClick={(e) => e.stopPropagation()}>
               <h2>List Property</h2>
               <form onSubmit={handleListProperty}>
                 <input type="text" placeholder='Title...' name='title' onChange={handleState}></input>
                 <input type="text" placeholder='Type...' name='type' onChange={handleState}></input>
                 <input type="text" placeholder='Desc...' name='desc' onChange={handleState}></input>
                 <input type="text" placeholder='Continent...' name='continent' onChange={handleState}></input>

                 <input type="number" placeholder='Price...' name='price' onChange={handleState}></input>
                 <input type="number" placeholder='Sq. meters...' name='sqmeters' onChange={handleState}></input>
                 <input type="number" placeholder='Beds..' name='beds' step={1} min={2} onChange={handleState}></input>


                 <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '50%' }}>
                   <label htmlFor='photo'>Property picture <AiOutlineFileImage/></label>
                   <input
                     type='file'
                     id='photo'
                     style={{display:'none'}}
                     onChange={(e)=>setPhoto(e.target.files[0])}
                   />
                   {photo && <p>{photo.name}</p>}
                 </div>
                 <button>List property</button>

               </form>
               <AiOutlineClose onClick={handleCloseForm} className={classes.removeIcon}/>
             </div>
           </div>
        )
      }
    </div>
    </>
  )
}

export default Navbar