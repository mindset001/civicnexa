import React, { Component } from 'react';
import { Stepper } from 'react-form-stepper';
import { Link } from 'react-router-dom';
// import Financial from './financial';
// import './App.css';
import './form.css'

class Financial extends Component {
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
            handleChange,
            acct_num,
            bank_name,
            acct_name,
            bvn,
            submitData
        } = this.props;

        return (
            <div className='form'>
                <form action="">
                <div>
                    <Stepper
                        steps={[{ label: 'Personal details' }, { label: 'Relationships' }, { label: 'Health Information' }, { label: 'Financial Information' }]}
                        activeStep={3}
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
                        <div className="mt-[1rem] w-[100%]">

                            <div className='form-group__element'>
                                <label htmlFor='phone' className='form-group__label'>
                                    Account Name
                                </label>
                                <input type='text' value={acct_name} name='acct_name'  className='form-group__input' placeholder='' />
                            </div>

                            <div className='form-group__element'>
                                <label htmlFor='phone' className='form-group__label'>
                                   Bank Name
                                </label>
                                <input type='text' value={bank_name} name='bank_name'  className='form-group__input' placeholder='' />
                            </div>

                            <div className='form-group__element'>
                                <label htmlFor='phone' className='form-group__label'>
                                    Account Number
                                </label>
                                <input type='number' value={acct_num} name='acct_num'  className='form-group__input' placeholder='' />
                            </div>

                            <div className='form-group__element'>
                                <label htmlFor='phone' className='form-group__label'>
                                    Bank Verification Number (BVN)
                                </label>
                                <input type='number' value={bvn} name='bvn'  className='form-group__input' placeholder='' />
                            </div>
                        </div>
                       



                        <div className=''>
              <Link to='/profile'> <button
                className=' rounded-lg bg-[#924FFF] hover:bg-[#7C43D9] text-[1rem] leading-9 lg:text-[1.5rem] mt-[3rem] font-medium text-white w-[62%]' type='submit' onClick={submitData}>
               Submit </button>
              </Link> 
            </div>
                    </div>




                </div>
                </form>
            </div>
        )
    }
}

export default Financial;
