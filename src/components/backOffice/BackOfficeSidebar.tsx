import { useEffect, useState } from 'react';

const BackOfficeSidebar = () => {
  const [shouldShowProductsMenu, setShouldShowProductsMenu] =
    useState<boolean>(false);
  const [shouldShowCustomersMenu, setShouldShowCustomersMenu] =
    useState<boolean>(false);
  const [shouldShowOrdersMenu, setShouldShowOrdersMenu] =
    useState<boolean>(false);

  const [selectedMenu, setSelectedMenu] = useState<string>('');

  return (
    <>
      <div className="sidebar-container flex flex-col ">
        <div className="dashboard-container ">
          <div
            className="dashboard-title border px-8 py-2"
            onClick={() => setSelectedMenu(`dashboard`)}
          >
            <span>Dashboard</span>
          </div>
        </div>
        <div className="products-container relative">
          <div
            className="products-title border px-8 py-2"
            onMouseEnter={() => {
              setShouldShowProductsMenu(true);
            }}
            onMouseLeave={() => {
              setShouldShowProductsMenu(false);
            }}
          >
            <span>Products</span>
          </div>
          <div
            className="absolute left-full top-0 min-w-max bg-white shadow rounded text-sm z-10"
            onMouseEnter={() => {
              setShouldShowProductsMenu(true);
            }}
            onMouseLeave={() => {
              setShouldShowProductsMenu(false);
            }}
          >
            {shouldShowProductsMenu && (
              <>
                <div
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setSelectedMenu(`productList`)}
                >
                  <span>Product List</span>
                </div>
                <div
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer "
                  onClick={() => setSelectedMenu(`productRegister`)}
                >
                  <span>Product Register</span>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="customers-container relative">
          <div
            className="customers-title border px-8 py-2"
            onMouseEnter={() => {
              setShouldShowCustomersMenu(true);
            }}
            onMouseLeave={() => {
              setShouldShowCustomersMenu(false);
            }}
          >
            <span>Customers</span>
          </div>
          <div
            className="absolute left-full top-0 min-w-max bg-white shadow rounded text-sm z-10"
            onMouseEnter={() => {
              setShouldShowCustomersMenu(true);
            }}
            onMouseLeave={() => {
              setShouldShowCustomersMenu(false);
            }}
          >
            {shouldShowCustomersMenu && (
              <>
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <span>User List</span>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="orders-container relative">
          <div
            className="orders-title border px-8 py-2"
            onMouseEnter={() => {
              setShouldShowOrdersMenu(true);
            }}
            onMouseLeave={() => {
              setShouldShowOrdersMenu(false);
            }}
          >
            <span>Orders</span>
          </div>
          <div
            className="absolute left-full top-0 min-w-max bg-white shadow rounded text-sm z-10"
            onMouseEnter={() => {
              setShouldShowOrdersMenu(true);
            }}
            onMouseLeave={() => {
              setShouldShowOrdersMenu(false);
            }}
          >
            {shouldShowOrdersMenu && (
              <>
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <span>Order List</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BackOfficeSidebar;
