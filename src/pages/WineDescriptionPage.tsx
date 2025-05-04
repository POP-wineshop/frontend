import { useState } from 'react';
import WineFilter from '../components/common/WineFilter';
import WineDescriptionBottom from '../components/wineDescription/WineDescriptionBottom';
import WineDescriptionTop from '../components/wineDescription/WineDescriptionTop';
import OrderModal from '../components/wineDescription/OrderModal';

const WineDescriptionPage = () => {
  const [isModalOn, setIsModalOn] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsModalOn(true);
  };

  const handleCloseModal = () => {
    setIsModalOn(false);
  };

  return (
    <>
      <WineFilter />
      <div className="wine-description min-w-[900px]">
        <WineDescriptionTop handleOpenModal={handleOpenModal} />
        <WineDescriptionBottom />
      </div>

      {/* 개별 주문 시 MODAL */}
      {isModalOn ? <OrderModal /> : ''}
    </>
  );
};

export default WineDescriptionPage;
