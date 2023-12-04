import React, { Component, } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
// import 

import PersonalDetails from './personalDetails';
import Health from './summary';
import Financial from './finance';
import Relationships from './relations';

//Sample data
// const navigate = useNavigate();




class Form extends Component {



  state = {
    step: 1,
    first_name: '',
    last_name: '',
    othername: '',
    dob: '',
    address: '',
    state_of_resident: '',
    state_of_origin: '',
    email: '',
    phone: '',
    nin: '',
    nok_relation: '',
    nok_name: '',
    nok_phone: '',
    nok_address: '',
    rel_relation: '',
    rel_name: '',
    rell_relation: '',
    rell_name: '',
    acct_num: '',
    bank_name: '',
    acct_name: '',
    bvn: '',
    isErrorFirstName: true,
    isErrorLastName: true,
    isErrorOtherName: true,
    isErrorPhone: true,
    isErrorNin: true,
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
    console.log('event: ', e, '\ninput: ', input);
    console.log(this.state)
    this.setState({
      [input]: e.target.value
    })

    if (input === 'first_name') {
      if (this.state.first_name.length >= 1) {
        this.setState({
          isErrorFirstName: false
        })
      }
    }

    else if (input === 'last_name') {
      if (this.state.last_name.length >= 1) {
        this.setState({
          isErrorLastName: false
        })
      }
    }
  }

  validateFirstName = () => {
    if (this.state.first_name.length < 2) {
      this.setState({
        isErrorFirstName: true,
        errorMessageFirstName: 'Type your first name (at least 2 characters)'
      });
      return false;
    }
    return true;
  }

  validateLastName = () => {
    if (this.state.last_name.length < 2) {
      this.setState({
        isErrorLastName: true,
        errorMessageLastName: 'Type your last name (at least 2 characters)'
      });
      return false;
    }
    return true;
  } 
  validatePhone = () => {
    if (this.state.phone.length < 11) {
      this.setState({
        isErrorPhone: true,
        errorMessagePhone: 'Type a correct number'
      });
      return false;
    }
    return true;
  } 


  validateOtherName = () => {
    if (this.state.last_name.length < 2) {
      this.setState({
        isErrorOtherName: true,
        errorMessageOtherName: 'Type your middle name (at least 2 characters)'
      });
      return false;
    }
    return true;
  } 




  submitData = e => {

  const bodydata =  {
      "first_name": this.state.first_name,
      "last_name": this.state.last_name,
      "dob": this.state.dob,
      "state_of_origin": this.state.state_of_origin,
      "state_of_resident": this.state.state_of_resident,
      "address": this.state.address,
      "phone": this.state.phone
    }

    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' ,
      Authorization: `JWT ${localStorage.getItem('userToken')}`,
      },
      body: JSON.stringify(bodydata)
  };
  fetch('https://civicnexa.onrender.com/profiling/', requestOptions)
      .then(response => response.json())
      .then(data => {
        this.setState({ postId: data.id })
        console.log(data)
        
        // alert('Data sent');
        window.location.href='/profile'
        // this.props.history
       
      });
   
    
  }

  // redirectToProfile = () => {
  //   const history = useHistory();
  //   history.push('/profile'); // Change '/profile' to the actual path of your profile page
  // };

  render() {
    const {
      step,
      first_name,
      last_name,
      othername,
      email,
      state_of_origin,
      state_of_resident,
      dob,
      address,
      phone,
      nin,
      nok_relation,
    nok_name,
    nok_phone,
    nok_address,
    rel_relation,
    rel_name,
    rell_relation,
    rell_name,
    acct_num,
    bank_name,
    acct_name,
    bvn,
    img,
      isErrorFirstName,
      isErrorLastName,
      isErrorOtherName,
      isErrorPhone,
      isErrorNin,
      errorMessageFirstName,
      errorMessageLastName,
      errorMessageOtherName,
      errorMessagePhone,
      errorMessageNin
    } = this.state;


    
    switch(step) {
      case 1: 
        return (
          <PersonalDetails 
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            first_name={first_name}
            last_name={last_name}
            othername={othername}
            state_of_resident={state_of_resident}
            email={email}
            phone={phone}
            nin={nin}
            dob={dob}
            state_of_origin={state_of_origin}
            address={address}
            validateFirstName={this.validateFirstName}
            validateLastName={this.validateLastName}
            validateOtherName={this.validateOtherName}
            validatePhone={this.validatePhone}
            // validateNin={this.validateNin}
            isErrorFirstName={isErrorFirstName}
            isErrorLastName={isErrorLastName}
            isErrorOtherName={isErrorOtherName}
            isErrorPhone={isErrorPhone}
            isErrorNin={isErrorNin}
            errorMessageFirstName={errorMessageFirstName}
            errorMessageLastName={errorMessageLastName}
            errorMessageOtherName={errorMessageOtherName}
            errorMessagePhone={errorMessagePhone}
            errorMessageNin={errorMessageNin}
          />
        )
      case 2:
        return (
          <Relationships 
            nextStep={this.nextStep}
            nok_name={nok_name}
            nok_phone={nok_phone}
            nok_address={nok_address}
            nok_relation={nok_relation}
            rel_name={rel_name}
            rel_relation={rel_relation}
            rell_name={rell_name}
            rell_relation={rell_relation}
          />
        )
      case 3:
        return (
          <Health 
            nextStep={this.nextStep}
            // first_name={first_name}
            // last_name={last_name}
            email={email}
            img={img}
          />
        )
        case 4:
          return (
            <Financial
              nextStep={this.nextStep}
              bank_name={bank_name}
              acct_name={acct_name}
              acct_num={acct_num}
              bvn={bvn}
              submitData={this.submitData}
            />
          )
      default: return null
    }
  }
}

export default Form;
