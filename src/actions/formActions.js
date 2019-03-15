export const setFormNum = (formNum) => {
  
  if (formNum === 1) {
    return {
      type: 'SET_FORM_NUM',
      formNum: 2
    };
  } else {
    return {
      type: 'SET_FORM_NUM',
      formNum: 1
    };
  }
};

export const saveForm = (data) => {
  return {
    type: 'SAVE_FORM',
    savedData: data
  };
};