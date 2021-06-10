import { useState } from 'react'

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)
  const enteredNameIsValid = enteredName.trim() !== ''
  const enteredEmailIsValid = enteredEmail.trim().includes('@')
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched
  const emailInputIsValid = !enteredEmailIsValid && enteredEmailTouched

  let formIsValid = false
  if (enteredNameIsValid) {
    formIsValid = true
  }

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true)
  }

  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true)
  }

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value)
  }

  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value)
  }

  const formSubmissionHandler = event => {
    event.preventDefault()
    setEnteredNameTouched(true)
    setEnteredEmailTouched(true)
    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return null
    }
    setEnteredName('')
    setEnteredEmail('')
    setEnteredNameTouched(false)
    setEnteredEmailTouched(false)
  }

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          value={enteredName}
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid ? <p className='error-text'>Name must not be empty.</p> : null}
      </div>
      <div className={nameInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input
          value={enteredEmail}
          type='email'
          id='email'
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailInputIsValid ? <p className='error-text'>Email must be a valid email.</p> : null}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
