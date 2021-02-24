class FormErrorMessage {
  
  static displayErrorMessageFor(inputElement, borderColor) {
    inputElement.style.borderColor = borderColor;
    inputElement.nextSibling.style.visibility = 'visible';
  }

  static hideErrorMessageFor = (inputElement, borderColor) => {
    inputElement.style.borderColor = borderColor;
    inputElement.nextSibling.style.visibility = 'hidden';
  }
};

export default FormErrorMessage;