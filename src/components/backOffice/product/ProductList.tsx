import { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import { ProductRes } from '@/types/backOffice/product/productRes';

const ProductList = () => {
  const [productList, setProductList] = useState<ProductRes[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/wines`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log(`GET 요청 (api/wines) 응답: `, jsonResponse.data);
        setProductList(jsonResponse.data);
      })
      .catch((error) =>
        console.error(`GET 요청 (api/wines) 실행 오류 발생: `, error)
      );
  }, []);

  // const handleSelectProductItem = () => {};

  return (
    <>
      <div className="productItems-container flex flex-col gap-4">
        {productList &&
          productList.map((product: ProductRes) => (
            <ProductItem key={product.korName} product={product} />
          ))}
      </div>
    </>
  );
};

export default ProductList;
