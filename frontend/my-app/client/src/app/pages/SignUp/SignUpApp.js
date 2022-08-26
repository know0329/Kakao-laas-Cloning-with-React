import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const admin = { id: 'IMO', password: '123' };

export function SignUpApp() {
  const [password, setPW] = useState('');
  const [userid, setID] = useState('');
  const [username, setName] = useState('');
  const onIDChange = e => {
    setID(e.target.value);
  };
  const onPWChange = e => {
    setPW(e.target.value);
  };
  const onNameChange = e => {
    setName(e.target.value);
  };
  const signUpNavigate = useNavigate();
  const onClickSignUp = () => {
    const signUpInfo = {
      username: username,
      userid: userid,
      password: password,
    };
    if (password.length < 8) {
      setPW('');
      alert('비밀번호를 8자리 이상 입력해주세요');
    } else if (userid.length < 3) {
      setID('');
      alert('아이디를 3자리 이상 입력해주세요');
    } else {
      fetch('http://43.200.173.169:7000/signup', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(signUpInfo),
      })
        .then(response => response.json())
        .then(data => {
          if (data.result) {
            alert('가입완료');
            signUpNavigate('../login');
          } else {
            alert('중복된 아이디가 있습니다');
            setPW('');
            setID('');
            setName('');
          }
        });
    }
  };
  const SignUpButton = props => (
    <div id="button" className="row">
      <button onClick={onClickSignUp}>{props.title}</button>
    </div>
  );

  const FormHeader = props => <h2 id="headerTitle">{props.title}</h2>;
  return (
    <div id="signupform">
      <FormHeader title="회원가입" />
      <FormInput
        description="이름"
        placeholder="이름을 입력해주세요"
        type="text"
        value={username}
        onChange={onNameChange}
      />
      <FormInput
        description="아이디"
        placeholder="사용할 아이디를 입력해주세요"
        type="text"
        value={userid}
        onChange={onIDChange}
      />
      <FormInput
        description="비밀번호"
        placeholder="사용할 비밀번호를 입력해주세요"
        type="password"
        value={password}
        onChange={onPWChange}
      />
      <SignUpButton title="가입하기" />
    </div>
  );
}

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
