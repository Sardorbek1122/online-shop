import './StorePage.scss';
import React, { useCallback, useState, useEffect } from 'react';
import { ProductApi } from '../../Api/api';
import { Card } from '../../Components/Card';

export const StorePage: React.FC = () => {
  const [products, setProducts] = useState<Products[]>([]);

  const loadPage = useCallback(
    async () => {
      const loadedPage = await ProductApi();

      setProducts(loadedPage);
    },
    [],
  );

  useEffect(
    () => {
      loadPage();
    },
    [loadPage],
  );

  return (
    <div>
      <h1>Store</h1>
      <div className="wrapper__card">
        {products.map(product => (
          <div
            key={product.id}
            className="card-itself"
          >
            <Card {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};
