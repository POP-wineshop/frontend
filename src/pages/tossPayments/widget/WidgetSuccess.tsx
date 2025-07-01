import { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

export function WidgetSuccess() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    async function confirm() {
      const requestData = {
        orderId: searchParams.get('orderId'),
        // orderId: searchParams.get('orderId')?.split('_')[2],
        amount: searchParams.get('amount'),
        paymentKey: searchParams.get('paymentKey'),
      };

      console.log(requestData);
      // const orderIdInNumber = requestData.orderId?.split('_')[2];

      try {
        const response = await fetch(
          `http://localhost:8080/api/payments/confirm`,
          // `http://localhost:8080/api/payments/${requestData.orderId}/confirm`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `${localStorage.getItem('Access Token')}`,
            },
            body: JSON.stringify(requestData),
          }
        );

        const resText = await response.text();
        let json;
        try {
          json = JSON.parse(resText);
        } catch (e) {
          console.error('⚠️ JSON 파싱 실패. 원문:', resText);
          throw {
            message: '응답이 비어있거나 JSON 형식이 아님',
            code: response.status,
          };
        }

        if (!response.ok) {
          throw { message: json.message, code: json.code };
        }

        setResponseData(json);
      } catch (error: any) {
        navigate(`/fail?code=${error.code}&message=${error.message}`);
      }
    }

    confirm();
  }, [searchParams]);

  return (
    <>
      <div className="box_section" style={{ width: '600px' }}>
        <img
          width="100px"
          src="https://static.toss.im/illusts/check-blue-spot-ending-frame.png"
        />
        <h2>결제를 완료했어요</h2>
        <div className="p-grid typography--p" style={{ marginTop: '50px' }}>
          <div className="p-grid-col text--left">
            <b>결제금액</b>
          </div>
          <div className="p-grid-col text--right" id="amount">
            {`${Number(searchParams.get('amount')).toLocaleString()}원`}
          </div>
        </div>
        <div className="p-grid typography--p" style={{ marginTop: '10px' }}>
          <div className="p-grid-col text--left">
            <b>주문번호</b>
          </div>
          <div className="p-grid-col text--right" id="orderId">
            {`${searchParams.get('orderId')}`}
          </div>
        </div>
        <div className="p-grid typography--p" style={{ marginTop: '10px' }}>
          <div className="p-grid-col text--left">
            <b>paymentKey</b>
          </div>
          <div
            className="p-grid-col text--right"
            id="paymentKey"
            style={{ whiteSpace: 'initial', width: '250px' }}
          >
            {`${searchParams.get('paymentKey')}`}
          </div>
        </div>
        <div className="p-grid-col">
          <Link to="https://docs.tosspayments.com/guides/v2/payment-widget/integration">
            <button className="button p-grid-col5">연동 문서</button>
          </Link>
          <Link to="https://discord.gg/A4fRFXQhRu">
            <button
              className="button p-grid-col5"
              style={{ backgroundColor: '#e8f3ff', color: '#1b64da' }}
            >
              실시간 문의
            </button>
          </Link>
        </div>
      </div>
      <div
        className="box_section"
        style={{ width: '600px', textAlign: 'left' }}
      >
        <b>Response Data :</b>
        <div id="response" style={{ whiteSpace: 'initial' }}>
          {responseData && <pre>{JSON.stringify(responseData, null, 4)}</pre>}
        </div>
      </div>
    </>
  );
}
