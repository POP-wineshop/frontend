const ProductRegister = () => {
  return (
    <>
      <div className="productList-container space-y-4">
        <div>
          {/* 이미지 업로드로 변경해둘 것 */}
          <label htmlFor="imageUrl">와인 이미지 url:</label>
          <input id="imageUrl" type="text" />
        </div>
        <div>
          <label htmlFor="korName">와인 한글 이름:</label>
          <input id="korName" type="text" />
        </div>
        <div>
          <label htmlFor="engName">와인 영문 이름:</label>
          <input id="engName" type="text" />
        </div>
        <div>
          <label htmlFor="price">가격:</label>
          <input id="price" type="number" />
        </div>
        <div>
          <label htmlFor="vintage">빈티지:</label>
          <input id="vintage" type="number" />
        </div>
        <div>
          <label htmlFor="country">국가:</label>
          <select id="country" defaultValue="">
            <option value="" disabled>
              국가 선택
            </option>
            <option value="">--- 생산국 ---</option>
            <option value="프랑스">프랑스</option>
            <option value="이탈리아">이탈리아</option>
            <option value="스페인">스페인</option>
            <option value="독일">독일</option>
            <option value="미국">미국</option>
            <option value="호주">호주</option>
            <option value="뉴질랜드">뉴질랜드</option>
            <option value="칠레">칠레</option>
            <option value="아르헨티나">아르헨티나</option>
          </select>
        </div>
        <div>
          <label htmlFor="region">지역:</label>
          <input id="region" type="text" />
        </div>
        <div>
          <label htmlFor="grapeVariety">품종:</label>
          <input id="grapeVariety" type="text" />
        </div>
        <div>
          <label htmlFor="winery">와이너리:</label>
          <input id="winery" type="text" />
        </div>
        <div>
          <label htmlFor="wineType">와인 타입:</label>
          <input id="wineType" type="text" />
        </div>
        <div>
          <label htmlFor="alcoholContent">알콜 도수:</label>
          <input id="alcoholContent" type="number" step="0.1" />
        </div>
        <div>
          <label htmlFor="stock">재고 수량:</label>
          <input id="stock" type="number" />
        </div>
        <div>
          <fieldset className="space-y-1">
            <legend>맛 프로필</legend>
            <div>
              <label htmlFor="sweetness">당도:</label>
              <input id="sweetness" type="number" min="1" max="5" />
            </div>
            <div>
              <label htmlFor="acidity">산도:</label>
              <input id="acidity" type="number" min="1" max="5" />
            </div>
            <div>
              <label htmlFor="body">바디:</label>
              <input id="body" type="number" min="1" max="5" />
            </div>
          </fieldset>
        </div>
        <div>
          <label htmlFor="tastingNote">테이스팅 노트:</label>
          <textarea id="tastingNote" rows={4} className="w-2/3" />
        </div>
        <div>
          <label htmlFor="foodPairing">음식 페어링:</label>
          <input id="foodPairing" type="text" />
        </div>
        <div>
          <label htmlFor="description">설명:</label>
          <input id="description" type="text" />
        </div>
        <div>
          <label htmlFor="imageUrl">이미지 URL:</label>
          <input id="imageUrl" type="text" />
        </div>
      </div>
    </>
  );
};

export default ProductRegister;
