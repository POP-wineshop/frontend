import { useState } from 'react';

const ProductItem = () => {
  const [wineStock, setWineStock] = useState<number>(0);

  return (
    <>
      <div className="productItem-container flex border rounded p-4 mb-4 shadow bg-grey-50 cursor-pointer">
        <table className="w-full">
          <tbody>
            {/*<tr>
              <td colSpan={3}>{wineNameKor}</td>
              <td>가격: {winePrice}</td>
            </tr>
            <tr>
              <td>타입: {wineType}</td>
              <td>국가: {wineType}</td>
              <td>빈티지: {wineVintage}</td>
              <td>재고: {wineStock}</td>
            </tr> */}
            <tr>
              <td colSpan={3}>
                <span className="font-semibold">덕혼 나파밸리 멜롯</span>
              </td>
              <td>가격: 120,000원</td>
            </tr>
            <tr>
              <td>타입: 레드</td>
              <td>국가: 미국</td>
              <td>빈티지: 2021</td>
              <td>재고: 10개</td>
            </tr>
          </tbody>
        </table>
        <img src="" alt="상세 아이콘" />
      </div>
    </>
  );
};

export default ProductItem;
