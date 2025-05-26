import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * [2025-05-24]
 * 굳이 해당 메뉴가 쓰여지고 있다는 걸 사이드바에서 보여줄 필요는 없다고 생각
 * 만약 보여줘야 한다면 상태가 아닌 pathname을 이용해서 그에 따라 CSS를 다르게 적용하면 됨
 * 추후 리팩토링 필요 시 적용
 */

interface Props {
  setSelectedMenu: (value: string) => void;
}

const BackOfficeSidebar = () => {
  return (
    <>
      <div className="sidebar-container flex flex-col w-[18rem]">
        {/* Dashboard */}
        <div className="dashboard-container ">
          <div className="dashboard-title bg-gray-300 border px-8 py-2 cursor-pointer">
            <span className="font-bold">Dashboard</span>
          </div>
        </div>

        {/* Products */}
        <div className="products-container relative">
          <div className="products-title bg-gray-300 border px-8 py-2">
            <span className="font-bold">Product</span>
          </div>

          <div className="flex flex-col text-sm border">
            <Link
              to="/backoffice/product/list"
              className="text-right px-4 py-2 cursor-pointer hover:bg-gray-100 hover:underline"
            >
              <span>Product List</span>
            </Link>
            <Link
              to="/backoffice/product/register"
              className="text-right px-4 py-2 cursor-pointer hover:bg-gray-100 hover:underline"
            >
              <span>Product Register</span>
            </Link>
          </div>
        </div>

        {/* User */}
        <div className="customers-container relative">
          <div className="customers-title bg-gray-300 border px-8 py-2">
            <span className="font-bold">User</span>
          </div>
          <div className="flex flex-col text-sm border">
            <Link
              to="/backoffice/user/list"
              className="text-right px-4 py-2 cursor-pointer hover:bg-gray-100 hover:underline"
            >
              <span>User List</span>
            </Link>
          </div>
        </div>

        {/* Order */}
        <div>
          <div className="bg-gray-300 border px-8 py-2 cursor-pointer">
            <span className="font-bold">Order</span>
          </div>
          <div className="flex flex-col text-sm border">
            <Link
              to="/backoffice/order/list"
              className="text-right px-4 py-2 cursor-pointer hover:bg-gray-100 hover:underline"
            >
              <span>Order List</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BackOfficeSidebar;
