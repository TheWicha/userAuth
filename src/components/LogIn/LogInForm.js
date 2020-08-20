import React, { useState } from "react";
import styled from "styled-components";

const LogInForm = () => {
  const user = {
    name: "wicha",
    pwd: "asd",
  };

  const [nameValue, setNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [userValid, setUserValid] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [pwdError, setPwdError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameValue);
    if (nameValue !== user.name) {
      setNameError(true);
    } else setNameError(false);

    if (passwordValue !== user.pwd) {
      return setPwdError(true);
    } else setPwdError(false);
    setNameValue("");
    setPasswordValue("");
    setUserValid(true);
  };

  return (
    <Wrapper>
      {userValid && <span>welcome {user.name}!</span>}
      {!userValid && (
        <Form onSubmit={handleSubmit}>
          <label>
            User Name
            <Input
              type="text"
              required
              value={nameValue}
              name="userName"
              onChange={(e) => {
                setNameValue(e.target.value);
              }}
            />
          </label>
          {nameError ? "invalid user name" : null}
          <label>
            Password
            <Input
              required
              type="password"
              value={passwordValue}
              name="userPassword"
              onChange={(e) => {
                setPasswordValue(e.target.value);
              }}
            />
          </label>
          {pwdError ? "invalid password" : null}
          <div style={{ width: "185px" }}>
            <input type="submit" value="Send" />
          </div>
        </Form>
      )}
    </Wrapper>
  );
};

export default LogInForm;

const Wrapper = styled.div`
  margin-top: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 300px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 10px;
  margin-left: 10px;
`;
