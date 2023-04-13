import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";

import Login from "./components/Login/Login"
import SignUp from "./components/SignUp/SignUp"
import Dashboard from "./components/Dashboard/Dashboard"
function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      {/* {user && <Route path="/" exact element={<Dashboard />} />} */}
      <Route path="/" exact element={<Dashboard />}/>
			<Route path="/signup" exact element={<SignUp />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
