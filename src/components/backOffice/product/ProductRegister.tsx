const ProductRegister = () => {
  /**
   * TODO: 필드 반복 렌더링 리팩토링 예정
   *
   * 현재 input 필드가 너무 많고 반복적인 구조라서
   * 추후 아래 방식으로 리팩토링 예정:
   *
   * - label, id, type을 가진 배열 정의
   * - map()으로 input/textarea 반복 렌더링
   * - select, fieldset 등은 예외 처리
   *
   * 예: const fields = [{ id: "korName", label: "한글 이름", type: "text" }, ...]
   *     fields.map(...)으로 렌더링
   *
   * 나중에 유지보수 편하게 만들기 위함. 시간 날 때 정리할 것.
   */

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const payload = {
      imageUrl: formData.get('imageUrl'),
      korName: formData.get('korName'),
      engName: formData.get('engName'),
      price: Number(formData.get('price')),
      vintage: Number(formData.get('vintage')),
      country: formData.get('country'),
      region: formData.get('region'),
      grapeVariety: formData.get('grapeVariety'),
      winery: formData.get('winery'),
      wineType: formData.get('wineType'),
      alcoholContent: Number(formData.get('alcoholContent')),
      stock: Number(formData.get('stock')),
      tasteProfile: {
        sweetness: Number(formData.get('sweetness')),
        acidity: Number(formData.get('acidity')),
        body: Number(formData.get('body')),
      },
      tastingNote: formData.get('tastingNote'),
      foodPairing: formData.get('foodPairing'),
      description: formData.get('description'),
    };

    fetch(`http://localhost:8080/api/admin/wines`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log(`POST 요청 성공 : `, jsonResponse.data);
      })
      .catch((error) => {
        console.error(`POST 요청 실패 : `, error);
      });
  };

  return (
    <>
      {/**
       * TODO: 반복 input 필드를 컴포넌트화하여 재사용성 향상 예정
       *
       * 리팩토링 아이디어:
       * - FormRow 컴포넌트 생성: label + input을 수평 정렬로 감싼 컴포넌트
       * - props: label, id, name, type 등 전달 받아서 유연하게 렌더링
       * - label은 className="w-32 shrink-0", input은 className="flex-1" 등으로 스타일 고정
       * - 예시:
       *   <FormRow
       *     label="와인 한글 이름"
       *     id="korName"
       *     name="korName"
       *     type="text"
       *   />
       *
       * 장점:
       * - label 정렬 깨짐 방지 (w-32 + shrink-0)
       * - 중복 제거로 코드 간결
       * - props로 유연한 확장 가능
       *
       * 향후 필드가 많아지면 field 배열 + map 방식과 병행도 고려
       */}

      <form
        onSubmit={handleSubmit}
        className="flex flex-col mx-auto p-10 bg-white rounded shadow space-y-6"
      >
        <div className="flex gap-8">
          <div className="productList-container-left space-y-4">
            <div className="flex items-center space-x-2">
              <label
                className="w-40 text-sm font-semibold text-gray-700"
                htmlFor="imageUrl"
              >
                와인 이미지 url:
              </label>
              <input
                id="imageUrl"
                name="imageUrl"
                type="text"
                className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
            </div>
            <div className="flex items-center space-x-2">
              <label
                className="w-40 text-sm font-semibold text-gray-700"
                htmlFor="korName"
              >
                와인 한글 이름:
              </label>
              <input
                id="korName"
                name="korName"
                type="text"
                className="flex-1 text-center border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
            </div>
            <div className="flex items-center space-x-2">
              <label
                className="w-40 text-sm font-semibold text-gray-700"
                htmlFor="engName"
              >
                와인 영문 이름:
              </label>
              <input
                id="engName"
                name="engName"
                type="text"
                className="flex-1 text-center border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
            </div>

            <div className="flex items-center space-x-2">
              <label
                className="w-40 text-sm font-semibold text-gray-700"
                htmlFor="vintage"
              >
                빈티지:
              </label>
              <input
                id="vintage"
                name="vintage"
                type="number"
                className="flex-1 text-center border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
            </div>
            <div className="flex items-center space-x-2">
              <label
                className="w-40 text-sm font-semibold text-gray-700"
                htmlFor="country"
              >
                국가:
              </label>
              <select
                id="country"
                name="country"
                defaultValue=""
                className="flex-1 text-center border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
              >
                {/* <option value="" disabled>
                국가 선택
              </option> */}
                <option value="">----- 생산국 선택 -----</option>
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
            <div className="flex items-center space-x-2">
              <label
                className="w-40 text-sm font-semibold text-gray-700"
                htmlFor="region"
              >
                지역:
              </label>
              <input
                id="region"
                name="region"
                type="text"
                className="flex-1 text-center border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
            </div>
            <div className="flex items-center space-x-2">
              <label
                className="w-40 text-sm font-semibold text-gray-700"
                htmlFor="grapeVariety"
              >
                품종:
              </label>
              <input
                id="grapeVariety"
                name="grapeVariety"
                type="text"
                className="flex-1 text-center border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
            </div>
            <div className="flex items-center space-x-2">
              <label
                className="w-40 text-sm font-semibold text-gray-700"
                htmlFor="winery"
              >
                와이너리:
              </label>
              <input
                id="winery"
                name="winery"
                type="text"
                className="flex-1 text-center border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
            </div>
            <div className="flex items-center space-x-2">
              <label
                className="w-40 text-sm font-semibold text-gray-700"
                htmlFor="wineType"
              >
                와인 타입:
              </label>
              <select
                id="country"
                name="country"
                defaultValue=""
                className="flex-1 text-center border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
              >
                <option value="">----- 와인 종류 선택 -----</option>
                <option value="RED">RED</option>
                <option value="WHITE">WHITE</option>
                <option value="ROSE">ROSE</option>
                <option value="SPARKLING">SPARKLING</option>
                <option value="DESSERT">DESSERT</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <label
                className="w-40 text-sm font-semibold text-gray-700"
                htmlFor="price"
              >
                가격:
              </label>
              <input
                id="price"
                name="price"
                type="number"
                className="flex-1 text-center border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
            </div>

            <div className="flex items-center space-x-2">
              <label
                className="w-40 text-sm font-semibold text-gray-700"
                htmlFor="stock"
              >
                재고 수량:
              </label>
              <input
                id="stock"
                name="stock"
                type="number"
                className="flex-1 text-center border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
            </div>
          </div>
          <div className="productList-container-right space-y-4">
            <div>
              <fieldset className="border border-gray-200 rounded p-4 space-y-3">
                <legend className="text-gray-600 text-sm font-semibold px-2">
                  맛 프로필
                </legend>
                <div className="flex items-center space-x-2">
                  <label
                    className="w-40 text-sm font-semibold text-gray-700"
                    htmlFor="sweetness"
                  >
                    당도:
                  </label>
                  <input
                    id="sweetness"
                    name="sweetness"
                    type="number"
                    min="1"
                    max="5"
                    className="flex-1 text-center border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <label
                    className="w-40 text-sm font-semibold text-gray-700"
                    htmlFor="acidity"
                  >
                    산도:
                  </label>
                  <input
                    id="acidity"
                    name="acidity"
                    type="number"
                    min="1"
                    max="5"
                    className="flex-1 text-center border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <label
                    className="w-40 text-sm font-semibold text-gray-700"
                    htmlFor="body"
                  >
                    바디:
                  </label>
                  <input
                    id="body"
                    name="body"
                    type="number"
                    min="1"
                    max="5"
                    className="flex-1 text-center border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
                  />
                </div>
              </fieldset>
            </div>

            <div className="flex items-center space-x-2">
              <label
                className="w-40 text-sm font-semibold text-gray-700"
                htmlFor="alcoholContent"
              >
                알콜 도수:
              </label>
              <input
                id="alcoholContent"
                name="alcoholContent"
                type="number"
                step="0.1"
                className="flex-1 text-center border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
            </div>

            <div className="flex items-center space-x-2">
              <label
                className="w-40 text-sm font-semibold text-gray-700"
                htmlFor="description"
              >
                간략한 설명:
              </label>
              <input
                id="description"
                name="description"
                type="text"
                className="flex-1 text-center border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
            </div>
            <div className="flex items-center space-x-2">
              <label
                className="w-40 text-sm font-semibold text-gray-700"
                htmlFor="foodPairing"
              >
                음식 페어링:
              </label>
              <input
                id="foodPairing"
                name="foodPairing"
                type="text"
                className="flex-1 text-center border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
            </div>
            <div className="flex items-center space-x-2">
              <label
                className="w-40 text-sm font-semibold text-gray-700"
                htmlFor="tastingNote"
              >
                테이스팅 노트:
              </label>
              <textarea
                id="tastingNote"
                name="tastingNote"
                rows={10}
                className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700 transition-colors"
        >
          와인 등록
        </button>
      </form>
    </>
  );
};

export default ProductRegister;
