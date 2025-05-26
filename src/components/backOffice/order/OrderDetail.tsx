import sampleOrderItemData from '@/constants/backOffice/order/sampleOrderItemData';
import { useState } from 'react';

const OrderDetail = () => {
  const [orderStatus, setOrderStatus] = useState<string>('paid');

  const [order, setOrder] = useState<Record<string, any>>(sampleOrderItemData);

  return (
    <>
      <div className="orderDetail-container p-6">
        <table className="w-full border border-collapse text-sm">
          <tbody>
            {/* 주문 식별 정보 */}
            <tr>
              <th className="text-left p-2 bg-gray-100">주문 번호</th>
              <td className="p-2" colSpan={2}>
                {order.orderNumber}
              </td>
              <th className="text-left p-2 bg-gray-100">주문 일시</th>
              <td className="p-2" colSpan={2}>
                {order.orderDate}
              </td>
            </tr>

            {/* 주문 상품 */}
            <tr className="bg-gray-50">
              <th className="text-left p-2" colSpan={6}>
                주문 상품
              </th>
            </tr>
            <tr>
              <th className="text-left p-2">상품명</th>
              <td className="p-2" colSpan={5}>
                {order.items[0].nameKor}
              </td>
            </tr>
            <tr>
              <th className="text-left p-2">수량</th>
              <td className="p-2">{order.items[0].quantity}병</td>
              <th className="text-left p-2">단가</th>
              <td className="p-2">
                {order.items[0].unitPrice.toLocaleString()}원
              </td>
              <th className="text-left p-2">총액</th>
              <td className="p-2">
                {order.items[0].totalPrice.toLocaleString()}원
              </td>
            </tr>

            {/* 주문자 정보 */}
            <tr className="bg-gray-50">
              <th className="text-left p-2" colSpan={6}>
                주문자 정보
              </th>
            </tr>
            <tr>
              <th className="text-left p-2">이름</th>
              <td className="p-2">{order.customer.name}</td>
              <th className="text-left p-2">주소</th>
              <td className="p-2" colSpan={2}>
                [{order.customer.zipCode}] {order.customer.address}
              </td>
            </tr>
            <tr>
              <th className="text-left p-2">연락처</th>
              <td className="p-2" colSpan={2}>
                {order.customer.phone}
              </td>
              <th className="text-left p-2">배송 메시지</th>
              <td className="p-2" colSpan={2}>
                {order.customer.message || '없음'}
              </td>
            </tr>

            {/* 결제 정보 */}
            <tr className="bg-gray-50">
              <th className="text-left p-2" colSpan={6}>
                결제 정보
              </th>
            </tr>
            <tr>
              <th className="text-left p-2">상품 금액</th>
              <td className="p-2">
                {order.payment.productTotal.toLocaleString()}원
              </td>
              <th className="text-left p-2">할인</th>
              <td className="p-2">
                {order.payment.discount.toLocaleString()}원
              </td>
              <th className="text-left p-2">배송비</th>
              <td className="p-2">
                {order.payment.deliveryFee.toLocaleString()}원
              </td>
            </tr>
            <tr>
              <th className="text-left p-2">최종 결제</th>
              <td className="p-2 font-semibold">
                {order.payment.totalPayment.toLocaleString()}원
              </td>
              <th className="text-left p-2">결제 수단</th>
              <td className="p-2">{order.payment.method}</td>
              <th className="text-left p-2">결제 상태</th>
              <td className="p-2 font-semibold">
                {order.payment.status === 'paid'
                  ? '결제 완료'
                  : order.payment.status === 'cancelRequested'
                  ? '취소 요청'
                  : '취소 완료'}
              </td>
            </tr>

            {/* 취소 사유 (조건부) */}
            {order.payment.status !== 'paid' && (
              <tr>
                <th className="text-left p-2 text-red-600">취소 사유</th>
                <td className="p-2 text-red-600" colSpan={5}>
                  {order.payment.cancelReason}
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* 버튼 (조건부) */}
        {order.payment.status === 'cancelRequested' && (
          <div className="flex gap-4 mt-4">
            <button className="bg-red-500 text-white px-4 py-2 rounded">
              취소 확정
            </button>
            <button className="bg-gray-300 px-4 py-2 rounded">취소 반려</button>
          </div>
        )}
      </div>
    </>
  );
};

export default OrderDetail;
