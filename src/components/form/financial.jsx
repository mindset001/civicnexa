import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputComponent from "../input";
import Button from "../button";
import axios from "axios";

const validationSchema = Yup.object().shape({
    acct_name: Yup.string().required("Account Name of Kin name is Required"),
    bank_name: Yup.string().required("Bank Name is Required"),
    acct_no: Yup.string().required("Account Number is Required"),
    bvn: Yup.string().required("BVN is Required"),

});

const Financial = () => {
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
                    {/* <p className="text-black font-normal text-[22px] mt-3">Next of Kin</p> */}
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        <Form className="mt-[1rem]">
                            <ErrorMessage name="acct_name" component="div" className="error" />
                            <Field
                                id="acct_name"
                                name="acct_name"
                                className="text-[1.125rem] font-normal mb-[.5rem]"
                                render={({ field }) => (
                                    <InputComponent
                                        id="acct_name"
                                        label="Account Name"
                                        type="text"
                                        placeholder=""
                                        classNames={`placeholder:text-[.8rem] mb-[.5rem] placeholder:leading-5 font-normal placeholder:gray-400 placeholder:text-grey pl-[1rem]`}
                                        {...field}
                                    />
                                )}
                            />
                            <ErrorMessage name="bank_name" component="div" className="error" />
                            <Field
                                id="bank_name"
                                name="bank_name"
                                className="text-[1.125rem] font-normal mb-[.5rem]"
                                render={({ field }) => (
                                    <InputComponent
                                        id="bank_name"
                                        label="Bank Name"
                                        type="text"
                                        placeholder=""
                                        classNames={`placeholder:text-[.8rem] mb-[.5rem] placeholder:leading-5 font-normal placeholder:gray-400 placeholder:text-grey pl-[1rem]`}
                                        {...field}
                                    />
                                )}
                            />
                            
                            <ErrorMessage name="acct_no" component="div" className="error" />
                            <Field
                                id="acct_no"
                                name="acct_no"
                                className="text-[1.125rem] font-normal mb-[.5rem]"
                                render={({ field }) => (
                                    <InputComponent
                                        id="acct_no"
                                        label="Account Number"
                                        type="number"
                                        placeholder=""
                                        classNames={`placeholder:text-[.8rem] mb-[.5rem] placeholder:leading-5 font-normal placeholder:gray-400 placeholder:text-grey pl-[1rem]`}
                                        {...field}
                                    />
                                )}
                            />

                            <ErrorMessage name="bvn" component="div" className="error" />
                            <Field
                                id="bvn"
                                name="bvn"
                                className="text-[1.125rem] font-normal mb-[.5rem]"
                                render={({ field }) => (
                                    <InputComponent
                                        id="bvn"
                                        label="Bank Verification Number (BVN)"
                                        type="number"
                                        placeholder=""
                                        classNames={`placeholder:text-[.8rem] mb-[.5rem] placeholder:leading-5 font-normal placeholder:gray-400 placeholder:text-grey pl-[1rem]`}
                                        {...field}
                                    />
                                )}
                            />



                            


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

export default Financial;
