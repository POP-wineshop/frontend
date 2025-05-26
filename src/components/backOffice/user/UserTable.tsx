import { sampleUserList } from '@/constants/backOffice/user/sampleUserList';
import UserItem from './UserItem';
import { User } from '@/types/backOffice/user/user';
import { useState } from 'react';

const UserTable = () => {
  const [userList, setUserList] = useState<User[]>(sampleUserList);
  const [selectedItem, setSelectedItem] = useState();

  // user 조회 API로 수정 예정
  // useEffect(() => {
  //   fetch(`http://localhost:8080/api/wines`)
  //     .then((response) => response.json())
  //     .then((jsonResponse) => {
  //       console.log(`GET 요청 (api/wines) 응답: `, jsonResponse.data);
  //       setUserList(jsonResponse.data);
  //     })
  //     .catch((error) => console.error(`/api/wines 실행 오류 발생: `, error));
  // }, []);

  return (
    <>
      <table className="border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4">아이디</th>
            <th className="py-2 px-4">비밀번호</th>
            <th className="py-2 px-4">이름</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <UserItem key={user.userId} {...user} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
