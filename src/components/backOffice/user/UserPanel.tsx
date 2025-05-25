import { useState } from 'react';
import UserTable from './UserTable';
import UserDetail from './UserDetail';

const UserPanel = () => {
  const [selectedUserItem, setSelectedUserItem] = useState<Record<
    string,
    any
  > | null>({});

  return (
    <>
      <div className="userPanel-container flex">
        <UserTable />
        {/* {selectedUserItem && <UserDetail />} */}
        <UserDetail />
      </div>
    </>
  );
};

export default UserPanel;
