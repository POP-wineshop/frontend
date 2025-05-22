import { useEffect, useState } from 'react';

interface Props {
  setSelectedMenu: (value: string) => void;
}

const BackOfficeSidebar = ({ setSelectedMenu }: Props) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menuName: string) => {
    setOpenMenu((prev) => (prev === menuName ? null : menuName));
  };

  return (
    <>
      <div className="sidebar-container flex flex-col ">
        {/* Dashboard */}
        <div className="dashboard-container ">
          <div
            className="dashboard-title border px-8 py-2"
            onClick={() => setSelectedMenu(`dashboard`)}
          >
            <span>Dashboard</span>
          </div>
        </div>

        {/* Products */}
        <div className="products-container relative">
          <div
            className="products-title border px-8 py-2 cursor-pointer"
            onClick={() => toggleMenu('products')}
          >
            <span>Products</span>
          </div>
          {openMenu === 'products' && (
            <div className="flex flex-col pl-6 text-sm">
              <div
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => setSelectedMenu('productList')}
              >
                Product List
              </div>
              <div
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => setSelectedMenu('productRegister')}
              >
                <span>Product Register</span>
              </div>
            </div>
          )}
        </div>

        {/* Customers */}
      </div>
      <div className="customers-container relative">
        <div
          className="customers-title border px-8 py-2"
          onClick={() => toggleMenu('customers')}
        >
          <span>Customers</span>
        </div>
        {openMenu === 'customers' && (
          <div className="flex flex-col pl-6 text-sm">
            <div
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => setSelectedMenu('userList')}
            >
              <span>User List</span>
            </div>
          </div>
        )}
      </div>

      {/* Orders */}
      <div>
        <div
          className="border px-8 py-2 cursor-pointer"
          onClick={() => toggleMenu('orders')}
        >
          Orders
        </div>
        {openMenu === 'orders' && (
          <div className="flex flex-col pl-6 text-sm">
            <div
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => setSelectedMenu('orderList')}
            >
              Order List
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BackOfficeSidebar;
