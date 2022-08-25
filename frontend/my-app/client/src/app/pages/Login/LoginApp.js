import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import jwt_decode from 'jwt-decode';
axios.defaults.withCredentials = true;
//const tokenExpireTime = 60 * 10;
const cookies = new Cookies();
const setCookie = (name, value, options) => {
  return cookies.set(name, value, { ...options });
};
export function LoginApp() {
  const FormHeader = props => <h2 id="headerTitle">{props.title}</h2>;
  const [password, setPW] = useState('');
  const [userid, setID] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  const homeNavigate = useNavigate();
  const onLogin = () => {
    const loginInfo = { userid: userid, password: password };
    fetch('http://localhost:9000/login', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(loginInfo),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.success) {
          localStorage.setItem('refreshToken', data.tokens.refreshToken);
          const tokendecoded = jwt_decode(data.tokens.accessToken);
          const refreshdecoded = jwt_decode(data.tokens.refreshToken);
          setCookie('accessToken', data.tokens.accessToken, {
            maxAge: tokendecoded.exp - tokendecoded.iat,
          });
          setCookie('username', data.username, {
            maxAge: refreshdecoded.exp - refreshdecoded.iat,
          });
          setAccessToken(cookies.get('accessToken'));
          setRefreshToken(data.refreshToken);
          homeNavigate('/');
        } else {
          alert(data.message);
        }
      });
  };

  useEffect(() => {
    console.log(userid);
  }, [userid]);
  const onIDChange = e => {
    setID(e.target.value);
  };
  const onPWChange = e => {
    setPW(e.target.value);
  };

  const FormButton = props => (
    <div id="button" className="row">
      <button onClick={onLogin}>{props.title}</button>
    </div>
  );
  const signUpNavigate = useNavigate();
  const SignUpButton = props => (
    <div id="button" className="row">
      <button
        onClick={e => {
          signUpNavigate('/signup');
        }}
      >
        {props.title}
      </button>
    </div>
  );
  return (
    <div id="loginform">
      <FormHeader title="Login" />
      <div>
        <FormInput
          description="Username"
          placeholder="Enter your username"
          type="text"
          value={userid}
          onChange={onIDChange}
        />
        <FormInput
          description="Password"
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={onPWChange}
        />
        <FormButton title="로그인" />
        <SignUpButton title="회원가입" />
      </div>
      <OtherMethods />
    </div>
  );
}

const OtherMethods = props => (
  <div id="alternativeLogin">
    <label>Or sign in with:</label>
    <div id="iconGroup">
      <Facebook />
      <Twitter />
      <Google />
    </div>
  </div>
);

const Facebook = props => <a href="#" id="facebookIcon"></a>;

const Twitter = props => <a href="#" id="twitterIcon"></a>;

const Google = props => <a href="#" id="googleIcon"></a>;
const FormInput = props => (
  <div className="row">
    <label>{props.description}</label>
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  </div>
);
