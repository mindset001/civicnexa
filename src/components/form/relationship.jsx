import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputComponent from "../input";
import Button from "../button";
import Select from "react-select";
import NaijaStates from 'naija-state-local-government';
import Calendar from 'react-calendar';
import axios from "axios";

const validationSchema = Yup.object().shape({
    nok_name: Yup.string().required("your Next of Kin name is Required"),
    nok_relationship: Yup.string().required("Lastname is Required"),
    address: Yup.string().required("Address is Required"),
    phone: Yup.string().required("Phone is Required"),
    rel_name_one: Yup.string().required("your Next of Kin name is Required"),
    rel_relationship_one: Yup.string().required("your Next of Kin name is Required"),
    rel_name_two: Yup.string().required("your Next of Kin name is Required"),
    rel_relationship_two: Yup.string().required("your Next of Kin name is Required"),
});

const Relationship = () => {
    const [loading, setLoading] = useState(false)
    const [selected, setSelected] = useState(null)
    const [origin, setOrigin] = useState(null)
    const [options, setOptions] = useState([]);
    const [localArea, setLocalArea] = useState([])
    const [value, onChange] = useState(new Date())
    const navigate = useNavigate();
    const initialValues = {
        nok_name: "",
        nok_relationship: "",
        address: "",
        phone: "",
        rel_name_one: "",
        rel_relationship_one: "",
        rel_name_two: "",
        rel_relationship_two: "",
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
                    <p className="text-black font-normal text-[22px] mt-3">Next of Kin</p>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        <Form className="mt-[1rem]">
                            <ErrorMessage name="nok_name" component="div" className="error" />
                            <Field
                                id="nok_name"
                                name="nok_name"
                                className="text-[1.125rem] font-normal mb-[.5rem]"
                                render={({ field }) => (
                                    <InputComponent
                                        id="nok_name"
                                        label="Name"
                                        type="text"
                                        placeholder=""
                                        classNames={`placeholder:text-[.8rem] mb-[.5rem] placeholder:leading-5 font-normal placeholder:gray-400 placeholder:text-grey pl-[1rem]`}
                                        {...field}
                                    />
                                )}
                            />
                            <ErrorMessage name="nok_relationship" component="div" className="error" />
                            <Field
                                id="nok_relationship"
                                name="nok_relationship"
                                className="text-[1.125rem] font-normal mb-[.5rem]"
                                render={({ field }) => (
                                    <InputComponent
                                        id="nok_relationship"
                                        label="Relationship"
                                        type="text"
                                        placeholder=""
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



                            <div>
                                <label htmlFor="address" className="text-[1.125rem] font-normal mb-[.5rem] block">Home Address</label>
                                <textarea
                                    value={``}
                                    className="border border-1 h-[8rem] w-full p-2"></textarea>
                            </div>
                            <section>
                                <p className="text-black font-normal text-[22px] mt-8 mb-3">Relatives</p>

                                <ErrorMessage name="rel_name_one" component="div" className="error" />
                                <Field
                                    id="rel_name_one"
                                    name="rel_name_one"
                                    className="text-[1.125rem] font-normal mb-[.5rem]"
                                    render={({ field }) => (
                                        <InputComponent
                                            id="rel_name_one"
                                            label="Name"
                                            type="text"
                                            placeholder=""
                                            classNames={`placeholder:text-[.8rem] mb-[.5rem] placeholder:leading-5 font-normal placeholder:gray-400 placeholder:text-grey pl-[1rem]`}
                                            {...field}
                                        />
                                    )}
                                />

                                <ErrorMessage name="rel_relationship_one" component="div" className="error" />
                                <Field
                                    id="rel_relationship_one"
                                    name="rel_relationship_one"
                                    className="text-[1.125rem] font-normal mb-[.5rem]"
                                    render={({ field }) => (
                                        <InputComponent
                                            id="rel_relationship_one"
                                            label="Relationship"
                                            type="text"
                                            placeholder=""
                                            classNames={`placeholder:text-[.8rem] mb-[.5rem] placeholder:leading-5 font-normal placeholder:gray-400 placeholder:text-grey pl-[1rem]`}
                                            {...field}
                                        />
                                    )}
                                />

                                <ErrorMessage name="rel_name_one" component="div" className="error" />
                                <Field
                                    id="rel_name_two"
                                    name="rel_name_two"
                                    className="text-[1.125rem] font-normal mb-[.5rem]"
                                    render={({ field }) => (
                                        <InputComponent
                                            id="rel_name_one"
                                            label="Name"
                                            type="text"
                                            placeholder=""
                                            classNames={`placeholder:text-[.8rem] mb-[.5rem] placeholder:leading-5 font-normal placeholder:gray-400 placeholder:text-grey pl-[1rem]`}
                                            {...field}
                                        />
                                    )}
                                />

                                <ErrorMessage name="rel_relationship_two" component="div" className="error" />
                                <Field
                                    id="rel_relationship_two"
                                    name="rel_relationship_two"
                                    className="text-[1.125rem] font-normal mb-[.5rem]"
                                    render={({ field }) => (
                                        <InputComponent
                                            id="rel_relationship_one"
                                            label="Relationship"
                                            type="text"
                                            placeholder=""
                                            classNames={`placeholder:text-[.8rem] mb-[.5rem] placeholder:leading-5 font-normal placeholder:gray-400 placeholder:text-grey pl-[1rem]`}
                                            {...field}
                                        />
                                    )}
                                />
                            </section>

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

export default Relationship;
