
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';

import "./UserVerification.css";

function UserVerification(props) {

  useEffect(() => {
    if (props.sendToTodolist) {
      props.history.push("/TodoList");
    }
  }, [props.sendToTodolist]);

  const [formData, setFormData] = useState({
    email: '',
    password: '' 
});

const { email, password } = formData;

const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

const onSubmit = e => {
    e.preventDefault();

    // login(email, password);
    props.verify(email,password);
    
    // for redirect the page to todolist

    props.history.push("/TodoList");
};
  
  
  
  return (
  <div className='container mt-5'>
  <h1>Sign In</h1>
  <p>Sign into your Account</p>
  <form onSubmit={e => onSubmit(e)}>
      <div className='form-group'>
          <input
              className='form-control'
              type='email'
              placeholder='Email'
              name='email'
              value={email}
              
              onChange={e => onChange(e)}
              required
          />
      </div>
      <div className='form-group'>
          <input
              className='form-control'
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={e => onChange(e)}
              minLength='6'
              required
          />
      </div>
      <button className='btn btn-primary' type='submit'>Login</button>
  </form>
  <button className='btn btn-danger mt-3' >
      Continue With Google
  </button>
  <br />
  <button className='btn btn-primary mt-3' >
      Continue With Facebook
  </button>
  <p className='mt-3'>
      Don't have an account? <Link to='/signup'>Sign Up</Link>
  </p>
  <p className='mt-3'>
      Forgot your Password? <Link to='/reset-password'>Reset Password</Link>
  </p>
</div>
);
}

const mapStateToProps = (state) => {
  return {
    state,
    sendToTodolist: state.userVerify.length > 0 ? true : false
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    verify: (val) => dispatch({ type: "USER_VERIFY", payload: val })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserVerification);






