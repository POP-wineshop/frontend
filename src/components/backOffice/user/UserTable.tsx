import UserDetail from './UserDetail';
import UserItem from './UserItem';

const users = [
  {
    userId: 'testUser01',
    password: 'qwerty1234!!',
    name: '김예시',
  },
  {
    userId: 'testUser01',
    password: 'qwerty1234!!',
    name: '김예시',
  },
  {
    userId: 'testUser01',
    password: 'qwerty1234!!',
    name: '김예시',
  },
];

const UserTable = () => {
  return (
    <>
      <table className="w-full table-fixed border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4">아이디</th>
            <th className="py-2 px-4">비밀번호</th>
            <th className="py-2 px-4">이름</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserItem key={user.userId} {...user} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
