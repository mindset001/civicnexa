import React, { Component, } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';

import PersonalDetails from './personalDetails';
import CourseDetails from './courseDetails';
import Health from './summary';
import Createuser from '../pages/user-details/createuser';
import Financial from './finance';
import Relationships from './relations';

//Sample data
// const navigate = useNavigate();
const coursesData = [
  {
    id: 1,
    courseName: 'HTML',
    category: 'Front-end'
  },
  {
    id: 2,
    courseName: 'CSS',
    category: 'Front-end'
  },
  {
    id: 3,
    courseName: 'JavaScript',
    category: 'Front-end'
  },
  {
    id: 4,
    courseName: 'React',
    category: 'Front-end'
  },
  {
    id: 5,
    courseName: 'Angular',
    category: 'Front-end'
  },
  {
    id: 6,
    courseName: 'Vue',
    category: 'Front-end'
  },
  {
    id: 7,
    courseName: 'Java',
    category: 'Back-end'
  },
  {
    id: 8,
    courseName: 'Python',
    category: 'Back-end'
  },
  {
    id: 9,
    courseName: 'PHP',
    category: 'Back-end'
  },
  {
    id: 10,
    courseName: 'Express',
    category: 'Back-end'
  }       
];

// const levelsData = ['Beginner', 'Intermediate', 'Advanced'];
const levelsData  = ['Personal Information', 'Relationships', 'Health Infomation', 'Financial Information'];

class Form extends Component {
  state = {
    step: 1,
    firstname: '',
    lastname: '',
    othername: '',
    email: '',
    phone: '',
    courses: [],
    level: '',
    isErrorFirstName: true,
    isErrorLastName: true,
    isErrorOtherName: true,
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
    this.setState({
      [input]: e.target.value
    })

    if (input === 'firstname') {
      if (this.state.firstname.length >= 1) {
        this.setState({
          isErrorFirstName: false
        })
      }
    }

    else if (input === 'lastname') {
      if (this.state.lastname.length >= 1) {
        this.setState({
          isErrorLastName: false
        })
      }
    }
  }

  addLevel = e => {
    const levelChosen = e.target.value;
    this.setState({
      level: levelChosen
    });
  };

  addCourse = data => {
    const id = data.map(v => v.id);
    this.setState({
      courses: id
    })
  };

  validateFirstName = () => {
    if (this.state.firstname.length < 2) {
      this.setState({
        isErrorFirstName: true,
        errorMessageFirstName: 'Type your first name (at least 2 characters)'
      });
      return false;
    }
    return true;
  }

  validateLastName = () => {
    if (this.state.lastname.length < 2) {
      this.setState({
        isErrorLastName: true,
        errorMessageLastName: 'Type your last name (at least 2 characters)'
      });
      return false;
    }
    return true;
  } 

  validateOtherName = () => {
    if (this.state.lastname.length < 2) {
      this.setState({
        isErrorOtherName: true,
        errorMessageOtherName: 'Type your last name (at least 2 characters)'
      });
      return false;
    }
    return true;
  } 
  submitData = e => {
    e.preventDefault();
    alert('Data sent');
    // navigate('/success');
    props.history.push("/success");
    Link
  }

  render() {
    const {
      step,
      firstname,
      lastname,
      othername,
      email,
      phone,
      courses,
      level,
      isErrorFirstName,
      isErrorLastName,
      isErrorOtherName,
      errorMessageFirstName,
      errorMessageLastName,
      errorMessageOtherName
    } = this.state;

    const coursesOptions = coursesData.map(el => ({
      course: el.courseName,
      id: el.id,
      category: el.category
    }));

    const coursesChosen = coursesData.filter(el => courses.includes(el.id));
    const coursesChosenSummary = coursesChosen.map(el => (
      <p key={el.id}>
        {el.courseName} - {el.category} 
      </p>
    ));

    const chosenLevel = level;
    
    const levelOptions = levelsData.map((el, index) => (
      <option key={index} value={el}>
        {el}
      </option>
    ));
    
    switch(step) {
      case 1: 
        return (
          <PersonalDetails 
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            firstname={firstname}
            lastname={lastname}
            othername={othername}
            email={email}
            phone={phone}
            validateFirstName={this.validateFirstName}
            validateLastName={this.validateLastName}
            validateOtherName={this.validateOtherName}
            isErrorFirstName={isErrorFirstName}
            isErrorLastName={isErrorLastName}
            isErrorOtherName={isErrorOtherName}
            errorMessageFirstName={errorMessageFirstName}
            errorMessageLastName={errorMessageLastName}
            errorMessageOtherName={errorMessageOtherName}
          />
        )
      case 2:
        return (
          <Relationships 
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            addCourse={this.addCourse}
            coursesOptions={coursesOptions}
            addLevel={this.addLevel}
            levelOptions={levelOptions}
            level={level}
          />
        )
      case 3:
        return (
          <Health 
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            firstname={firstname}
            lastname={lastname}
            email={email}
            phone={phone}
            coursesChosenSummary={coursesChosenSummary}
            chosenLevel={chosenLevel}
            // submitData={this.submitData}
          />
        )
        case 4:
          return (
            <Financial
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              firstname={firstname}
              lastname={lastname}
              email={email}
              phone={phone}
              coursesChosenSummary={coursesChosenSummary}
              chosenLevel={chosenLevel}
              submitData={this.submitData}
            />
          )
      default: return null
    }
  }
}

export default Form;
