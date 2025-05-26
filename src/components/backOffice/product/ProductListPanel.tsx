import { useState } from 'react';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';

const ProductListPanel = () => {
  const [selectedProductItem, setSelectedProductItem] = useState<Record<
    string,
    any
  > | null>({});
  return (
    <>
      <div className="productListPanel-container flex">
        <ProductList />
        {/* {selectedProductItem && <ProductDetail />} */}
        <ProductDetail />
      </div>
    </>
  );
};

export default ProductListPanel;
