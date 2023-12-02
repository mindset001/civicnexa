import React, { Component, useState, useEffect } from 'react';
import { Stepper } from 'react-form-stepper';
// import '../../../src/';
import './form.css'
import NaijaState from 'naija-state-local-government';
import Select from "react-select";

class PersonalDetails extends Component {

  
  continue = e => {
    e.preventDefault();
    const isFirstNameValid = this.props.validateFirstName();
    const isLastNameValid = this.props.validateLastName();
    const isOtherNameValid = this.props.validateOtherName();
    if (isFirstNameValid && isLastNameValid && isOtherNameValid) {
      this.props.nextStep();
    }
  }



  render() {
    const {
      firstname,
      lastname,
      othername,
      nin,
      phone,
      handleChange,
      validateFirstName,
      validateLastName,
      validateOtherName,
      isErrorFirstName,
      isErrorLastName,
      isErrorNin,
      isErrorOtherName,
      errorMessageFirstName,
      errorMessageOtherName,
      errorMessageLastName
    } = this.props;

   

    return (
      <div className='form'>
        <form>

          <Stepper
           steps={[{ label: 'Personal details' }, { label: 'Relationships' }, { label: 'Health Information' }, { label: 'Financial Information' }]}
            
            activeStep={0}
            styleConfig={{
              activeBgColor: '#924FFF',
              activeTextColor: '#fff',
              inactiveBgColor: '#fff',
              inactiveTextColor: '#2b7cff',
              completedBgColor: '#fff',
              completedTextColor: '#2b7cff',
              size: '3em'
            }}
            className={'stepper'}
            stepClassName={'stepper__step'}
          />

          <div className='form-group'>
            <div className='form-group__element'>
              <label htmlFor='first name' className='form-group__label'>
                First name
              </label>
              <input type='text' value={firstname} name='first name' onChange={handleChange('firstname')} onBlur={validateFirstName} className='form-group__input' />
              <p className='error'>{isErrorFirstName && errorMessageFirstName}</p>
            </div>

            <div className='form-group__element'>
              <label htmlFor='last name' className='form-group__label'>
                Last name
              </label>
              <input type='text' value={lastname} name='last name' onChange={handleChange('lastname')} onBlur={validateLastName} className='form-group__input' />
              <p className='error'>{isErrorLastName && errorMessageLastName}</p>
            </div>
            <div className='form-group__element'>
              <label htmlFor='other name' className='form-group__label'>
                Other name
              </label>
              <input type='text' value={othername} name='other name' onChange={handleChange('othername')} onBlur={validateOtherName} className='form-group__input' />
              <p className='error'>{isErrorOtherName && errorMessageOtherName}</p>
            </div>

            <div className='form-group__element'>
              <label htmlFor='nin' className='form-group__label'>
                National Identification Number (NIN)
              </label>
              <input type='number' value={nin} name='last name' onChange={handleChange('nin')} onBlur={validateOtherName} className='form-group__input' />
              <p className='error'>{isErrorNin && errorMessageNin}</p>
            </div>

            <div className='form-group__element'>
              <label htmlFor='phone' className='form-group__label'>
                Phone Number
              </label>
              <input type='text' value={phone} name='phone' onChange={handleChange('phone')} className='form-group__input' placeholder='+234' />
            </div>
            <div className='form-group__element'>
              <label htmlFor='phone' className='form-group__label'>
                Date of Birth
              </label>
              <input type='date' value={phone} name='phone' onChange={handleChange('phone')} className='form-group__input' placeholder='+234' />
            </div>

            <div className="flex justify-between w-[50%] mt-4">
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

            <div className="flex justify-between w-[60%] my-4">
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
            {/* <div>
              <label htmlFor="state_of_origin" className="text-[1.125rem] font-normal mb-[.5rem]">State of Origin</label>
              <Select
                defaulValue={selected}
                onChange={setSelected}
                options={options}
                className="my-2"
              />
            </div> */}
            <div className='form-group__element'>
              <label htmlFor='text' className='form-group__label'>
                Occupation
              </label>
              <input type='text' value={phone} name='phone' onChange={handleChange('phone')} className='form-group__input' placeholder='+234' />
            </div>
            <div className='form-group__element'>
              <label htmlFor='phone' className='form-group__label'>
                Home Address
              </label>
              <textarea type='text' value={phone} name='phone' onChange={handleChange('phone')} className='form-group__input' placeholder='+234'></textarea>
            </div>

            <div className='form-group__element'>
              <label htmlFor='phone' className='form-group__label'>
                Upload Picture
              </label>
              <input type='file' value={phone} name='phone' onChange={handleChange('phone')} className='form-group__input' placeholder='+234'/>
            </div>

          </div>

          <div style={{ textAlign: 'center' }}>
            <button 
            className='rounded-lg bg-[#924FFF] hover:bg-[#7C43D9] text-[1rem] leading-9 lg:text-[1.5rem] mt-[3rem] font-medium text-white w-[62%] ' onClick={this.continue}>Next</button>
          </div>

        </form>
      </div>
    )
  }
}

export default PersonalDetails;