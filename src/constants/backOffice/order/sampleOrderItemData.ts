/**
 * ✅ export default
 * - 한 파일에 하나만 export 가능
 * - import할 때 이름을 자유롭게 지정 가능
 *
 * ✅ export const
 * - 여러 개 export 가능
 * - import할 때 이름을 정확히 맞춰야 함
 */

const sampleOrderItemData = {
  orderNumber: '#20250524-001',
  orderDate: '2025.05.24 13:25',
  items: [
    {
      nameKor: '덕혼 나파밸리 멀롯',
      quantity: 2,
      unitPrice: 72000,
      totalPrice: 144000,
    },
    {
      nameKor: '마르께스 데 카세레스 크리안자',
      quantity: 1,
      unitPrice: 32000,
      totalPrice: 32000,
    },
    {
      nameKor: '샤또 몽페라 루즈',
      quantity: 1,
      unitPrice: 45000,
      totalPrice: 45000,
    },
  ],
  customer: {
    name: '김와인',
    zipCode: '01111',
    address: '서울시 종로구 XXX길 12-3',
    phone: '010-XXXX-XXXX',
    message: '부재 시 문 앞에 놓아주세요',
  },
  payment: {
    productTotal: 221000,
    discount: 0,
    deliveryFee: 0,
    totalPayment: 221000,
    method: '신용카드',
    status: 'cancelRequested', // 'pending' | 'paid' | 'cancelRequested' | 'canceled'
    cancelReason: '고객 단순 변심',
  },
};

export default sampleOrderItemData;
