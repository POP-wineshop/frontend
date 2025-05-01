import { useState } from 'react';

const DeliveryInfo = () => {
  const [receiverName, setReceiverName] = useState<string>('');
  const [zipCode, setZipCode] = useState<string>('');
  const [receiverAddress, setReceiverAddress] = useState<string>('');
  const [receiverPhoneNumber, setReceiverPhoneNumber] = useState<string>('');
  const [deliveryMessage, setDeliveryMessage] = useState<string>('');

  const messageOptions = [
    `배송 전에 미리 연락바랍니다.`,
    `부재 시 경비실에 맡겨주세요.`,
    `부재 시 문 앞에 놓아주세요.`,
    `빠른 배송 부탁드립니다.`,
    `택배함에 보관해 주세요.`,
    `직접 입력`,
  ];

  return (
    <>
      <div className="delivery-info">
        <p>배송 정보</p>
        <hr />
        <div className="order-info-select">
          <span>최근 배송지</span>
          <span>직접 입력</span>
        </div>
        <div className="delivery-info-default">
          <div>
            <strong>
              <span>&#91;기본&#93; </span>
              <span>{receiverName}</span>
            </strong>
            <p>
              <span>&#91;{zipCode}&#93; </span>
              <span>{receiverAddress}</span>
            </p>
            <p>
              <span>{receiverPhoneNumber}</span>
            </p>
            <div className="delivery-message">
              <select
                value={deliveryMessage}
                onChange={(e) => setDeliveryMessage(e.target.value)}
              >
                <option value="">
                  메시지를 선택해주세요 &#40;선택사항&#41;
                </option>
                {messageOptions.map((message, index) => (
                  <option value={message} key={index}>
                    {message}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryInfo;
