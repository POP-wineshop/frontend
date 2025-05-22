import BackOfficeSidebar from '@/components/backOffice/BackOfficeSidebar';
import Orderlist from '@/components/backOffice/orders/OrderList';
import ProductList from '@/components/backOffice/products/ProductList';
import ProductRegister from '@/components/backOffice/products/ProductRegister';
import UserList from '@/components/backOffice/users/UserList';
import { useState } from 'react';

const BackOfficePage = () => {
  const [selectedMenu, setSelectedMenu] = useState('dashboard');

  return (
    <>
      <div className="flex">
        <BackOfficeSidebar setSelectedMenu={setSelectedMenu} />
        <div className="flex-1 p-6">
          {selectedMenu === 'dashboard' && <div>📊 대시보드 내용</div>}
          {selectedMenu === 'productList' && <ProductList />}
          {selectedMenu === 'productRegister' && <ProductRegister />}
          {selectedMenu === 'orderList' && <Orderlist />}
          {selectedMenu === 'userList' && <UserList />}
        </div>
      </div>
    </>
  );
};

export default BackOfficePage;
