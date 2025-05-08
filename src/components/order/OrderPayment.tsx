import { useState } from 'react';

const OrderPayment = () => {
  const [totalProductsPrice, setTotalProductsPrice] = useState<number>(0);
  const [deliveryFee, setDeliveryFee] = useState<number>(0);
  //   const [discount, setDiscount] = useState<number>(0);
  //   const [additionalPayment, setAdditionalPayment] = useState<number>(0);
  const totalPaymentPrice = totalProductsPrice + deliveryFee;

  // 숫자를 템플릿 문자열 ${...}로 감싸면 string으로 저장됨
  const orderPaymentList = [
    { key: '주문상품', value: totalProductsPrice },
    { key: '배송비', value: deliveryFee },
    { key: '할인/부가결제', value: 0 },
    { key: '최종 결제 금액', value: totalPaymentPrice },
  ];

  function toCurrencyFormat(value: number): string {
    return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    <>
      <div className="flex flex-col gap-3 w-full mx-auto">
        <div className="order-payment-info-header">
          <p className="text-2xl font-bold">결제 금액</p>
        </div>
        <hr />
        <div className="order-payment-contents">
          <table className="w-full border-separate border-spacing-y-3">
            <tbody>
              {orderPaymentList.map(({ key, value }) => (
                <tr key={key}>
                  <td className="p-0 text-left w-1/2">
                    <span>{key}</span>
                  </td>
                  <td className="p-0 text-right w-1/2">
                    <span className="font-semibold">
                      {!(key === '주문상품' || key === '최종 결제 금액') &&
                        (value > 0 ? '+' : value < 0 ? '-' : '')}{' '}
                      {toCurrencyFormat(value)}원
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="order-payment-submit w-full">
          <button className="bg-[#e8e5eb] p-2 w-full rounded-xl font-bold">
            <span>{toCurrencyFormat(totalPaymentPrice)}</span>원 결제하기
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderPayment;
