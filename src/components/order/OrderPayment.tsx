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
      <div className="order-payment-info-header">
        <p>결제 금액</p>
        <hr />
      </div>
      <div className="order-payment-info-contents">
        <table>
          <tbody>
            {orderPaymentList.map(({ key, value }) => (
              <tr key={key}>
                <td>
                  <span>{key}</span>
                </td>
                <td>
                  <span>
                    {key !== '주문상품' || '최종 결제 금액'
                      ? value > 0
                        ? '+'
                        : '-'
                      : ''}{' '}
                    {toCurrencyFormat(value)}원
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="order-payment-info-">
        <span>{toCurrencyFormat(totalPaymentPrice)}원 결제하기</span>
      </div>
    </>
  );
};

export default OrderPayment;
