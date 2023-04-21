import React from 'react';

import { useParams } from 'react-router-dom';

import CartButton from './CartButton';

const ProductDetails = props => {
  const params = useParams();
  const prodId = params.productId;
  const posProd = props.products.map(e => e.id).indexOf(prodId);
  const product = props.products[posProd];

  return (
    <div className='centered'>
      <h1>{product.title}</h1>
      <hr />
      <div>
        <img src={product.imageUrl} alt={product.title} />
      </div>
      <h2>{product.price}</h2>
      <p>{product.description}</p>
      <CartButton productId={product.id} />
    </div>
  );
};

export default ProductDetails;
