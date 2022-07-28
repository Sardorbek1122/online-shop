import './Card.scss';
import React from 'react';
import { formatCurrency } from '../../Use/formatCurrency';
import 'bulma';

type Props = {
  title: string;
  price: number;
  description: string;
  image: string;
};

export const Card: React.FC<Props> = (
  {
    title, price, description, image,
  }:Props,
) => {
  const quantity = 1;

  return (
    <div className="card">
      <img src={image} alt="/" className="card" />
      <h1>{title}</h1>
      <p>{formatCurrency(price)}</p>
      <p>{description}</p>

      {quantity === 1 ? (
        <button type="button">+ Add</button>
      ) : (
        <div>
          <div>
            <button type="button">-</button>
            <div>
              <span>{quantity}</span>
              in cart
            </div>
            <button type="button">+</button>
          </div>
          <button type="button">Remove</button>
        </div>
      )}
    </div>
  );
};
