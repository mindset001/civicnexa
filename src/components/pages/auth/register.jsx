import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { registerUser } from "../../../slices/authSlice"
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup'
import InputComponent from "../../input"
import Button from "../../button";
import '../../../App.css'


const validationSchema = Yup.object().shape({
  username: Yup.string().required('your username is Required'),
  email: Yup.string().email('Invalid email address').required('Email is Required'),
  password: Yup.string().required('Password is Required').min(6, 'Password is too short - should be 6 chars minimum.'),
  re_password: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords do not match').required('Confirm Password is Required'),
})

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, success, error, user } = useSelector(state => state.auth)
  console.log(useSelector(state => state.auth))
    const initialValues = {
      username: '',
      email: '',
      password: '',
      re_password: '',
    }

    // useEffect(() => {
    //   if(success) navigate('/')
    // },[success, navigate])
    
    const handleSubmit = (values) => {
      values.email = values.email.toLowerCase()
      dispatch(registerUser(values))
      // console.log(values)
      console.log(error)
      if (success){
        navigate('/success')
      }
    }
  
  return(
      <React.Fragment>
          <main className='2xl:max-w-[1440px] mx-auto font-DMsans text-black'>
            <div className='lg:m-[4rem] pt-[5rem] bg-[#F7F2FF]'>
              <div className="lg:w-[50%] sm:w-[80%] md:w-[37.5rem] w-full mx-auto p-[2rem]">
                <h1 className='text-black text-[1.5rem] lg:text-[2.25rem] font-medium'>Get your State Profile Account</h1>
                <p className="lg:text-[1.125rem] text-[1rem] font-normal">Already have an account? 
                  <Link to='/' className="text-purple ml-2">Log in</Link>
                </p>

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
                  <ErrorMessage name="email" component="div" className='error'/>
                  <Field
                      id="email"
                      name="email"
                      className="text-[1.125rem] font-normal mb-[.5rem]"
                      render={({ field }) => (
                      <InputComponent
                          id='email'
                          label="E-mail Address"
                          type="text"
                          classNames={`placeholder:text-[.8rem] mb-[.5rem] placeholder:leading-5 font-normal placeholder:gray-400 placeholder:text-grey pl-[1rem]`}
                          placeholder="Enter your email address"
                          {...field}
                      />
                      )}
                  />

                  <ErrorMessage name="password" component="div" className='error'/>
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
                            classNames={`w-full inline-block placeholder:text-[.8rem] mb-[.5rem] placeholder:leading-5 font-normal placeholder:gray-400 placeholder:text-grey pl-[1rem]`}
                            {...field}
                          />
                      )}
                  />
                    {/* <span className="material-symbols-outlined">visibility</span> */}
                  <ErrorMessage name="re_password" component="div" className='error'/>
                  <Field
                      id="re_password"
                      name="re_password"
                      className="text-[1.125rem] font-normal mb-[.5rem]"
                      render={({ field }) => (
                      <InputComponent
                        isVisibility={true}
                        id='re_password'
                        label="confirm password"
                        type="password"
                        placeholder="confirm your password"
                        classNames={`placeholder:text-[.8rem] mb-[.5rem] placeholder:leading-5 font-normal placeholder:gray-400 placeholder:text-grey pl-[1rem]`}
                        {...field}
                      />
                      )}
                  />

                  <div className='flex items-center justify-between mt-3'>
                    <div>
                      <input type="checkbox" />
                      <label className='ml-3'>Keep me signed in</label>
                    </div>
                    {/* <Link>forgot password?</Link> */}
                  </div>

                  { error && <p className="mt-4 text-[#df0000] text-center text-[1rem]">{error}</p>}

                  <Button type='submit' 
                    disabled={loading} 
                    classNames={`bg-purple hover:bg-[#7C43D9] text-[1rem] leading-9 lg:text-[1.5rem] mt-[3rem] font-medium text-white w-full`}>
                    {loading ? 'Loading...' : 'Register'}
                  </Button>
                  </Form>
                </Formik>
              </div>
            </div>
            {/* <footer className="pl-[4rem] mb-8">
              Powered by Spark Solution Team © {new Date().getFullYear()}
            </footer> */}
          </main>
      </React.Fragment>
    )
}
export default Register
