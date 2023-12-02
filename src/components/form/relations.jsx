import React, { Component } from 'react';
import { Stepper } from 'react-form-stepper';
// import './App.css';
import './form.css'

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
            handleChange,
            nok_relation,
            nok_name,
            nok_phone,
            nok_address,
            rel_relation,
            rel_name,
            rell_relation,
            rell_name,
        } = this.props;

        return (
            <div className='form'>
                <form action="">
                <div>
                    <Stepper
                        steps={[{ label: 'Personal details' }, { label: 'Relationships' }, { label: 'Health Information' }, { label: 'Financial Information' }]}
                        activeStep={1}
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

                            <div>
                            <p className="text-black font-normal text-[22px] mt-3">Next of Kin</p>
                                <div className='form-group__element'>
                                    <label htmlFor='phone' className='form-group__label'>
                                      Name
                                    </label>
                                    <input type='text' value={nok_name} name='nok_name' className='form-group__input' placeholder='' />
                                </div>

                                <div className='form-group__element'>
                                    <label htmlFor='phone' className='form-group__label'>
                                        Relationship
                                    </label>
                                    <input type='text' value={nok_relation} name='nok_relation' className='form-group__input' placeholder='' />
                                </div>

                                <div className='form-group__element'>
                                    <label htmlFor='phone' className='form-group__label'>
                                        Phone Number
                                    </label>
                                    <input type='number' value={nok_phone} name='phone' className='form-group__input' placeholder='+224' />
                                </div>

                                <div className='form-group__element'>
                                    <label htmlFor='phone' className='form-group__label' value={nok_address}>
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
                                    <input type='text' value={rel_name} name='rel_name' className='form-group__input' placeholder='' />
                                </div>

                                <div className='form-group__element'>
                                    <label htmlFor='phone' className='form-group__label'>
                                        Relationship
                                    </label>
                                    <input type='text' value={rel_relation} name='rel_relation' className='form-group__input' placeholder='' />
                                </div>

                                <div className='form-group__element'>
                                    <label htmlFor='phone' className='form-group__label'>
                                        Name
                                    </label>
                                    <input type='number' value={rell_name} name='rell_name' className='form-group__input' placeholder='' />
                                </div>

                                <div className='form-group__element'>
                                    <label htmlFor='phone' className='form-group__label'>
                                        Relationship
                                    </label>
                                    <input type='number' value={rell_relation} name='rell_relation' className='form-group__input' placeholder='' />
                                </div>

                            </div>
                        </div>




                        <div className=''>
                            {/* <button className='buttons__button buttons__button--back' onClick={this.back}>Back</button> */}
                            <button
                                className='rounded-lg bg-[#924FFF] hover:bg-[#7C43D9] text-[1rem] leading-9 lg:text-[1.5rem] mt-[3rem] font-medium text-white w-[62%] ' type='submit' onClick={this.continue}>
                                Next</button>
                        </div>
                    </div>




                </div>
                </form>
            </div>
        )
    }
}

export default Relationships;