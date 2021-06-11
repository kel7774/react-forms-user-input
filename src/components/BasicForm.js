import useInput from '../hooks/use-input'

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: validFirstNameInput,
    hasError: inputFirstNameError,
    valueChangeHandler: inputFirstNameChange,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput
  } = useInput((value) => value.trim() !== '')

  const {
    value: enteredLastName,
    isValid: validLastNameInput,
    hasError: inputLastNameError,
    valueChangeHandler: inputLastNameChange,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput
  } = useInput((value) => value.trim() !== '')

  const {
    value: enteredEmail,
    isValid: validEmailInput,
    hasError: inputEmailError,
    valueChangeHandler: inputEmailChange,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput((value) => value.includes('@'))

  let formIsValid = false
  if (validFirstNameInput && validLastNameInput && validEmailInput) {
    formIsValid = true
  }
  const submitForm = event => {
    event.preventDefault()
    if (!formIsValid) {
      return null
    }
    resetFirstNameInput()
    resetLastNameInput()
    resetEmailInput()
  }

  return (
    <form onSubmit={submitForm}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={enteredFirstName} onChange={inputFirstNameChange} onBlur={firstNameBlurHandler} />
          {inputFirstNameError ? <p>Please enter a first name</p> : null}
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={enteredLastName} onChange={inputLastNameChange} onBlur={lastNameBlurHandler} />
          {inputLastNameError ? <p>Please enter a first name</p> : null}
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={enteredEmail} onChange={inputEmailChange} onBlur={emailBlurHandler} />
        {inputEmailError ? <p>Please enter a first name</p> : null}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  )
}

export default BasicForm
