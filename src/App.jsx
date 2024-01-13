import React, { Suspense, lazy } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { StyledEngineProvider } from "@mui/material"

const Login = lazy(() => import("./components/pages/auth/login"))
const Register = lazy(() => import("./components/pages/auth/register"))
const ProfilePage = lazy(() => import("./components/pages/profile"))
const StateProfile = lazy(() => import("./components/pages/user-details/stateprofile"))
const Success = lazy(() => import("./components/pages/user-details/success"))
const Congrat = lazy(() => import("./components/pages/user-details/congrat"))
const Test = lazy(() => import("./components/pages/user-details/test"))
const Form = lazy(() => import("./components/form/form"))
const LoadingScreen = lazy(() => import("./components/loader"))
const Footer = lazy(() => import("./components/footer"))


function App() {
  return (
    <StyledEngineProvider injectFirst>
      <React.Fragment>
      <Router>
        <Routes>
        <Route path="/profile" element={
          <Suspense fallback={<LoadingScreen />}>
            <ProfilePage />
          </Suspense>}
         />
        <Route path="/stateprofile" element={
          <Suspense fallback={<LoadingScreen />}>
            <StateProfile />
          </Suspense>}
        />
        <Route path="/success" element={
          <Suspense fallback={<LoadingScreen />}>
            <Success />
          </Suspense>}
        />
        <Route path="/congrat" element={
          <Suspense fallback={<LoadingScreen />}>
            <Congrat />
          </Suspense>}
        />
        <Route path="/test" element={
          <Suspense fallback={<LoadingScreen />}>
            <Test />
          </Suspense>}
        />
        <Route path="/form" element={
          <Suspense fallback={<LoadingScreen />}>
            <Form />
          </Suspense>}
        />
        <Route path="/register" element={
          <Suspense fallback={<LoadingScreen />}>
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
          <Suspense fallback={<LoadingScreen />}>
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
