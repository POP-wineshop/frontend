/**
 * ✅ export default
 * - 한 파일에 하나만 export 가능
 * - import할 때 이름을 자유롭게 지정 가능
 *
 * ✅ export const
 * - 여러 개 export 가능
 * - import할 때 이름을 정확히 맞춰야 함
 */

const sampleUserItemData = {
  userId: 'testUser01',
  password: 'qwerty1234!!',
  name: '김예도',
  orders: [
    {
      orderNumber: '#20250524-001',
      totalPrice: 144000,
    },
  ],
};

export default sampleUserItemData;
