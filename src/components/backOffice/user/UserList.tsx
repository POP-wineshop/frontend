import UserDetail from './UserDetail';
import UserItem from './UserItem';

const UserList = () => {
  return (
    <>
      <div className="UserList-container flex">
        <div className="UserItems-container flex flex-col">
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
        </div>
        <UserDetail />
      </div>
    </>
  );
};
export default UserList;
