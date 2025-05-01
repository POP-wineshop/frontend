const PaymentMethod = () => {
  const paymentMethodOption = [
    '신용카드',
    '카카오페이',
    '네이버페이',
    '휴대폰 소액결제',
  ];
  return (
    <>
      <div className="payment-method">
        <p>결제 수단</p>
        <hr />
        <div className="payment-method-select">
          {paymentMethodOption.map((paymentMethod, index) => (
            <div className="payment-method-option" key={index}>
              <input type="radio" id={paymentMethod} />
              <label>{paymentMethod}</label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PaymentMethod;
