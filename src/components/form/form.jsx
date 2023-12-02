import React, { Component, } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';

import PersonalDetails from './personalDetails';
import Health from './summary';
import Financial from './finance';
import Relationships from './relations';

//Sample data
// const navigate = useNavigate();




class Form extends Component {
  state = {
    step: 1,
    firstname: '',
    lastname: '',
    othername: '',
    email: '',
    phone: '',
    courses: [],
    level: '',
    isErrorFirstName: true,
    isErrorLastName: true,
    isErrorOtherName: true,
    errorMessageFirstName: '',
    errorMessageLastName: '',
    errorMessageOtherName: ''
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    })
  }

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    })
  }

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    })

    if (input === 'firstname') {
      if (this.state.firstname.length >= 1) {
        this.setState({
          isErrorFirstName: false
        })
      }
    }

    else if (input === 'lastname') {
      if (this.state.lastname.length >= 1) {
        this.setState({
          isErrorLastName: false
        })
      }
    }
  }

  validateFirstName = () => {
    if (this.state.firstname.length < 2) {
      this.setState({
        isErrorFirstName: true,
        errorMessageFirstName: 'Type your first name (at least 2 characters)'
      });
      return false;
    }
    return true;
  }

  validateLastName = () => {
    if (this.state.lastname.length < 2) {
      this.setState({
        isErrorLastName: true,
        errorMessageLastName: 'Type your last name (at least 2 characters)'
      });
      return false;
    }
    return true;
  } 

  validateOtherName = () => {
    if (this.state.lastname.length < 2) {
      this.setState({
        isErrorOtherName: true,
        errorMessageOtherName: 'Type your last name (at least 2 characters)'
      });
      return false;
    }
    return true;
  } 
  submitData = e => {
    e.preventDefault();
    alert('Data sent');
    // navigate('/success');
    props.history.push("/success");
    Link
  }

  render() {
    const {
      step,
      firstname,
      lastname,
      othername,
      email,
      phone,
      isErrorFirstName,
      isErrorLastName,
      isErrorOtherName,
      errorMessageFirstName,
      errorMessageLastName,
      errorMessageOtherName
    } = this.state;


    
    switch(step) {
      case 1: 
        return (
          <PersonalDetails 
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            firstname={firstname}
            lastname={lastname}
            othername={othername}
            email={email}
            phone={phone}
            validateFirstName={this.validateFirstName}
            validateLastName={this.validateLastName}
            validateOtherName={this.validateOtherName}
            isErrorFirstName={isErrorFirstName}
            isErrorLastName={isErrorLastName}
            isErrorOtherName={isErrorOtherName}
            errorMessageFirstName={errorMessageFirstName}
            errorMessageLastName={errorMessageLastName}
            errorMessageOtherName={errorMessageOtherName}
          />
        )
      case 2:
        return (
          <Relationships 
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        )
      case 3:
        return (
          <Health 
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            firstname={firstname}
            lastname={lastname}
            email={email}
            phone={phone}
          />
        )
        case 4:
          return (
            <Financial
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              firstname={firstname}
              lastname={lastname}
              email={email}
              phone={phone}
              submitData={this.submitData}
            />
          )
      default: return null
    }
  }
}

export default Form;