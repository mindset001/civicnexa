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
    nin: '',
    state_of_origin: '',
    state_of_resident: '',
    address: '',
    phone: '',
    nextofkin: [{
      nextRelationship: '',
      nextName: '',
      nextPhone: '',
      nextAddress: '',
    }],
    rel_relation: '',
    rel_name: '',
    rell_relation: '',
    rell_name: '',
    bank:[ 
      {
        account_number: '',
        bank_name: '',
        account_name: '',
        BVN: '',
      },
    ],
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
    // console.log('event: ', e, '\ninput: ', input);
    // console.log(this.state)
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
    if (this.state.othername.length < 2) {
      this.setState({
        isErrorOtherName: true,
        errorMessageOtherName: 'Type your middle name (at least 2 characters)'
      });
      return false;
    }
    return true;
  } 




  submitData = e => {
    const token = localStorage.getItem('userToken');

  const bodydata =  {
    "first_name": this.state.first_name,
    "last_name": this.state.last_name,
    "dob": this.state.dob,
    "state_of_origin": this.state.state_of_origin,
    "state_of_resident": this.state.state_of_resident,
    "address": this.state.address,
    "gender": this.state.gender,
    "occupation": this.state.occupation,
    "marital_status": this.state.marital_status,
    "bloodgroup": "O+",
    "genotype": "AA",
    "phone": this.state.phone,
    "bank": [
      {
        "bank_name": this.state.bank_name,
        "BVN": this.state.BVN,
        "account_name": this.state.account_name,
        "account_number": this.state.account_number,
      },
    ],
    "nextofkin": [
      {
        "name": this.state.nextName,
        "relationship": this.state.nextRelationship,
        "phone": this.state.nextPhone,
        "address": this.state.nextAddress,
      },
    ]
  }

    console.log('body >>>>>>>>>>>>>', bodydata)

    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json' ,
        Authorization: `JWT ${token}`,
      },
      body: JSON.stringify(bodydata)
  };
  // https://civicnexa.onrender.com/profiling/
  fetch('https://civicnexa.onrender.com/profiling/', requestOptions)
      .then(response => response.json())
      .then(data => {
        this.setState({ postId: data.id })
        console.log(data)
        
        if(data.status === 201){
          alert('Data sent');
          window.location.href='/profile'
        }
        // this.props.history
       
      })
      .catch(err => console.log(err))
   
    
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
      dob,
      nin,
      state_of_origin,
      state_of_resident,
      address,
      phone,
      nextofkin: [
        {
          nextRelationship,
          nextName,
          nextPhone,
          nextAddress,
        }
      ],
      rel_relation,
      rel_name,
      rell_relation,
      rell_name,
      bank: [
        {
          account_number,
          bank_name,
          account_name,
          BVN,
        },
      ],
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
            // email={email}
            phone={phone}
            nin={nin}
            date={dob}
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
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            name={nextName}
            phone={nextPhone}
            address={nextAddress}
            relationship={nextRelationship}
            rel_name={rel_name}
            rel_relation={rel_relation}
            rell_name={rell_name}
            rell_relation={rell_relation}
          />
        )
      case 3:
        return (
          <Health 
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            // first_name={first_name}
            // last_name={last_name}
            // email={email}
            img={img}
          />
        )
        case 4:
          return (
            <Financial
              handleChange={this.handleChange}
              nextStep={this.nextStep}
              name={bank_name}
              acct_name={account_name}
              acct_number={account_number}
              bvn={BVN}
              submitData={this.submitData}
            />
          )
      default: return null
    }
  }
}

export default Form;
