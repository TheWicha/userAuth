import React, { useState } from "react";
import styled from "styled-components";

const SignUpForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    pwd: "",
  });

  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [password2Value, setPassword2Value] = useState("");
  const [passValid, setPassValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordValue !== password2Value) {
      return setPassValid(false);
    }
    setUser((user) => {
      return {
        name: nameValue,
        email: emailValue,
        pwd: passwordValue,
      };
    });

    setNameValue("");
    setEmailValue("");
    setPasswordValue("");
    setPassword2Value("");
    setPassValid(true);
    console.log(user);
  };

  return (
    <Wrapper>
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
        <label>
          Email
          <Input
            required
            type="email"
            value={emailValue}
            name="userEmail"
            onChange={(e) => {
              setEmailValue(e.target.value);
            }}
          />
        </label>
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
        <label>
          rePassword
          <Input
            required
            type="password"
            value={password2Value}
            name="user2Password"
            onChange={(e) => {
              setPassword2Value(e.target.value);
            }}
          />
        </label>
        {passValid ? null : "password must match"}
        <div style={{ width: "185px" }}>
          <input type="submit" value="Send" />
        </div>
      </Form>
    </Wrapper>
  );
};

export default SignUpForm;
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
