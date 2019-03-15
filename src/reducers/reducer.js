const initialState = {
  formNum: 1,
  savedData: { 
    fName: '',
    lName: '',
    email: '',
    address: '',
    zipCode: '',
    state: '',
    hobbies: '',
    favorite: '',
    why: '',
    additional: ''
  }
};

const reducer = (state = initialState, action) => {
  
  switch (action.type) {
    case 'SET_FORM_NUM':
      return {
        ...state,
        formNum: action.formNum
      };
    case 'SAVE_FORM':
      return {
        ...state,
        savedData: {
          ...state.savedData,
          ...action.savedData
        }
      };
    default:
      return state;
  }
};

export default reducer;