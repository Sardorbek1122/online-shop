import './Card.scss';
import React from 'react';
import { formatCurrency } from '../../Use/formatCurrency';
import 'bulma';
import { useShoppingCart } from '../../Context/ShoppingCartContext';

type Props = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

export const Card: React.FC<Props> = (
  {
    id, title, price, description, image,
  }:Props,
) => {
  const {
    getItemQuentity,
    increaseCartQuentity,
    decreaseCartQuentity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuentity(id);

  return (
    <div className="card">
      <img src={image} alt="/" className="card" />
      <h1>{title}</h1>
      <p>{formatCurrency(price)}</p>
      <p>{description}</p>

      {quantity === 1 ? (
        <button
          type="button"
          onClick={() => increaseCartQuentity(id)}
        >
          + Add
        </button>
      ) : (
        <div>
          <div>
            <button
              type="button"
              onClick={() => decreaseCartQuentity(id)}
            >
              -
            </button>
            <div>
              <span>{quantity}</span>
              in cart
            </div>
            <button
              type="button"
              onClick={() => increaseCartQuentity(id)}
            >
              +
            </button>
          </div>
          <button
            type="button"
            onClick={() => removeFromCart(id)}
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
};
