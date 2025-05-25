import { Product } from '@/types/backOffice/product/product';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const [wineStock, setWineStock] = useState<number>(0);

  return (
    <>
      <div className="productItem-container group relative flex border rounded p-4 mb-4 shadow bg-grey-50 cursor-pointer">
        <table className="w-full">
          <tbody>
            <tr>
              <td className="font-semibold" colSpan={3}>
                {product.wineName.korean}
              </td>
              <td>가격: {product.price.value}</td>
            </tr>
            <tr>
              <td>타입: {product.wineType}</td>
              <td>국가: {product.country}</td>
              <td>빈티지: {product.vintage}</td>
              <td>재고: {product.stock}</td>
            </tr>
          </tbody>
        </table>
        <ArrowRight className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition" />
      </div>
    </>
  );
};

export default ProductItem;
