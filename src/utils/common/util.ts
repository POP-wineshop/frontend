export function toCurrencyFormat(value: number): string {
  return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
}

export const substractQuantity = (
  quantity: number,
  setQuantity: (arg0: number) => void
) => {
  if (quantity >= 2) {
    return setQuantity(quantity - 1);
  } else {
    alert('1 이하로는 수량을 줄일 수 없습니다.');
    return null;
  }
};

export const addQuantity = (
  quantity: number,
  setQuantity: (arg0: number) => void
) => {
  return setQuantity(quantity + 1);
};
