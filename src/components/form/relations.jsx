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
        // console.log('Relationships States:',this.props)
        const {
            handleChange,
            nextRelationship,
            nextName,
            nextPhone,
            nextAddress,
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
                                    <label htmlFor='name' className='form-group__label'>
                                      Name
                                    </label>
                                    <input type='text' value={nextName} name='nextName' onChange={handleChange('nextName')} className='form-group__input' placeholder='' />
                                    <input type='text' value={nextName} name='nextName' onChange={handleChange('nextName')} className='form-group__input' placeholder='' />
                                </div>

                                <div className='form-group__element'>
                                    <label htmlFor='relationship' className='form-group__label'>
                                        Relationship
                                    </label>
                                    <input type='text' value={nextRelationship} name='nextRelationship' onChange={handleChange('nextRelationship')} className='form-group__input' placeholder='' />
                                </div>

                                <div className='form-group__element'>
                                    <label htmlFor='phone' className='form-group__label'>
                                        Phone Number
                                    </label>
                                    <input type='number' value={nextPhone} name='nextPhone' onChange={handleChange('nextPhone')} className='form-group__input' placeholder='+224' />
                                </div>

                                <div className='form-group__element'>
                                    <label htmlFor='nok_address' className='form-group__label'>
                                        Home Address
                                    </label>
                                   <textarea 
                                        className="border border-1 h-[8rem] w-[62%] p-2"
                                        value={nextAddress}
                                        name="nextAddress"
                                        onChange={handleChange('nextAddress')}
                                   ></textarea>
                                </div>

                            </div>
                            <div>
                                <h1 className="text-black font-normal text-[22px] mt-8 mb-3">Relatives</h1>
                                <div className='form-group__element'>
                                    <label htmlFor='phone' className='form-group__label'>
                                        Name
                                    </label>
                                    <input type='text' value={rel_name} name='rel_name' onChange={handleChange('rel_name')} className='form-group__input' placeholder='' />
                                </div>

                                <div className='form-group__element'>
                                    <label htmlFor='phone' className='form-group__label'>
                                        Relationship
                                    </label>
                                    <input type='text' value={rel_relation} name='rel_relation' onChange={handleChange('rel_relation')} className='form-group__input' placeholder='' />
                                </div>

                                <div className='form-group__element'>
                                    <label htmlFor='phone' className='form-group__label'>
                                        Name
                                    </label>
                                    <input type='text' value={rell_name} name='rell_name' onChange={handleChange('rell_name')} className='form-group__input' placeholder='' />
                                </div>

                                <div className='form-group__element'>
                                    <label htmlFor='phone' className='form-group__label'>
                                        Relationship
                                    </label>
                                    <input type='text' value={rell_relation} name='rell_relation' onChange={handleChange('rell_relation')} className='form-group__input' placeholder='' />
                                </div>

                            </div>
                        </div>




                        <div className=''>
              {/* <button className='buttons__button buttons__button--back' onClick={this.back}>Back</button> */}
              <button
                className='rounded-lg bg-[#924FFF] hover:bg-[#7C43D9] text-[1rem] leading-9 lg:text-[1.5rem] mt-[3rem] font-medium text-white w-[60%] ' type='submit' onClick={this.continue}>
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