import React, { useState, useContext, useEffect } from "react";
import { useResource } from "react-request-hook";
import { StateContext } from "../contexts";
import { useInput } from 'react-hookedup';

export default function Register() {
  const { dispatch } = useContext(StateContext);
  // const [username, setUsername] = useState("");

  const [user, register] = useResource((username, password) => ({
    url: "/users",
    method: "post",
    data: { username, password }
  }));

  useEffect(() => {
    if (user && user.data) {
        dispatch({ type: 'REGISTER', username: user.data.username })
    }
}, [user])

  // function handleUsername(evt) {
  //   setUsername(evt.target.value);
  // }

  const { value: username, bindToInput: bindUsername } = useInput('');
  const { value: password, bindToInput: bindPassword } = useInput('');
  const { value: passwordRepeat, bindToInput: bindPasswordRepeat } = useInput('');


  // const [password, setPassword] = useState("");
  // const [passwordRepeat, setPasswordRepeat] = useState("");

  // function handlePassword(evt) {
  //   setPassword(evt.target.value);
  // }

  // function handlePasswordRepeat(evt) {
  //   setPasswordRepeat(evt.target.value);
  // }

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        register(username, password)
      }}
    >
      <label htmlFor="register-username">Username:</label>
      <input
        type="text"
        value={username}
        {...bindUsername}
        name="register-username"
        id="register-username"
      />
      <label htmlFor="register-password">Password:</label>
      <input
        type="password"
        value={password}
        {...bindPassword}
        name="register-password"
        id="register-password"
      />
      <label htmlFor="register-password-repeat">Repeat Password:</label>
      <input
        type="password"
        value={passwordRepeat}
        {...bindPasswordRepeat}
        name="register-password-repeat"
        id="register-password-repeat"
      />
      <input
        type="submit"
        value="Register"
        disabled={
          username.length === 0 ||
          password.length === 0 ||
          password !== passwordRepeat
        }
      />
    </form>
  );
}
