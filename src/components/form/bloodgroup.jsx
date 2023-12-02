import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputComponent from "../input";
import Select from "react-select";
import Button from "../button";
import axios from "axios";

const validationSchema = Yup.object().shape({
    acct_name: Yup.string().required("Account Name of Kin name is Required"),
    bank_name: Yup.string().required("Bank Name is Required"),
    acct_no: Yup.string().required("Account Number is Required"),
    bvn: Yup.string().required("BVN is Required"),

});

const BloodGroup = () => {
    const [loading, setLoading] = useState(false)
    const [selected, setSelected] = useState(null)
    const [origin, setOrigin] = useState(null)
    const [options, setOptions] = useState([]);
    const [localArea, setLocalArea] = useState([])
    const [value, onChange] = useState(new Date())
    const navigate = useNavigate();
    const initialValues = {
        acct_name: "",
        bank_name: "",
        acct_no: "",
        bvn: "",
    };



    const handleSubmit = async (values) => {
        const api = "https://epay-profiling.onrender.com/";
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
                    {/* <p className="text-black font-normal text-[22px] mt-3">Next of Kin</p> */}
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        <Form className="mt-[1rem]">
                           
                           <div>
                <label htmlFor="blood_group" className="text-[1.125rem] font-normal mb-[.5rem]">Blood Group</label>
                <Select
                  defaulValue={selected}
                  onChange={setSelected}
                  options={options}
                  className="my-2"
                />
              </div>
                            
                            <div className="flex justify-between w-[100%] mt-6">
                      <label htmlFor="gender" name='gender'>
                        Genotype
                      </label>
                      <div>
                      <input type="radio" name="gender" /> AA
                      </div>
                      <div>
                      <input type="radio" name="gender" /> AC
                      </div>
                      <div>
                      <input type="radio" name="gender" /> AS
                      </div>
                      <div>
                      <input type="radio" name="gender" /> SC
                      </div>
                      <div>
                      <input type="radio" name="gender" /> SS
                      </div>
                    </div>
                            

                        </Form>
                    </Formik>
                </div>
            </div>
        </main>
    );
};

export default BloodGroup;



