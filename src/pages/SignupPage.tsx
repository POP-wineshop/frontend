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
      .then((jsonResponse) => {
        console.log(jsonResponse);
        alert('회원가입에 성공했습니다');
        navigate('/login');
      })
      .catch((error) => alert('회원가입에 실패했습니다'));
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignup();
          }}
          className="flex flex-col gap-4 w-full max-w-md p-8 bg-white rounded-xl shadow-md"
        >
          <h2 className="text-2xl font-bold text-center mb-4">회원가입</h2>

          <div>
            <label
              htmlFor="userName"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              아이디
            </label>
            <input
              id="userName"
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              placeholder="아이디를 입력해주세요"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              비밀번호
            </label>
            <input
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력해주세요"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="pwForConfirming"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              비밀번호 확인
            </label>
            <input
              id="pwForConfirming"
              type="password"
              onChange={(e) => setPwForConfirming(e.target.value)}
              placeholder="비밀번호를 다시 입력해주세요"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="name"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              사용자 이름
            </label>
            <input
              id="name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="이름을 입력해주세요"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="mt-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            회원 가입
          </button>
        </form>
      </div>
    </>
  );
};

export default SignupPage;
