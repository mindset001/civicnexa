import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputComponent from "../../input";
import Button from "../../button";
import Select from "react-select";
import NaijaStates from 'naija-state-local-government';
import Calendar from 'react-calendar';
// import { useCreateUserMutation } from "../../api/apiSlice";
// import { useFetch } from "../../api/fetch";
import axios from "axios";
// import '../../../../src/'

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required("your firstname is Required"),
  last_name: Yup.string().required("Lastname is Required"),
  dob: Yup.string().required("date of birth is Required"),
  nin: Yup.string().required("NIN is Required"),
  occupation: Yup.string().required("Occupation of birth is Required"),
  state_of_origin: Yup.string().required("State of origin is Required"),
  state_of_resident: Yup.string().required("State of resident is Required"),
  address: Yup.string().required("Address is Required"),
  phone: Yup.string().required("Phone is Required"),
});

const Createuser = () => {
  // const [addUser, { loading }] = useCreateUserMutation();
  // const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  const [selected, setSelected] = useState(null)
  const [origin, setOrigin] = useState(null)
  const [options, setOptions] = useState([]);
  const [localArea, setLocalArea] = useState([])
  const [value, onChange] = useState(new Date())
  const navigate = useNavigate();
  
  const initialValues = {
    image: "",
    first_name: "",
    last_name: "",
    other_names: "",
    nin: "",
    gender: "",
    marital: "",
    occupation: "",
    dob: "",
    state_of_origin: "",
    state_of_resident: "",
    address: "",
    phone: "",
  };

  console.log(NaijaStates.all());

  useEffect(() => {
    // Fetch data from the NaijaStates API
    const fetchData = async () => {
      try {
        const states = NaijaStates.states();

        // Format data into React Select options
        const formattedOptions = states.map(state => ({
          value: state,  // Use the state name as the value
          label: state,
        }));

        setOptions(formattedOptions);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Fetch data from the NaijaStates API
    const fetchState = async () => {
      try {
        const states = NaijaStates.states();

        // Format data into React Select options
        const formattedOptions = states.map(state => ({
          value: state,  // Use the state name as the value
          label: state,
        }));

        setLocalArea(formattedOptions);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchState();
  }, []);

  // const handleSubmit = async (values) => {
  //   const api = "https://civicnexa.onrender.com/"
  //  const config = {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   }
  //   const token = localStorage.getItem('userToken')

  //   try{
  //     if (token) {
  //       setLoading(true)
  //       console.log("token ================>>>>>>>>>>>", token)
  //       console.log("values ================>>>>>>>>>>>", values)
  //       await axios.post(`${api}/api/profile/`, values, config).then(
  //         (response) => {
  //           console.log("response", response)
  //           setLoading(false)
  //         }
  //        ).catch((error) => {
  //         console.log("error", error)
  //         setLoading(false)
  //       })
  //     }
  //   }
  //   catch(error){
  //     console.log("error", error)
  //   }

  //   // console.log("value", values)
  //   // dispatch(addUser(values))
  //   // console.log('error', error)
  // }


  const handleSubmit = async (values) => {
    const api = "https://civicnexa.onrender.com/";
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('userToken')}`, // Include authorization header if using a token
      },
    };

    console.log('IMage', values.image[0])

    console.log("Token:", localStorage.getItem('userToken'));

    try {
      setLoading(true); // Set loading state to true at the start of the function
      console.log("values ================>>>>>>>>>>>", values);

      const response = await axios.post(`${api}api/profile/`, values, config);
      console.log("response", response);
      console.log(response.status)
      if (response.status === 201) {
        alert("User created successfully")
        navigate("/profile")
      }

      // Handle success: You might want to update your state, show a success message, etc.
    } catch (error) {
      console.error("error", error.response);

      // Handle error: You might want to show an error message to the user or log the error more specifically
    } finally {
      setLoading(false); // Set loading state to false after the API call (both success and error cases)
    }
  };

  return (
    <main className="font-DMsans text-black">
      <div className="w-full">
        <div className="">
          {/* <h1 className="text-[2.25rem] text-black font-medium">Create your State Profile</h1> */}
          {/* <p className="text-black font-normal lg:text-[1.125rem]">Fill in your Details</p> */}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="mt-[3rem]">
              <ErrorMessage name="first_name" component="div" className="error" />
              <Field
                id="first_name"
                name="first_name"
                className="text-[1.125rem] font-normal mb-[.5rem]"
                render={({ field }) => (
                  <InputComponent
                    id="first_name"
                    label="First Name"
                    type="text"
                    required
                    placeholder="Enter your firstname"
                    classNames={`placeholder:text-[.8rem] mb-[.5rem] placeholder:leading-5 font-normal placeholder:gray-400 placeholder:text-grey pl-[1rem]`}
                    {...field}
                  />
                )}
              />
              <ErrorMessage name="last_name" component="div" className="error" />
              <Field
                id="last_name"
                name="last_name"
                className="text-[1.125rem] font-normal mb-[.5rem]"
                render={({ field }) => (
                  <InputComponent
                    id="last_name"
                    label="Last name"
                    type="text"
                    placeholder="Enter your lastname"
                    classNames={`placeholder:text-[.8rem] mb-[.5rem] placeholder:leading-5 font-normal placeholder:gray-400 placeholder:text-grey pl-[1rem]`}
                    {...field}
                  />
                )}
              />
              <ErrorMessage name="other_names" component="div" className="error" />
              <Field
                id="other_names"
                name="other_names"
                className="text-[1.125rem] font-normal mb-[.5rem]"
                render={({ field }) => (
                  <InputComponent
                    id="other_names"
                    label="Other Names"
                    type="text"
                    placeholder="Enter your other names"
                    classNames={`placeholder:text-[.8rem] mb-[.5rem] placeholder:leading-5 font-normal placeholder:gray-400 placeholder:text-grey pl-[1rem]`}
                    {...field}
                  />
                )}
              />

              <ErrorMessage name="nin" component="div" className="error" />
              <Field
                id="nin"
                name="nin"
                className="text-[1.125rem] font-normal mb-[.5rem]"
                render={({ field }) => (
                  <InputComponent
                    id="nin"
                    label="National Identification Number (NIN)"
                    type="number"
                    placeholder="Provide your NIN"
                    classNames={`placeholder:text-[.8rem] mb-[.5rem] placeholder:leading-5 font-normal placeholder:gray-400 placeholder:text-grey pl-[1rem]`}
                    {...field}
                  />
                )}
              />


              <ErrorMessage name="phone" component="div" className="error" />
              <Field
                id="phone"
                name="phone"
                className="text-[1.125rem] font-normal mb-[.5rem]"
                render={({ field }) => (
                  <InputComponent
                    id="phone"
                    label="Phone Number"
                    type="number"
                    placeholder="Enter your phone number"
                    classNames={`placeholder:text-[.8rem] mb-[.5rem] placeholder:leading-5 font-normal placeholder:gray-400 placeholder:text-grey pl-[1rem]`}
                    {...field}
                  />
                )}
              />

              <ErrorMessage name="dob" component="div" className="error" />
              <Field
                id="dob"
                name="dob"
                className="text-[1.125rem] font-normal mb-[.5rem]"
                render={({ field }) => (
                  <InputComponent
                    id="dob"
                    label="Date of Birth"
                    type="dob"
                    placeholder="Enter your date of birth"
                    classNames={`placeholder:text-[.8rem] mb-[.5rem] placeholder:leading-5 font-normal placeholder:gray-400 placeholder:text-grey pl-[1rem]`}
                    {...field}
                  />
                )}
              />

                    <div className="flex justify-between w-[70%] mt-4">
                      <label htmlFor="gender" name='gender'>
                        Gender
                      </label>
                      <div>
                      <input type="radio" name="gender" /> Male
                      </div>
                      <div>
                      <input type="radio" name="gender" /> Female
                      </div>
                    </div>

                    <div className="flex justify-between w-[90%] my-4">
                      <label htmlFor="" name='marital'>
                        Marital Status
                      </label>
                      <div>
                      <input type="radio" name="marital" /> Single
                      </div>
                      <div>
                      <input type="radio" name="marital" /> Married
                      </div>
                      <div>
                      <input type="radio" name="marital" /> Divorced
                      </div>
                    </div>
              {/* <Calendar onChange={onChange} value={value} /> */}
              <ErrorMessage
                name="state_of_origin"
                component="div"
                className="error"
              />
              <div>
                <label htmlFor="state_of_origin" className="text-[1.125rem] font-normal mb-[.5rem]">State of Origin</label>
                <Select
                  defaulValue={selected}
                  onChange={setSelected}
                  options={options}
                  className="my-2"
                />
              </div>

              <ErrorMessage
                name="state_of_resident"
                component="div"
                className="error"
              />

              <div>
                <label htmlFor="state_of_resident" className="text-[1.125rem] font-normal mb-[.5rem]">State of Resident</label>
                <Select
                  defaulValue={origin}
                  onChange={setOrigin}
                  options={localArea}
                  className="my-2"
                />
              </div>

              <div>
                <label htmlFor="address" className="text-[1.125rem] font-normal mb-[.5rem] block">Address</label>
                <textarea
                  // value={`Enter your Current Address...`}
                  placeholder="Enter your Current Address..."
                  className="border border-1 h-[8rem] w-full p-2"></textarea>
              </div>



              <div>
                <label htmlFor="image" className="text-[1.125rem] font-normal mb-[.5rem] block">Upload your Image</label>
                <div>
                  <input type="file" id="image" name="image" />
                </div>
              </div>
              {/* <Button
                type="submit"
                disabled={loading}
                classNames={`bg-purple hover:bg-[#7C43D9] text-[1rem] leading-9 lg:text-[1.5rem] mt-[3rem] font-medium text-white w-full`}
              >
                {loading ? "loading" : "Next"}
              </Button> */}
            </Form>
          </Formik>
        </div>
      </div>
    </main>
  );
};

export default Createuser;
