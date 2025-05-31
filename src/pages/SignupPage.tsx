import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [pwForConfirming, setPwForConfirming] = useState<string>('');
  const [name, setName] = useState<string>('');

  const navigate = useNavigate();

  const handleSignup = () => {
    fetch('http://localhost:8080/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        username: userName,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((jsonResponse) => console.log(jsonResponse))
      .catch((error) => alert('회원가입에 실패했습니다'));
  };

  return (
    <>
      <div className="m-auto">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignup();
          }}
          className="flex flex-col justify-center w-1/2 rounded-xl bg-gray-200"
          action=""
        >
          <div>
            <label htmlFor="userName">아이디</label>
            <input
              id="userName"
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              placeholder="아이디를 입력해주세요"
            />
          </div>
          <div>
            <label htmlFor="password">비밀번호</label>
            <input
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력해주세요"
            />
          </div>
          <div>
            <label htmlFor="pwForConfirming">비밀번호 확인</label>
            <input
              id="pwForConfirming"
              type="password"
              onChange={(e) => setPwForConfirming(e.target.value)}
              placeholder="비밀번호를 다시 입력해주세요"
            />
          </div>
          <div>
            <label htmlFor="name">사용자 이름</label>
            <input
              id="name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="이름을 입력해주세요"
            />
          </div>
          <button type="submit">회원 가입</button>
        </form>
      </div>
    </>
  );
};

export default SignupPage;
