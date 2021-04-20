import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { logindetls } from './pass_username'
import Calling_login from './call_login'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loginstate, setLogin] = useState(false);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    for (let i = 0; i < logindetls.length; i++)
    {
      if(email === logindetls[i].username &&  password === logindetls[i].password)
      {
        setLogin(true);
        setName(logindetls[i].name);
        event.preventDefault();

        return;
      }

    }
    setLogin(false);
    event.preventDefault();
  }

  return (
    !loginstate?
    (
      <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>

    )
    
    :
    (
    // <div>
    //   <h2>"Hello there!!!, You are logged in"</h2>
    // </div>
    <Calling_login name={name}/>
    )
  );
}