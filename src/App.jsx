import React, { Suspense, lazy } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProfilePage from './components/pages/profile'
import Createuser from "./components/pages/user-details/createuser"
import StateProfile from "./components/pages/user-details/stateprofile"
import Success from "./components/pages/user-details/success"
import Footer from "./components/footer"
import Congrat from "./components/pages/user-details/congrat"
import { StyledEngineProvider } from "@mui/material"
import Button from "./components/button"
import Form from "./components/form/form"
import Test from "./components/pages/user-details/test"

const Login = lazy(() => import("./components/pages/auth/login"))
const Register = lazy(() => import("./components/pages/auth/register"))
function App() {
  return (
    <StyledEngineProvider injectFirst>
      <React.Fragment>
      <Router>
        <Routes>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/stateprofile" element={<StateProfile />} />
        <Route path="/success" element={<Success/>} />
        <Route path="/congrat" element={<Congrat/>} />
        <Route path="/test" element={<Test/>} />
        <Route path="/form" element={<Form/>} />
        <Route path="/register" element={
          <Suspense fallback={<div>Loading...</div>}>
            <Register />
          </Suspense>}
        />
        {/* <Route path="/createuser" element={
          <Suspense fallback={<div>Loading...</div>}>
            <Createuser />
          </Suspense>}
        /> */}
        {/* <Route path="/stateprofile" element={
          <Suspense fallback={<div>Loading...</div>}>
            <stateProfile />
          </Suspense>}
        /> */}
        <Route path="/" element={
          <Suspense fallback={<div>Loading...</div>}>
            <Login />
          </Suspense>}
        />
        </Routes>
      </Router>
      <Footer/>
    </React.Fragment>
    </StyledEngineProvider>
  );
}

export default App;
