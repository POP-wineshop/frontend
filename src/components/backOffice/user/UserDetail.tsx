import sampleUserItemData from '@/constants/backOffice/user/sampleUserItemData';
import { useState } from 'react';

const UserDetail = () => {
  const [user, setUser] = useState<Record<string, any>>(sampleUserItemData);

  return (
    <div className="userDetail-container p-6 flex flex-col gap-4">
      {/* 회원 정보 */}
      <table className="w-full border border-collapse text-sm">
        <tbody>
          <tr className="bg-gray-50 font-semibold">
            <th className="p-2" colSpan={2}>
              회원 정보
            </th>
          </tr>
          <tr>
            <th className="p-2 bg-gray-100">아이디</th>
            <td className="text-center p-2">{user.userId}</td>
          </tr>
          <tr>
            <th className="p-2 bg-gray-100">패스워드</th>
            <td className="text-center p-2">{user.password}</td>
          </tr>
          <tr>
            <th className="p-2 bg-gray-100">이름</th>
            <td className="text-center p-2">{user.name}</td>
          </tr>
        </tbody>
      </table>

      {/* 주문 내역 */}
      <table className="w-full border border-collapse text-sm">
        <tbody>
          <tr className="bg-gray-50 font-semibold">
            <th className="p-2" colSpan={4}>
              주문 내역
            </th>
          </tr>
          <tr>
            <th className="p-2 bg-gray-100">주문 번호</th>
            <th className="p-2 bg-gray-100">주문 금액</th>
            <th className="p-2 bg-gray-100">주문 일시</th>
            <th className="p-2 bg-gray-100">주문 상태</th>
          </tr>
          {user.orders?.length > 0 ? (
            <tr className="border-b">
              <td className="text-center p-2">{user.orders[0].orderNumber}</td>
              <td className="text-center p-2">{user.orders[0].totalPayment}</td>
              <td className="text-center p-2">{user.orders[0].orderDate}</td>
              <td className="text-center p-2">{user.orders[0].status}</td>
            </tr>
          ) : (
            <tr className="border-t border-b">
              <td className="p-2" colSpan={4}>
                주문을 찾을 수 없습니다
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserDetail;
