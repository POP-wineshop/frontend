import { useEffect, useState } from 'react';
import ProductDetail from './ProductDetail';
import ProductItem from './ProductItem';

const ProductList = () => {
  const [productList, setProductList] = useState<Record<string, any> | null>(
    {}
  );
  const [selectedProductItem, setSelectedProductItem] = useState<Record<
    string,
    any
  > | null>({});

  useEffect(() => {
    fetch(`http://localhost:8080/api/wines`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log(`GET 요청 (api/wines) 응답: `, jsonResponse.data);
        setProductList(jsonResponse.data);
      })
      .catch((error) => console.error(`/api/wines 실행 오류 발생: `, error));
  }, []);

  const handleSelectProductItem = () => {};

  return (
    <>
      <div className="productList-container flex">
        <div className="productItems-container flex flex-col">
          {productList.map((product: Record<string, any>) => (
            <ProductItem product={product} />
          ))}
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
        {selectedProductItem && <ProductDetail />}
      </div>
    </>
  );
};
export default ProductList;
