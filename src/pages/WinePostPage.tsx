const WinePostPage = () => {
  /**
   * NEED TO REFACTOR
   *
   * fieldIds 배열을 기반으로 깔끔하게 값 추출하고 있어 유지보수는 괜찮은 편.
   * 다만 입력 필드가 더 많아지거나 검증, 초기값 설정 등 요구사항이 생기면
   * 상태(useState) 기반 폼 관리 방식으로 리팩토링하는 것이 더 유리함.
   *
   * ✅ 개선 방향
   * - 상태 기반 입력값 관리(useState)
   * - 또는 react-hook-form 등 라이브러리 도입 고려
   *
   * 👉 추후 실시간 유효성 검사, 조건부 렌더링, 초기 데이터 설정 시 확장성 확보 가능
   */

  const handleWinePost = () => {
    // wineData의 key값
    const fieldIds = [
      'korName',
      'engName',
      'price',
      'wineType',
      'sweetness',
      'acidity',
      'body',
      'stock',
      'vintage',
      'country',
      'region',
      'grapeVariety',
      'winery',
      'alcoholContent',
      'tastingNote',
      'foodPairing',
      'description',
      'imageUrl',
    ];

    // key에 따른 value 저장용 빈 객체 생성
    const values: Record<string, string> = {};

    // 각 id에 해당하는 input 요소의 값을 values에 저장
    fieldIds.forEach((id) => {
      const element = document.getElementById(id) as
        | HTMLInputElement
        | HTMLSelectElement;
      values[id] = element.value;
    });

    // 중첩 구조(tasteProfile 포함)를 가진 최종 전송 데이터 객체 생성
    const wineData = {
      wineName: {
        korean: values.korName,
        english: values.engName,
      },
      price: {
        value: Number(values.price),
      },
      wineType: values.wineType,
      tasteProfile: {
        sweetness: Number(values.sweetness),
        acidity: Number(values.acidity),
        body: Number(values.body),
      },
      stock: Number(values.stock),
      vintage: Number(values.vintage),
      country: values.country,
      region: values.region,
      grapeVariety: values.grapeVariety,
      winery: values.winery,
      alcoholContent: values.alcoholContent,
      tastingNote: values.tastingNote,
      foodPairing: values.foodPairing,
      description: values.description,

      imageUrl: values.imageUrl,
    };

    // POST 요청 전송
    fetch(`http://localhost:8080/api/admin/wines`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(wineData),
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
    <div>
      <input id="korName" placeholder="한글 이름" />
      <input id="engName" placeholder="영어 이름" />
      <input id="price" type="number" placeholder="가격" />
      <input id="vintage" type="number" placeholder="빈티지" />
      <input id="country" placeholder="생산국" />
      <input id="region" placeholder="생산지" />
      <input id="grapeVariety" placeholder="품종" />
      <input id="imageUrl" placeholder="이미지 URL" />
      <br />
      맛 특징
      <br />
      <input
        id="sweetness"
        type="number"
        placeholder="당도 (1~5)"
        min="1"
        max="5"
      />
      <input
        id="acidity"
        type="number"
        placeholder="산도 (1~5)"
        min="1"
        max="5"
      />
      <input
        id="body"
        type="number"
        placeholder="바디감 (1~5)"
        min="1"
        max="5"
      />
      <br />
      <select id="wineType">
        <option value="">-- 와인 종류 선택 --</option>
        <option value="RED">RED</option>
        <option value="WHITE">WHITE</option>
        <option value="ROSE">ROSE</option>
        <option value="SPARKLING">SPARKLING</option>
        <option value="DESSERT">DESSERT</option>
      </select>
      <br />
      <button onClick={handleWinePost}>등록</button>
    </div>
  );
};

export default WinePostPage;
