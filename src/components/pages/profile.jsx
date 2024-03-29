import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Select from "react-select";
import Button from '../button';
import { Link } from 'react-router-dom';



const ProfilePage = () => {
   // const history = useHistory();
  const api = "https://civicnexa.onrender.com";
  // const api = "http://127.0.0.1:8000";
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState(null);
  const token = localStorage.getItem('userToken');
  const [select, setSelect] = useState(null);
  const editable = false;

  const signOut = () => {
    localStorage.removeItem('userToken');
    window.location.href = '/';
  }
  
  // const dispatch = useDispatch();
  // const { data, error, isLoading } = useGetProfileQuery('userProfile', { pollingInterval: 90000});
  const [profile, setProfile] = useState({
    first_name: '',
    last_name: '',
    middle_name: '',
    image: '',
    state_code: '',
    email: '',
    state_of_origin: '',
    dob: '',
    gender: '',
    // health_image: '',
    // security_image: '',
    // next_of_kin: {
    //   name: '',
    //   phone: '',
    //   email: '',
    //   address: '',
    // },
    // occupation: '',
    // bank: {
    //   bank_name: '',
    //   account_number: '',
    // },
    bloodgroup: '',
    fingerprint: '',
    address: '',
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const navigate = useNavigate()
  const [selectedGender, setSelectedGender] = useState('');
  const gendersFromAPI = ['Male', 'Female'];
  // console.log('token',localStorage.getItem('userToken'))

  useEffect(() => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${localStorage.getItem('userToken')}`,
      },
      referrerPolicy: 'origin',
    };
    if (localStorage.getItem('userToken') === null) {
      navigate('/')
    }
    // console.log('token',localStorage.getItem('userToken'))
    try {
      axios.get(`${api}/profiling/`, config).then(
        (response) => {
          setLoading(true);
          if (response.data.state_code === undefined) {
            navigate('/stateprofile')
          }

          else{
            // console.log("response", response.data);
            if(response.data){
              // console.log("response", response.data);
              setLoading(false);
              setData(response.data);
              setSelectedGender(data?.gender)
            }
          }
        }
      ).catch((error) => {
        console.log("error", error);
        setLoading(false);
        setError('Failed to fetch data');
      });
    } catch (error) {
      console.log("error", error);
      setError('Failed to fetch data');
      setLoading(false);
    }
  }, [token, api, navigate, data])

//    const logout = () => { 
//       setData(false)
//     history.push('/');
   

// };

  
// useEffect(() => {


// }, [])
  const [maritalStatus, setMaritalStatus] = useState('');
  const [inputValues, setInputValues] = useState({
    singleInput1: '',
    singleInput2: '',
    marriedInput1: '',
    marriedInput2: '', 
    marriedInput3: '',
  });

  // const handleRadioChange = (status) => {
  //   setMaritalStatus(status);
  //   setInputValues({
  //     singleInput1: '',
  //     singleInput2: '',
  //     marriedInput1: '',
  //     marriedInput2: '',
  //     marriedInput3: '',
  //   });
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const getInputFields = () => {
    if (maritalStatus === 'single') {
      return (
        <div className='mt-4 space-y-2'>
          <label className='mx-[20px] lg:w-[50%]'>
          <span className="block text-sm font-medium text-slate-700 mb-2">Sibling</span>
            <input
              type='text'
              name='singleInput1'
              value={inputValues.singleInput1}
              onChange={handleInputChange}
              className='px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </label>
          <label className='mx-[20px] lg:w-[50%]'>
            <span className="block text-sm font-medium text-slate-700 mb-2">Parent or Guardian</span>
            <input
              type='text'
              name='singleInput2'
              value={inputValues.singleInput2}
              onChange={handleInputChange}
              className='px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </label>
        </div>
      );
    } else if (maritalStatus === 'married') {
      return (
        <div className='mt-4 space-y-2'>
          <label className='mx-[20px] lg:w-[50%]'>
            <span className="block text-sm font-medium text-slate-700 mb-2">Spouse Name</span>
            <input
              type='text'
              name='marriedInput1'
              value={inputValues.marriedInput1}
              onChange={handleInputChange}
              className='px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </label>
          <label className='mx-[20px] lg:w-[50%]'>
            <span className="block text-sm font-medium text-slate-700 mb-2">children</span>
            <input
              type='text'
              name='marriedInput2'
              value={inputValues.marriedInput2}
              onChange={handleInputChange}
              className='px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </label>
          <label className='mx-[20px] lg:w-[50%]'>
            <span className="block text-sm font-medium text-slate-700 mb-2">Married Input 3:</span>
            <input
              type='text'
              name='marriedInput3'
              value={inputValues.marriedInput3}
              onChange={handleInputChange}
              className='px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </label>
        </div>
      );
    }
    return false;
  };

  const options = [
    {value: 'single', label: 'single'},
    {value: 'married', label: 'married'},
  ]

    return (
        <React.Fragment>
            <main className='2xl:max-w-[1440px] lg:px-[4rem] px-4'>
                <div className='font-DMsans text-black'>
                    <div className='lg:flex items-center justify-between py-[2rem] lg:border-b-[1px] border-[#D5D5D5]'>
                      <div className=''>
                        <h3 className='text-[1.5rem] font-medium leading-4 mb-2'>Welcome {data?.first_name}!</h3>
                        <div>
                          <span className='text-[1.125rem] fonr-normal'>State Code</span> {`  -  `}
                          <span className='text-[1.5rem] lg:text-[2rem] font-medium'>{data?.state_code}</span>
                        </div>
                      </div>
                      <div className='flex items-center'>
                        <Link to={'#'}>
                          <Button classNames='text-white font-medium bg-[#df0000] rounded-lg px-[2rem] mr-4'>
                            Make Emergency call / Text
                          </Button></Link>
                        <Link to={`https://civicnexa.onrender.com/payment/requestlogin/${data?.state_code}`}>
                        <Button classNames='text-white font-medium bg-purple rounded-lg px-[2rem] mr-4'>
                          Make Payment
                        </Button></Link>
                        <button
                          onClick={signOut} 
                          className='text-[#d10000] text-[1rem] font-normal leading-tight flex items-center gap-[.5rem]'
                        >
                          <span className="material-symbols-outlined">logout</span>
                          <span className='capitalize'> Sign Out</span>
                        </button>
                      </div>
                    </div>
                    <div className=''>
                        {data && (
                          <form className=''>
                            <div className='mt-[1.5rem] border-b-[1px] border-[#D5D5D5]'>
                            
                              {/* PERSONAL INFORMATIONS */}

                              <h3 className='font-medium text-[1.25rem] mb-[2rem]'>Personal Information</h3>
                              <div className='mt-[1.5rem] lg:flex items-center gap-[3.5rem]'>
                                <div className='flex-1'>
                                  <label className="flex items-center gap-[1rem] mb-[2rem]">
                                      <span className="text-[1rem] font-normal block w-[30%]">First Name</span>
                                      <input type="text" name='firstname' placeholder="Micheal"
                                        value={data?.first_name}
                                        onChange={handleFormChange}
                                        disabled
                                        required className="mt-1 w-full px-3 py-2 bg-white 
                                        border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                      "/>
                                  </label>
                                  <label className="flex items-center gap-[1rem] mb-[2rem]">
                                      <span className="text-[1rem] font-normal w-[30%]">Last Name</span>
                                      <input type="text" name='lastname' placeholder="Doe"
                                        value={data?.last_name}
                                        onChange={handleFormChange}
                                        disabled
                                        required className="mt-1 w-full px-3 py-2 bg-white 
                                        border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                      "/>
                                  </label>
                                  <label className="flex items-center gap-[1rem] mb-[2rem]">
                                      <span className="text-[1rem] font-normal w-[30%]">Other Name</span>
                                      <input type="text" name='othername' placeholder="Oka"
                                        value={data?.middle_name}
                                        onChange={handleFormChange}
                                        disabled
                                        required className="mt-1 w-full px-3 py-2 bg-white 
                                        border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                      "/>
                                  </label>
                                  <label className="flex items-center gap-[1rem] mb-[2rem]">
                                      <span className="text-[1rem] font-normal w-[30%]">E-mail Address</span>
                                      <input type="text" name='email' placeholder="Micheal"
                                        value={data?.email}
                                        onChange={handleFormChange}
                                        disabled
                                        required className="mt-1 w-full px-3 py-2 bg-white 
                                        border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                      "/>
                                  </label>
                                  <label className="flex items-center gap-[1rem] mb-[2rem] hidden">
                                      <span className="text-[1rem] font-normal w-[30%]">NIN</span>
                                      <input type="text" name='nin' placeholder="1223444"
                                        value={data?.nin}
                                        onChange={handleFormChange}
                                        disabled
                                        required className="mt-1 w-full px-3 py-2 bg-white 
                                        border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                      "/>
                                  </label>
                                  <div className='flex items-center gap-[1rem] mb-[2rem]'>
                                    <span className="text-[1rem] font-normal w-[22%]">Gender</span>
                                    {gendersFromAPI.map((gender, index) => (
                                      <label key={index} className=''>
                                        <span className='text-sm mx-[7px] font-medium text-slate-700'>{gender}</span>
                                        <input
                                          type='radio'
                                          name='gender'
                                          value={gender}
                                          checked={selectedGender === gender}
                                          onChange={() => setSelectedGender(gender)}
                                        />
                                      </label>
                                    ))}
                                  </div>
                              </div>
                                
                                <div className='flex-1'>
                                  <label className="flex items-center gap-[1rem] mb-[2rem]">
                                      <span className="text-[1rem] font-normal w-[30%]">Occupation</span>
                                      <input type="text" name='occupation' placeholder="trader"
                                        value={data?.occupation}
                                        onChange={handleFormChange}
                                        disabled
                                        required className="mt-1 w-full px-3 py-2 bg-white 
                                        border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                      "/>
                                  </label>
                                  <label className="flex items-center gap-[1rem] mb-[2rem]">
                                      <span className="text-[1rem] font-normal w-[30%]">Phone Number</span>
                                      <input type="number" name='number' placeholder="Doe"
                                        value={data?.phone} 
                                        onChange={handleFormChange}
                                        disabled
                                        required className="mt-1 w-full px-3 py-2 bg-white 
                                        border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                      "/>
                                  </label>
                                  <label className="flex items-center gap-[1rem] mb-[2rem]">
                                      <span className="text-[1rem] font-normal w-[30%]">Date of Birth</span>
                                      <input type="text" name='dob' placeholder="20-00-2015"
                                        value={data?.dob}
                                        onChange={handleFormChange}
                                        disabled
                                        required className="mt-1 w-full px-3 py-2 bg-white 
                                        border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                      "/>
                                  </label>
                                  <div className='flex items-center gap-[1rem] mb-[2rem]'>
                                    <span className="text-[1rem] font-normal w-[23%]">Marital Status</span>
                                    <label  className=''>
                                        <span className='text-sm  mx-[7px] font-medium text-slate-700'>Single</span>
                                        <input type='radio' />
                                    </label>
                                    <label className=''>
                                        <span className='text-sm mx-[7px]  font-medium text-slate-700'>Married</span>
                                        <input type='radio' />
                                    </label>
                                    <label className=''>
                                        <span className='text-sm mx-[7px]  font-medium text-slate-700'>Divorced</span>
                                        <input type='radio' />
                                    </label>
                                  </div>
                                  <label className="flex gap-[1rem] mb-[2rem]">
                                      <span className="text-[1rem] font-normal w-[30%]">Home Address</span>
                                      <textarea type="text" name='nin' placeholder="1223444"
                                        value={data?.address}
                                        onChange={handleFormChange}
                                        disabled
                                        required className="mt-1 h-[100px] w-full px-3 py-2 bg-white 
                                        border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                      "></textarea>
                                  </label>
                                </div>
                              </div>
                              
                            </div>

                            {/* END OF PERSONAL INFORMATION */}

                            <div className='mt-[1.5rem] border-b-[1px] border-[#D5D5D5]'>
                            
                              {/* NEXT OF KIN INFORMATIONS */}

                              <div className='flex items-center justify-between'>
                                <h3 className='font-medium text-[1.25rem]'>Next of Kin Details</h3>
                                {/* <h3 className='font-medium text-[1.25rem] absolute right-[470px]'>Relative Details</h3> */}
                              </div>
                              <div className='mt-[1.5rem] lg:flex gap-[3.5rem] lg:w-[50%]'>
                                <div className='flex-1'>
                                  <label className="flex items-center gap-[1rem] mb-[2rem]">
                                      <span className="text-[1rem] font-normal w-[30%]">Name</span>
                                      <input type="text" name='firstname' placeholder="Micheal"
                                        value={data?.nextofkin[0].name}
                                        onChange={handleFormChange}
                                        disabled
                                        required className="mt-1 w-full px-3 py-2 bg-white 
                                        border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                      "/>
                                  </label>
                                  <label className="flex items-center gap-[1rem] mb-[2rem]">
                                      <span className="text-[1rem] font-normal w-[30%]">Relationship</span>
                                      <input type="text" name='lastname' placeholder="Doe"
                                        value={data?.nextofkin[0].relationship}
                                        onChange={handleFormChange}
                                        disabled
                                        required className="mt-1 w-full px-3 py-2 bg-white 
                                        border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                      "/>
                                  </label>
                                  <label className="flex items-center gap-[1rem] mb-[2rem]">
                                      <span className="text-[1rem] font-normal w-[30%]">Phone Number</span>
                                      <input type="number" name='phone' placeholder="Oka"
                                        value={data?.nextofkin[0].phone}
                                        onChange={handleFormChange}
                                        disabled
                                        required className="mt-1 w-full px-3 py-2 bg-white 
                                        border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                      "/>
                                  </label>
                                  <label className="flex gap-[1rem] mb-[2rem]">
                                      <span className="text-[1rem] font-normal w-[30%]">Home Address</span>
                                      <textarea type="text" name='nin' placeholder="1223444"
                                        value={data?.nextofkin[0].address}
                                        onChange={handleFormChange}
                                        disabled
                                        required className="mt-1 h-[100px] w-full px-3 py-2 bg-white 
                                        border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                      "></textarea>
                                  </label>
                              </div> 
                                <div className='flex-1 hidden'>
                                  <label className="flex items-center gap-[1rem] mb-[2rem]">
                                      <span className="text-[1rem] font-normal w-[30%]">Name</span>
                                      <input type="text" name='occupation' placeholder="tola"
                                        value={data?.occupation}
                                        onChange={handleFormChange}
                                        disabled
                                        required className="mt-1 w-full px-3 py-2 bg-white 
                                        border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                      "/>
                                  </label>
                                  <label className="flex items-center gap-[1rem] mb-[2rem]">
                                      <span className="text-[1rem] font-normal w-[30%]">Relationship</span>
                                      <Select 
                                        defaultValue={select}
                                        onChange={setSelect}
                                        disabled
                                        options={options}
                                        className='mt-1 w-full px-3 py-2 bg-white placeholder-slate-400'
                                      />
                                  </label>
                                </div>
                              </div>
                            </div>

                            {/* {END OF NEXT OF KIN INFORMATION} */}

                            {/* BANK AND HEALTH INFORMATIONS */}

                            <div className='lg:flex mt-[2rem] gap-[3.5rem] border-b-[1px] border-[#D5D5D5]'>
                              <div className='flex-1'>
                                <h3 className='font-medium text-[1.25rem] mb-[2rem]'>Bank Informations</h3>
                                <label className="flex items-center gap-[1rem] mb-[2rem]">
                                    <span className="text-[1rem] font-normal w-[30%]">Account Name</span>
                                    <input type="text" placeholder="First Bank" name='bank'
                                      value={data?.bank[0].account_name}
                                      onChange={handleFormChange}
                                      disabled
                                      required className="mt-1 block w-full px-3 py-2 bg-white 
                                      border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                    "/>
                                </label>
                                <label className="flex items-center gap-[1rem] mb-[2rem]">
                                    <span className="text-[1rem] font-normal w-[30%]">Bank Name</span>
                                    <input type="text" placeholder="John Doe" name='account_name'
                                      value={data?.bank[0].bank_name} 
                                      onChange={handleFormChange}
                                      disabled
                                      required className="mt-1 block w-full px-3 py-2 bg-white 
                                      border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                    "/>
                                </label>
                                <label className="flex items-center gap-[1rem] mb-[2rem]">
                                    <span className="text-[1rem] font-normal w-[30%]">Account Number</span>
                                    <input type="text" placeholder="**********" name='account_number' 
                                      value={data?.bank[0].account_number}
                                      onChange={handleFormChange}
                                      disabled
                                      required className="mt-1 block w-full px-3 py-2 bg-white 
                                      border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                    "/>
                                </label>
                                <label className="flex items-center gap-[1rem] mb-[2rem] hidden">
                                  <span className="text-[1rem] font-normal w-[30%]">BVN</span>
                                  <input type="text" placeholder="**********" name='bvn'
                                    value={data?.bank[0].BVN}
                                    onChange={handleFormChange}
                                    disabled
                                    required className="mt-1 block w-full px-3 py-2 bg-white 
                                    border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                  "/>
                              </label>
                              </div>
                              <div className='flex-1'>
                                <h3 className='font-medium text-[1.25rem] mb-[2rem]'>Health Information</h3>
                                <label className="flex items-center gap-[1rem] mb-[2rem]">
                                    <span className="block text-sm font-medium text-slate-700">Blood Group</span>
                                    <input type="text" placeholder="Micheal" name='occupation'
                                      value={data?.bloodgroup}
                                      onChange={handleFormChange}
                                      disabled
                                      required className="mt-1 block w-full px-3 py-2 bg-white 
                                      border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                    "/>
                                </label>
                                <label className="flex items-center gap-[1rem] mb-[2rem]">
                                    <span className="block text-sm font-medium text-slate-700">Genotype</span>
                                    <input type="text" placeholder="" name='genotype'
                                      value={data?.genotype}
                                      onChange={handleFormChange}
                                      disabled
                                      required className="mt-1 block w-full px-3 py-2 bg-white 
                                      border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                    "/>
                                </label>
                                <label className="flex items-center gap-[1rem] mb-[2rem] hidden">
                                    <span className="block text-sm font-medium text-slate-700">Health Image</span>
                                    <input type="file" name='health_image'
                                      value={data?.health_image}
                                      onChange={handleFormChange}
                                      disabled
                                      required className="mt-1
                                    "/>
                                </label>
                              </div>
                            </div>
                            {/* <div className='flex mt-[2rem] gap-[3.5rem] border-b-[1px] border-[#D5D5D5]'>
                              <div className='mb-[2rem] flex-1'>
                                <h3 className='font-medium text-[1.25rem] mb-[2rem]'>Security Information</h3>
                                <label className="flex flex-col gap-[1rem] mb-[2rem]">
                                    <span className="text-start">upload File</span>
                                    <div className='mt-1 border-[1px] border-[#D5D5D5] mx-auto w-[500px] h-[200px]'>
                                      <input type="file" name='security_image'
                                        value={data?.security_image}
                                        onChange={handleFormChange}
                                        required className="my-[5rem] ml-[7rem]
                                      "/>
                                    </div>
                                </label>
                              </div>
                              <div className='flex-1 flex flex-col justify-between py-[4rem]'>
                                <p></p>
                                <div className='flex gap-[1.5rem]'>
                                  <Button classNames='text-purple font-medium border-[1px] border-purple rounded-lg px-[2rem]'>Undo Changes</Button>
                                  <Button classNames='text-white font-medium bg-purple rounded-lg px-[2rem]'>Save Changes</Button>
                                </div>
                              </div>
                            </div> */}
                              
                              {/* <div className='my-5 lg:ml-5'>
                                  <span className="block text-sm font-medium text-slate-700">Marital Status</span>
                                  <label  className='mx-[20px] lg:w-[50%]'>
                                      <span className='text-sm  mx-[7px] font-medium text-slate-700'>Single</span>
                                      <input type='radio'
                                        name='maritalStatus'
                                        value='single'
                                        onChange={() => handleRadioChange('single')}
                                      />
                                  </label>
                                  <label className='mx-[20px] lg:w-[50%]'>
                                      <span className='text-sm mx-[7px]  font-medium text-slate-700'>Married</span>
                                      <input type='radio'
                                        name='maritalStatus'
                                        value='married'
                                        onChange={() => handleRadioChange('married')}
                                      />
                                  </label>
                                  {maritalStatus && (
                                    <div>{getInputFields()}</div>
                                  )}
                              </div>
                              <label className="block py-2 lg:w-[45%] lg:mr-[10px]">
                                  <span className="block text-sm font-medium text-slate-700">Fingerprint</span>
                                  <input type="text" name='fingerprint'
                                    value={data?.bank.fingerprint}
                                    onChange={handleFormChange}
                                    required className="mt-1 block w-[20%] px-3 py-2 bg-white 
                                    border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                  "/>
                              </label> */}
                          </form>
                        )}
                    </div>
                </div>
                {/* <footer className='my-[2.5rem] text-[1rem] leading-tight'>Powered by Civicnexa software © { new Date().getFullYear()}</footer> */}
            </main>
        </React.Fragment>
    )
}

export default ProfilePage