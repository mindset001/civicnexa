import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Createuser from './createuser';
import Relationship from '../../form/relationship';
import Financial from '../../form/financial';
import Success from './success';
import BloodGroup from '../../form/bloodgroup';
import { Link } from 'react-router-dom';
import Form from '../../form/form';


const steps = ['Personal Information', 'Relationships', 'Health Infomation', 'Financial Information'];

export default function stateProfile() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

   console.log('new');
  };

 
 
  // const validationSchema = Yup.object().shape({
  //   first_name: Yup.string().required("your firstname is Required"),
  //   last_name: Yup.string().required("Lastname is Required"),
  //   dob: Yup.string().required("date of birth is Required"),
  //   nin: Yup.string().required("NIN is Required"),
  //   occupation: Yup.string().required("Occupation of birth is Required"),
  //   state_of_origin: Yup.string().required("State of origin is Required"),
  //   state_of_resident: Yup.string().required("State of resident is Required"),
  //   address: Yup.string().required("Address is Required"),
  //   phone: Yup.string().required("Phone is Required"),
  // });
  // const initialValues = {
  //   image: "",
  //   first_name: "",
  //   last_name: "",
  //   other_names: "",
  //   nin: "",
  //   gender: "",
  //   marital: "",
  //   occupation: "",
  //   dob: "",
  //   state_of_origin: "",
  //   state_of_resident: "",
  //   address: "",
  //   phone: "",
  // };

  return (
    <main className='font-DMsans text-black'>
      <div className='lg:m-[4rem] pt-[5rem] bg-[#F7F2FF]'>
        <div className='lg:w-[90%] sm:w-[80%] md:w-[37.5rem] w-full mx-auto p-[2rem]'>
          <h1 className="text-[2.25rem] text-center mb-4 text-black font-medium">Create your State Profile</h1>
              <Form/>
          
        </div>
      </div>
     

    </main>
  )
}
