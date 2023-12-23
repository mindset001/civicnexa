import React, { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "../../../slices/authSlice"
import InputComponent from "../../input";
import Button from "../../button";
import '../../../App.css'


const validationSchema = Yup.object().shape({
  username: Yup.string().required('username is required').min(4, 'username is too short - should be 4 chars minimum.'),
  password: Yup.string().required('Password is Required').min(6, 'Password is too short - should be 6 chars minimum.')
})


const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, user, error } = useSelector((state) => state.auth)

    const initialValues = {
      username: '',
      password: '',
    }
  
    const handleSubmit = (values) => {
      dispatch(loginUser(values))
    }



  useEffect(() => {
    if(user.access) {
      navigate('/profile')
    }
  }, [user, navigate])


  return(
      <React.Fragment>
          <main className='2xl:max-w-[1440px] mx-auto font-DMsans text-black'>
            <div className='lg:m-[4rem] pt-[5rem] bg-[#F7F2FF]'>
              <div className='lg:w-[50%] sm:w-[80%] md:w-[37.5rem] w-full mx-auto p-[2rem]'>
                <h1 className='text-black text-[1.5rem] lg:text-[2.25rem] font-medium'>Welcome Back!</h1>
                <p className="lg:text-[1.15rem] text-[1rem] font-normal tracking-tighter">Are you a New User? <Link to='/register' className="text-purple">Sign Up</Link></p>
                {/* <p className='text-center'>Makes Payment faster</p> */}
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <Form className="mt-[2.5rem]">
                  <ErrorMessage name="username" component="div" className='error'/>
                  <Field
                      id="username"
                      name="username"
                      className="text-[1.125rem] font-normal mb-[.5rem]"
                      render={({ field }) => (
                      <InputComponent
                          id='username'
                          label="Username"
                          type="text"
                          placeholder="Enter your username"
                          classNames={`placeholder:text-[.8rem] mb-[.5rem] placeholder:leading-5 font-normal placeholder:gray-400 placeholder:text-grey pl-[1rem]`}
                          {...field}
                      />
                      )}
                  />

                  <ErrorMessage name="password" component="div" className='error'/>
                  {/* <div className='flex justify-between items-center border border-2'> */}
                    <Field
                        id="password"
                        name="password"
                        className="text-[1.125rem] font-normal mb-[.5rem]"
                        render={({ field }) => (
                        <InputComponent
                            isVisibility={true}
                            id='password'
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            classNames={`placeholder:text-[.8rem] mb-[.5rem] placeholder:leading-5 font-normal placeholder:gray-400 placeholder:text-grey pl-[1rem]`}
                            {...field}
                        />
                        )}
                    />
                    {/* <span className="material-symbols-outlined">visibility</span>
                  </div> */}

                  <div className='flex flex-end items-center justify-between mt-3'>
                    {/* <div>
                      <input type="checkbox" />
                      <label className='ml-3'>Signed In</label>
                    </div> */}
                    <Link>forgot password?</Link>
                  </div>

                  { error && <p className="mt-4 text-[#df0000] text-center text-[1rem]">{error}</p>}
                  <Button type='submit' 
                    disabled={loading} 
                    classNames={`bg-purple hover:bg-[#7C43D9] text-[1rem] leading-9 lg:text-[1.5rem] mt-[3rem] font-medium text-white w-full`}>
                      {loading ? 'Loading...' : 'Login'}
                  </Button>
                  </Form>
                </Formik>
              </div>
            </div>
            {/* <footer className="text-center md:text-start md:pl-[4rem] mb-8">
              Powered by Spark Solution Team © {new Date().getFullYear()}
            </footer> */}
          </main>
      </React.Fragment>
    )
}

export default Login
