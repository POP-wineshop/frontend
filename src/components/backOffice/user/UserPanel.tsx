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
      <div className="orderPanel-container">
        <UserTable />
        {selectedUserItem && <UserDetail />}
      </div>
    </>
  );
};

export default UserPanel;
