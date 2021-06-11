import React from 'react'
import useInput from '../hooks/use-input'

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput((value) => value.trim() !== '')

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput((value) => value.includes('@'))

  let formIsValid = false
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }

  const formSubmissionHandler = event => {
    event.preventDefault()
    if (!enteredNameIsValid && enteredEmailIsValid) {
      return null
    }
    resetNameInput()
    resetEmailInput()
  }

  const nameInputClasses = nameInputHasError && emailInputHasError ? 'form-control invalid' : 'form-control'
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          value={enteredName}
          type='text'
          id='name'
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError ? <p className='error-text'>Name must not be empty.</p> : null}
      </div>
      <div className={nameInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input
          value={enteredEmail}
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError ? <p className='error-text'>Email must be a valid email.</p> : null}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
