import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";

import "./LoginForm.css";

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/explore" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
      );
  };

  return (
    <div className="center">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
      <ul>
          {errors.map((error, idx) => (
            <li className='error-msg' key={idx}>{error}</li>
          ))}
        </ul>
        <div className='login-field'>
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
          <label>Username or Email</label>
        </div>
        <div className='login-field'>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>Password</label>
        </div>
        <button type="submit">Log In</button>
        <div className='signup-link'>
            Not a member? <NavLink to="/signup">Signup up here.</NavLink>
        </div>
      </form>
    </div>
  );
}

export default LoginFormPage;
