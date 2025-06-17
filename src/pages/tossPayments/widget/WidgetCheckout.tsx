import { useEffect, useRef, useState } from 'react';
import {
  loadTossPayments,
  ANONYMOUS,
  TossPaymentsWidgets,
} from '@tosspayments/tosspayments-sdk';
import { useLocation } from 'react-router-dom';

// prefix와 ID를 연결해 사람이 읽을 수 있고 복호화 가능한 문자열 생성
// 예: "user_42", "order_3001"
// 추후 백엔드 암호화 로직 도입 전까지 임시 사용
const generateReadableId = (prefix: 'order' | 'user', id: number) =>
  `${prefix}_${id}`;

const clientKey = 'test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm';

export function WidgetCheckout() {
  const location = useLocation();
  const [ready, setReady] = useState(false);
  const [widgets, setWidgets] = useState<TossPaymentsWidgets | null>(null);
  const [amount, setAmount] = useState({
    currency: 'KRW',
    value: 0,
  });

  useEffect(() => {
    async function fetchPaymentWidgets() {
      const tossPayments = await loadTossPayments(clientKey);
      const customerKey = location.state?.userId
        ? generateReadableId('user', location.state.userId)
        : ANONYMOUS;

      const newWidgets = tossPayments.widgets({ customerKey });
      setWidgets(newWidgets);
    }

    fetchPaymentWidgets();
  }, [location.state]);

  useEffect(() => {
    async function renderPaymentWidgets() {
      if (widgets == null) {
        return;
      }

      console.log(
        `WidgetCheckout에서 총 결제 금액 : ${location.state.totalPrice}`
      );
      /**
       * 위젯의 결제금액을 결제하려는 금액으로 초기화하세요.
       * renderPaymentMethods, renderAgreement, requestPayment 보다 반드시 선행되어야 합니다.
       * @docs https://docs.tosspayments.com/sdk/v2/js#widgetssetamount
       */
      await widgets.setAmount({ ...amount, value: location.state.totalPrice });

      await Promise.all([
        /**
         * 결제창을 렌더링합니다.
         * @docs https://docs.tosspayments.com/sdk/v2/js#widgetsrenderpaymentmethods
         */
        widgets.renderPaymentMethods({
          selector: '#payment-method',
          // 렌더링하고 싶은 결제 UI의 variantKey
          // 결제 수단 및 스타일이 다른 멀티 UI를 직접 만들고 싶다면 계약이 필요해요.
          // @docs https://docs.tosspayments.com/guides/v2/payment-widget/admin#새로운-결제-ui-추가하기
          variantKey: 'DEFAULT',
        }),
        /**
         * 약관을 렌더링합니다.
         * @docs https://docs.tosspayments.com/reference/widget-sdk#renderagreement선택자-옵션
         */
        widgets.renderAgreement({
          selector: '#agreement',
          variantKey: 'AGREEMENT',
        }),
      ]);

      setReady(true);
    }

    renderPaymentWidgets();
  }, [widgets]);

  return (
    <div className="wrapper w-100">
      <div className="max-w-540 w-100">
        <div id="payment-method" className="w-100" />
        <div id="agreement" className="w-100" />
        <div className="btn-wrapper w-100">
          <button
            className="btn primary w-100"
            onClick={async () => {
              try {
                /**
                 * 결제 요청
                 * 결제를 요청하기 전에 orderId, amount를 서버에 저장하세요.
                 * 결제 과정에서 악의적으로 결제 금액이 바뀌는 것을 확인하는 용도입니다.
                 * @docs https://docs.tosspayments.com/sdk/v2/js#widgetsrequestpayment
                 */
                await widgets?.requestPayment({
                  orderId: generateReadableId('order', location.state.orderId),
                  // orderId: location.state.orderId,
                  orderName: 'testOrder',
                  customerName: '김예시',
                  customerEmail: 'dilkusha27@gmail.com',
                  successUrl: window.location.origin + '/tosspayments/success',
                  failUrl: window.location.origin + '/tosspayments/fail',
                });
              } catch (error) {
                console.error(`tossPaymentWideget 결제 실패 : ${error}`);
              }
            }}
          >
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
}
