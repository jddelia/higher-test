import React from 'react';
import { connect } from 'react-redux';

import { setFormNum, saveForm } from '../actions/formActions';

import FormHeader from './FormHeader';

const InterestsForm = (props) => {

  // Change for number when previous button is clicked
  function handlePreviousClick() {
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
    hobbies, favorite, why, additional
  } = props;

  return (
    <div className="formContainer">
      <FormHeader subtitle={"Interests"} />

      <form onSubmit={handleSaveClick}>
        <div>
          <label>
            Hobbies:
          </label>
          <input type="text" defaultValue={hobbies} name="hobbies" />
        </div>

        <div>
          <label>
            Favorite Crypto: 
          </label>
          <input type="text" defaultValue={favorite} name="favorite" />
        </div>

        <div>
          <label>
            Why?:
          </label>
          <textarea defaultValue={why} name="why"></textarea>
        </div>

        <div>
          <label>
            Additional Information:
          </label>
          <textarea defaultValue={additional} name="additional"></textarea>
        </div>

        <div className="actionBtns">
          <button onClick={handlePreviousClick}>PREVIOUS</button>
          <button type="submit">SAVE</button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    formNum: state.formNum,
    hobbies: state.savedData.hobbies,
    favorite: state.savedData.favorite,
    why: state.savedData.why,
    additional: state.savedData.additional
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFormNum: (formNum) => dispatch(setFormNum(formNum)),
    saveForm: (data) => dispatch(saveForm(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InterestsForm);