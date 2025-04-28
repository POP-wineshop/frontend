import WineListPage from './pages/WineListPage';
import WineDescriptionPage from './pages/WineDescriptionPage';
import OrderPage from './pages/OrderPage';
import CartPage from './pages/CartPage';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';

function App() {
  return (
    <>
      <div className="layout">
        <Header />
        <main>
          <Routes>
            <Route path="/list" element={<WineListPage />} />
            <Route path="/description" element={<WineDescriptionPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
