import WineListPage from './pages/WineListPage';
import WineDescriptionPage from './pages/WineDescriptionPage';
import OrderPage from './pages/OrderPage';
import CartPage from './pages/CartPage';

import WinePostPage from './pages/WinePostPage';

import WineApiTestPage from './pages/WineApiTestPage';

import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/common/Header';
import BackOfficePage from './pages/backOffice/BackOfficePage';
import WineFilter from './components/common/WineFilter';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import MyPage from './pages/MyPage';

function App() {
  const location = useLocation();
  const shouldShowBackOffice = location.pathname.startsWith(`/backoffice`);
  const shouldShowWineFilter =
    location.pathname.startsWith(`/list`) ||
    location.pathname.startsWith(`/description`);

  return (
    <>
      {shouldShowBackOffice ? (
        <div className="backOffice-layout">
          <Routes>
            <Route path="/backoffice/*" element={<BackOfficePage />} />
          </Routes>
        </div>
      ) : (
        <div className="main-layout">
          {/* 헤더 */}
          <Header />

          {/* 와인 검색 필터 */}
          {shouldShowWineFilter ? <WineFilter /> : null}

          {/* 메인 컨텐츠 */}
          <main>
            <Routes>
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/login" element={<LoginPage />} />

              <Route path="/list" element={<WineListPage />} />
              <Route
                path="/description/:id"
                element={<WineDescriptionPage />}
              />
              <Route path="/order" element={<OrderPage />} />
              <Route path="/cart" element={<CartPage />} />

              <Route path="/mypage" element={<MyPage />} />

              <Route path="/post" element={<WinePostPage />} />

              {/* API 호출 테스트 */}
              <Route path="/apitest" element={<WineApiTestPage />} />
            </Routes>
          </main>
        </div>
      )}
    </>
  );
}

export default App;
