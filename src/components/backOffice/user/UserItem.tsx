import { useState } from 'react';

const UserItem = () => {
  const [userName, setUserName] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleViewOrderInfo = () => {};

  return (
    <>
      <div className="userItem-container flex border rounded p-4 mb-4 shadow bg-grey-50 cursor-pointer">
        <table className="w-full">
          <tbody>
            {/* <tr>
              <td colSpan={2}>
                <span>아이디 : {userName}</span>
              </td>
              <td colSpan={2}>
                <span>패스워드 : {password}</span>
              </td>
              <td>
                <span>이름 : {name}</span>
              </td>
            </tr> */}
            <tr>
              <td colSpan={2}>
                <span>아이디 : testUser01</span>
              </td>
              <td colSpan={2}>
                <span>패스워드 : qwert1234!!</span>
              </td>
              <td>
                <span>이름 : 김예시</span>
              </td>
            </tr>
          </tbody>
        </table>
        <img src="" alt="상세 아이콘" />
      </div>
    </>
  );
};

export default UserItem;
