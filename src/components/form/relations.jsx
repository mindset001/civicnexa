import React, { Component } from 'react';
import { Stepper } from 'react-form-stepper';
// import './App.css';

class Relationships extends Component {
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
                            activeBgColor: '#2b7cff',
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

                    <div className=' w-[100%]'>
                        <form className="mt-[1rem] ml-[20%] w-[100%]">

                            <div>
                            <p className="text-black font-normal text-[22px] mt-3">Next of Kin</p>
                                <div className='form-group__element'>
                                    <label htmlFor='phone' className='form-group__label'>
                                      Name
                                    </label>
                                    <input type='text' value={phone} name='phone' className='form-group__input' placeholder='' />
                                </div>

                                <div className='form-group__element'>
                                    <label htmlFor='phone' className='form-group__label'>
                                        Relationship
                                    </label>
                                    <input type='text' value={phone} name='phone' className='form-group__input' placeholder='' />
                                </div>

                                <div className='form-group__element'>
                                    <label htmlFor='phone' className='form-group__label'>
                                        Phone Number
                                    </label>
                                    <input type='number' value={phone} name='phone' className='form-group__input' placeholder='+224' />
                                </div>

                                <div className='form-group__element'>
                                    <label htmlFor='phone' className='form-group__label'>
                                        Home Address
                                    </label>
                                   <textarea className="border border-1 h-[8rem] w-[62%] p-2"></textarea>
                                </div>

                            </div>
                            <div>
                                <h1 className="text-black font-normal text-[22px] mt-8 mb-3">Relatives</h1>
                                <div className='form-group__element'>
                                    <label htmlFor='phone' className='form-group__label'>
                                        Name
                                    </label>
                                    <input type='text' value={phone} name='phone' className='form-group__input' placeholder='' />
                                </div>

                                <div className='form-group__element'>
                                    <label htmlFor='phone' className='form-group__label'>
                                        Relationship
                                    </label>
                                    <input type='text' value={phone} name='phone' className='form-group__input' placeholder='' />
                                </div>

                                <div className='form-group__element'>
                                    <label htmlFor='phone' className='form-group__label'>
                                        Name
                                    </label>
                                    <input type='number' value={phone} name='phone' className='form-group__input' placeholder='' />
                                </div>

                                <div className='form-group__element'>
                                    <label htmlFor='phone' className='form-group__label'>
                                        Relationship
                                    </label>
                                    <input type='number' value={phone} name='phone' className='form-group__input' placeholder='' />
                                </div>

                            </div>
                        </form>




                        <div className='buttons'>
                            {/* <button className='buttons__button buttons__button--back' onClick={this.back}>Back</button> */}
                            <button
                                className='rounded-lg bg-[#924FFF] hover:bg-[#7C43D9] text-[1rem] leading-9 lg:text-[1.5rem] mt-[3rem] font-medium text-white w-[62%] ' type='submit' onClick={this.continue}>
                                Next</button>
                        </div>
                    </div>




                </div>
            </div>
        )
    }
}

export default Relationships;