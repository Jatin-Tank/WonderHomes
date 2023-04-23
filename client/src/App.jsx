import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import './App.css';
import Login from "./components/Login/Login"
import SignUp from "./components/SignUp/SignUp"
import Dashboard from "./components/Dashboard/Dashboard"
import Signin from "./components/Signin/Signin";
import Properties from "./components/Properties/Properties";
import PropertyDetail from "./components/PropertyDetail/PropertyDetail";
import PopularProperties from "./components/PopularProperties/PopularProperties";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero"
import FeaturedProperties from "./components/FeaturedProperties/FeaturedProperties";
import Footer from "./components/Footer/Footer"
function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      {/* {user && <Route path="/" exact element={<Dashboard />} />} */}
      <Route path="/" exact element={
        <>
          <Navbar/>
          <Hero/>
          <PopularProperties/>
          <FeaturedProperties/>
          <Footer/>
        </>
      }/>
			<Route path="/auth/SignUp" exact element={<SignUp />} />
			<Route path="/auth/Login" exact element={<Login />} />
      <Route path="/Properties" exact element={
        <>
          <Navbar/>
          <Properties />
          <Footer/>
        </>
      } />
      <Route path="/PropertyDetail/:id" exact element={
        <>
          <Navbar/>
          <PropertyDetail/>
          <Footer/>
        </>
      } />

			{/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
    </Routes>
    </BrowserRouter>
  )
}

export default App
