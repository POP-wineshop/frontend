import { use, useRef, useState } from 'react';

const WineApiTestPage = () => {
  const [endPoint, setEndPoint] = useState<string>('');

  // URL에 따라 개별 ID 입력칸이 필요한지 여부의 상태
  const [needsWineIdInput, setNeedsWineIdInput] = useState(false);
  const [needsOrderIdInput, setNeedsOrderIdInput] = useState(false);

  const [method, setMethod] = useState<string>('');
  const [response, setResponse] = useState<Record<string, any> | null>({});

  const selectRef = useRef<HTMLSelectElement>(null);

  const [jsonInput, setJsonInput] = useState<string>('');
  const [queryInput, setQueryInput] = useState<string>('');
  const [wineId, setWineID] = useState<number>(0);
  const [orderId, setOrderID] = useState<number>(0);

  // const [isSuccess, setIsSuccess] = useState<boolean>(false);
  // const [errorCode, setErrorCode] = useState<number>('');

  // HTTP 메서드에 따라 JSON 데이터 입력칸이 필요한지 여부
  const needsJsonInput = method === 'POST' || method === 'PATCH';
  const needsQueryInput =
    endPoint.includes('/category') ||
    (method === 'PATCH' &&
      endPoint.includes('/orders/') &&
      endPoint.includes('/items/'));

  // 어떤 형태든 입력칸이 필요하면 true
  const shouldRenderInputSection =
    needsWineIdInput || needsOrderIdInput || needsJsonInput || needsQueryInput;

  const handleEndPointChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedText = e.target.selectedOptions[0].text;
    const value = e.target.value;

    setEndPoint(value);
    setNeedsWineIdInput(selectedText.includes('[wineId]'));
    setNeedsOrderIdInput(selectedText.includes('[orderId]'));
  };

  const handleRequestApi = () => {
    let url = `http://localhost:8080/${endPoint}`;
    if (
      needsQueryInput &&
      queryInput.trim() &&
      endPoint.includes('/category')
    ) {
      url += `?keyword=${encodeURIComponent(queryInput.trim())}`;
      console.log(url);
    } else if (
      needsQueryInput &&
      queryInput.trim() &&
      endPoint.includes('/category')
    ) {
      url += `?quantity=${encodeURIComponent(queryInput.trim())}`;
      console.log(url);
    } else if (!needsQueryInput && url.includes('?')) {
      url = url.split('?')[0]; // '?' 기준 앞부분만 남김
      console.log(url);
    }

    let options: RequestInit = { method };

    if (needsJsonInput) {
      options.headers = { 'content-type': 'application/json' };
      options.body = jsonInput;
    }

    fetch(url, options) // 서버에 요청 보냄
      .then((res) => res.json())
      /**
       * 응답(res)을 JSON 데이터로 파싱함
       * res.json()은 Promise를 반환함 → 바로 다음 .then으로 전달해야 함
       * 즉시 값을 얻는 게 아니라, 비동기적으로 데이터가 준비된 후 사용 가능함
       */
      .then((jsonResponse) => {
        setResponse(jsonResponse);
      }); // 실제 JSON 데이터로 상태 업데이트
  };

  return (
    <>
      <div className="p-6 space-y-6 bg-gray-50 rounded-xl shadow-md max-w-2xl mx-auto my-12">
        {/* 메서드 & 엔드포인트 선택 */}
        <div className="flex gap-6">
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="w-1/3 p-2 border border-gray-300 rounded-md shadow-sm bg-white text-center appearance-none"
          >
            <option value="">---- METHODS ----</option>
            <option value="POST">POST</option>
            <option value="GET">GET</option>
            <option value="PATCH">PATCH</option>
            <option value="DELETE">DELETE</option>
          </select>

          <select
            ref={selectRef}
            value={endPoint}
            onChange={handleEndPointChange}
            className="w-2/3 p-2 border border-gray-300 rounded-md shadow-sm bg-white text-center appearance-none"
          >
            <option value="">-------- APIs --------</option>

            <option value="" disabled>
              ** 관리자 등록 **
            </option>
            <option value="api/admin/wines">
              &lt;POST&gt; api/admin/wines
            </option>

            <option value="" disabled>
              ** 와인 조회 **
            </option>
            <option value="api/wines">&lt;GET&gt; api/wines</option>
            <option value="api/wines/category">
              &lt;GET&gt; api/wines/category
            </option>
            <option value={`api/wines/${wineId}`}>
              &lt;GET&gt; api/wines/[wineId]
            </option>

            <option value="" disabled>
              ** 회원 정보 **
            </option>
            <option value="api/auth/signup">
              &lt;POST&gt; api/auth/signup
            </option>
            <option value="api/auth/login">&lt;POST&gt; api/auth/login</option>
            <option value="api/auth/refresh">
              &lt;POST&gt; api/auth/refresh
            </option>

            <option value="" disabled>
              ** 주문 **
            </option>
            <option value="api/orders">&lt;POST&gt; api/orders</option>
            <option value={`api/orders/${orderId}`}>
              &lt;DELETE&gt; api/orders/[orderId]
            </option>
            <option value={`api/orders/${orderId}/items/${wineId}`}>
              &lt;PATCH, DELETE&gt; api/orders/[orderId]/items/[wineId]
            </option>

            <option value="" disabled>
              ** 결제 **
            </option>
            <option value={`api/payments/${orderId}/confirm`}>
              &lt;POST&gt; api/payments/[orderId]/confirm
            </option>
          </select>
        </div>

        {/* 변수 입력 영역 */}
        {shouldRenderInputSection ? (
          <>
            {needsJsonInput ? (
              <div className="w-full">
                <div className="w-full">
                  <h2 className="font-semibold">
                    POST / PATCH 요청에 필요한 JSON 입력값
                  </h2>
                  <textarea
                    value={jsonInput}
                    onChange={(e) => setJsonInput(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm bg-white font-mono resize-y"
                    rows={10}
                    spellCheck={false}
                  />
                </div>
              </div>
            ) : (
              ''
            )}

            {needsQueryInput ? (
              <div className="w-full">
                <div className="w-full">
                  <h2 className="font-semibold">Query Parameter</h2>
                  <input
                    value={queryInput}
                    onChange={(e) => {
                      setQueryInput(e.target.value);
                    }}
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm bg-white text-center appearance-none"
                  />
                </div>
              </div>
            ) : (
              ''
            )}

            {needsWineIdInput || needsOrderIdInput ? (
              <div className="grid-2 flex gap-6">
                {needsWineIdInput ? (
                  <div className="w-full">
                    <h2 className="font-semibold">Wine Id</h2>
                    <input
                      value={wineId}
                      onChange={(e) => setWineID(Number(e.target.value))}
                      className="w-full p-2 border border-gray-300 rounded-md shadow-sm bg-white text-center appearance-none"
                    ></input>
                  </div>
                ) : (
                  ''
                )}

                {needsOrderIdInput ? (
                  <div className="w-full">
                    <h2 className="font-semibold">Order Id</h2>
                    <input
                      value={orderId}
                      onChange={(e) => setOrderID(Number(e.target.value))}
                      className="w-full p-2 border border-gray-300 rounded-md shadow-sm bg-white text-center appearance-none"
                    ></input>
                  </div>
                ) : (
                  ''
                )}
              </div>
            ) : (
              ''
            )}
          </>
        ) : (
          ''
        )}

        {/* 호출 버튼 영역 */}
        <button
          onClick={handleRequestApi}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          API 요청하기
        </button>

        {/* 응답 결과 영역 */}
        <div>
          <h2 className="font-semibold">
            API RESPONSE (METHOD: {method} / ENDPOINT: {endPoint})
          </h2>
          <pre className="p-3 bg-gray-100 rounded-md overflow-x-auto text-sm text-gray-800">
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      </div>
    </>
  );
};

export default WineApiTestPage;
