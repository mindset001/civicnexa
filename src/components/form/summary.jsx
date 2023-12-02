import React, { Component } from 'react';
import { Stepper } from 'react-form-stepper';
// import './App.css';

class Health extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const {
      firstname,
      lastname,
      email,
      phone,
      coursesChosenSummary,
      chosenLevel,
      submitData,
    } = this.props;

    return (
      <div className='form'>
        <div>
          <Stepper
            steps={[{ label: 'Personal details' }, { label: 'Relationships' }, { label: 'Health Information' }, { label: 'Financial Information' }]}

            activeStep={2}
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

          <div className='ml-[20%]  w-[60%]'>
            <form className="mt-[1rem]">

              <div className='w-[]'>
                <label htmlFor="blood_group" className="text-[1.125rem] font-normal mb-[.5rem]">Blood Group</label> <br />
                  <select name="" id="" className='form-group__input w-[100%]' required>
                    <option value="">
                      --Select Blood Group--
                    </option>
                  </select>
              </div>

              <div className="flex justify-between  mt-6">
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

              <div className='form-group__element'>
              <label htmlFor='phone' className='form-group__label'>
                Upload Health Related Document
              </label>
              <input type='file' value={phone} name='phone' onChange={handleChange('phone')} className='form-group__input' placeholder='+234'/>
            </div>


            </form>
            <div className='buttons'>
              {/* <button className='buttons__button buttons__button--back' onClick={this.back}>Back</button> */}
              <button
                className='rounded-lg bg-[#924FFF] hover:bg-[#7C43D9] text-[1rem] leading-9 lg:text-[1.5rem] mt-[3rem] font-medium text-white w-[100%] ' type='submit' onClick={this.continue}>
                 Next</button>
            </div>



            {/* <div className='buttons'>
              <button
                className='bg-[#924FFF] hover:bg-[#7C43D9] text-[1rem] leading-9 lg:text-[1.5rem] mt-[3rem] font-medium text-white w-[100%] ' type='submit' onClick={submitData}>
                  Submit</button>
            </div> */}
          </div>




        </div>
      </div>
    )
  }
}

export default Health;