import React from 'react';
import { connect } from 'react-redux';

import PersonalInfoForm from './PersonalInfoForm';
import InterestsForm from './InterestsForm';

const Onboarder = (props) => {

  const { formNum } = props;

  // Switch forms, based on formNum value
  switch (formNum) {
    case 1:
      return (
        <div className="container">
          <PersonalInfoForm />
        </div>
      );
    case 2:
      return (
        <div className="container">
          <InterestsForm />
        </div>
      );
    default:
      return (
        <div className="container">
          <PersonalInfoForm />
        </div>
      );
  }
};

const mapStateToProps = (state) => {
  return {
    formNum: state.formNum
  };
};

export default connect(mapStateToProps)(Onboarder);