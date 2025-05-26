import { useEffect, useState } from 'react';
import ProductDetail from './ProductDetail';
import ProductItem from './ProductItem';
import { sampleProductList } from '@/constants/backOffice/product/sampleProductList';
import { Product } from '@/types/backOffice/product/product';

const ProductList = () => {
  const [productList, setProductList] = useState<Product[]>([]);

  // useEffect(() => {
  //   fetch(`http://localhost:8080/api/wines`)
  //     .then((response) => response.json())
  //     .then((jsonResponse) => {
  //       console.log(`GET 요청 (api/wines) 응답: `, jsonResponse.data);
  //       setProductList(jsonResponse.data);
  //     })
  //     .catch((error) => console.error(`/api/wines 실행 오류 발생: `, error));
  // }, []);

  useEffect(() => {
    setProductList(sampleProductList);
  });

  const handleSelectProductItem = () => {};

  return (
    <>
      <div className="productItems-container flex flex-col gap-4">
        {productList &&
          productList.map((product: Product) => (
            <ProductItem product={product} />
          ))}
      </div>
    </>
  );
};

export default ProductList;
