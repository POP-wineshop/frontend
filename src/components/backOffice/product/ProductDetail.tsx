import sampleProductItemData from '@/constants/backOffice/product/sampleProductItemData';
import { useState } from 'react';

const ProductDetail = () => {
  const [product, setProduct] = useState<Record<string, any>>(
    sampleProductItemData
  );

  return (
    <div className="productDetail-container p-6">
      <table className="w-full border border-collapse text-sm">
        <tbody>
          <tr>
            <th className="text-left p-2 bg-gray-100" colSpan={2}>
              한글명
            </th>
            <td className="p-2" colSpan={6}>
              {product.wineName.korean}
            </td>
          </tr>
          <tr>
            <th className="text-left p-2 bg-gray-100" colSpan={2}>
              영문명
            </th>
            <td className="p-2" colSpan={6}>
              {product.wineName.english}
            </td>
          </tr>
          <tr>
            <th className="text-left p-2 bg-gray-100" colSpan={2}>
              요약 설명
            </th>
            <td className="p-2" colSpan={6}>
              {product.description}
            </td>
          </tr>

          <tr>
            <th className="text-left p-2 bg-gray-100" colSpan={2}>
              국가 및 지역
            </th>
            <td className="p-2" colSpan={6}>
              {product.country} &gt; {product.region}
            </td>
          </tr>
          <tr>
            <th className="text-left p-2 bg-gray-100" colSpan={2}>
              와이너리
            </th>
            <td className="p-2" colSpan={6}>
              {product.winery}
            </td>
          </tr>
          <tr>
            <th className="text-left p-2 bg-gray-100" colSpan={2}>
              품종
            </th>
            <td className="p-2" colSpan={6}>
              {product.grapeVariety}
            </td>
          </tr>

          <tr>
            <th className="text-left p-2 bg-gray-100" colSpan={2}>
              당도
            </th>
            <td className="p-2" colSpan={2}>
              {product.tasteProfile.sweetness}
            </td>
            <th className="text-left p-2 bg-gray-100" colSpan={2}>
              산도
            </th>
            <td className="p-2" colSpan={2}>
              {product.tasteProfile.acidity}
            </td>
          </tr>

          <tr>
            <th className="text-left p-2 bg-gray-100" colSpan={2}>
              바디
            </th>
            <td className="p-2" colSpan={2}>
              {product.tasteProfile.body}
            </td>
            <th className="text-left p-2 bg-gray-100" colSpan={2}>
              도수
            </th>
            <td className="p-2" colSpan={2}>
              {product.alcoholContent}%
            </td>
          </tr>

          <tr>
            <th className="text-left p-2 bg-gray-100" colSpan={2}>
              가격
            </th>
            <td className="p-2" colSpan={2}>
              ₩{product.price.value.toLocaleString()}
            </td>
            <th className="text-left p-2 bg-gray-100" colSpan={2}>
              재고
            </th>
            <td className="p-2" colSpan={2}>
              {product.stock}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductDetail;
