import React, { Component } from 'react';
import { Stepper } from 'react-form-stepper';
// import './App.css';
import './form.css';

class Health extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  handleBloodGroupChange = (e) => {
    // Handle the change in blood group
    const selectedBloodGroup = e.target.value;
    // Update the state or call a function to handle the change
  };

  handleGenotypeChange = (e) => {
    // Handle the change in genotype
    const selectedGenotype = e.target.value;
    // Update the state or call a function to handle the change
  };

  handleFileUpload = (e) => {
    // Handle the file upload
    const uploadedFile = e.target.files[0];
    // Update the state or call a function to handle the file upload
  };

  render() {
    const {
      blood_group,
      genotype,
      img,
      handleChange,
    } = this.props;

    return (
      <div className='form'>
        <form action=''>
          <div>
            <Stepper
              steps={[
                { label: 'Personal details' },
                { label: 'Relationships' },
                { label: 'Health Information' },
                { label: 'Financial Information' },
              ]}
              activeStep={2}
              styleConfig={{
                activeBgColor: '#924FFF',
                activeTextColor: '#fff',
                inactiveBgColor: '#fff',
                inactiveTextColor: '#2b7cff',
                completedBgColor: '#fff',
                completedTextColor: '#2b7cff',
                size: '3em',
              }}
              className={'stepper'}
              stepClassName={'stepper__step'}
            />

            <div className='form-group'>
              <div className='w-[60%]'>
                <label
                  htmlFor='blood_group'
                  className='text-[1.125rem] font-normal mb-[.5rem]'>
                  Blood Group
                </label>{' '}
                <br />
                <select
                  name='blood_group'
                  id=''
                  value={blood_group}
                  className='form-group__input w-[100%]'
                  required
                  onChange={handleChange('blood_group')}>
                  <option value="">--Select State--</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>O+</option>
                  <option>O-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                </select>
              </div>

              <div className='flex justify-between  mt-6 w-[60%]'>
                <label htmlFor='genotype' name='genotype'>
                  Genotype
                </label>
                <div>
                  <input
                    type='radio'
                    name='genotype'
                    value='AA'
                    onChange={this.handleGenotypeChange}
                  />{' '}
                  AA
                </div>
                <div>
                  <input
                    type='radio'
                    name='genotype'
                    value='AC'
                    onChange={this.handleGenotypeChange}
                  />{' '}
                  AC
                </div>
                <div>
                  <input
                    type='radio'
                    name='genotype'
                    value='AS'
                    onChange={this.handleGenotypeChange}
                  />{' '}
                  AS
                </div>
                <div>
                  <input
                    type='radio'
                    name='genotype'
                    value='SC'
                    onChange={this.handleGenotypeChange}
                  />{' '}
                  SC
                </div>
                <div>
                  <input
                    type='radio'
                    name='genotype'
                    value='SS'
                    onChange={this.handleGenotypeChange}
                  />{' '}
                  SS
                </div>
              </div>

              <div className='form-group__element'>
                <label
                  htmlFor='img'
                  className='form-group__label'>
                  Upload Health Related Document
                </label>
                <input
                  type='file'
                  name='img'
                  className='form-group__input'
                  placeholder=''
                  onChange={this.handleFileUpload}
                />
              </div>

              <div className=''>
                <button
                  className='rounded-lg bg-[#924FFF] hover:bg-[#7C43D9] text-[1rem] leading-9 lg:text-[1.5rem] mt-[3rem] font-medium text-white w-[60%] '
                  type='submit'
                  onClick={this.continue}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Health;
