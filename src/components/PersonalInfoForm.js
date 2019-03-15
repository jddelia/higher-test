import React from 'react';
import { connect } from 'react-redux';

import { setFormNum, saveForm } from '../actions/formActions';

import FormHeader from './FormHeader';

const PersonalInfoForm = (props) => {
  
  // Change for number when next button is clicked
  function handleNextClick() {
    props.setFormNum(props.formNum);
  }

  // Save data entered in form, when user clicks save
  function handleSaveClick(e) {
    e.preventDefault();
    const formData = {};
    const formInputs = e.target.children; // Array-like DOM object

    // Borrow Array method forEach, to iterate of formInputs
    // DOM object
    Array.prototype.forEach.call(formInputs, item => {
      const input = item.children[1]; // Access form input element
      formData[input.name] = input.value; // Save input name/value as property/value
    });

    // Dispatch
    props.saveForm(formData);
  }

  const { 
    fName, lName, email, 
    address, zipCode, state
  } = props;
  
  return (
    <div className="formContainer">
      <FormHeader subtitle={"Personal Information"} />

      <form onSubmit={handleSaveClick}>
        <div>
          <label>
            First Name:
          </label>
          <input type="text" defaultValue={fName} name="fName" />
        </div>

        <div>
          <label>
            Last Name: 
          </label>
          <input type="text" defaultValue={lName} name="lName" />
        </div>

        <div>
          <label>
            Email:
          </label>
          <input type="text" defaultValue={email} name="email" />
        </div>

        <div>
          <label>
            Address:
          </label>
          <input type="text" defaultValue={address} name="address" />
        </div>

        <div>
          <label>
            Zip:
          </label>
          <input type="text" defaultValue={zipCode} name="zipCode" />
        </div>

        <div>
          <label>
            State:
          </label>
          <input type="text" defaultValue={state} name="state" />
        </div>

        <div className="actionBtns">
          <button type="submit">SAVE</button>
          <button onClick={handleNextClick}>NEXT</button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    formNum: state.formNum,
    fName: state.savedData.fName,
    lName: state.savedData.lName,
    email: state.savedData.email,
    address: state.savedData.address,
    zipCode: state.savedData.zipCode,
    state: state.savedData.state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFormNum: (formNum) => dispatch(setFormNum(formNum)),
    saveForm: (data) => dispatch(saveForm(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfoForm);