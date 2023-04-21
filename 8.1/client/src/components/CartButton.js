import React, { useRef } from 'react';

const CartButton = props => {
  const prodIdRef = useRef();

  async function postData(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  const cartHandler = e => {
    e.preventDefault();
    const prodId = prodIdRef.current.value;
    let cartData = {
      productId: prodId,
    };
    postData('http://localhost:5000/cart', cartData);
  };

  return (
    <React.Fragment>
      <form onSubmit={cartHandler} method='post'>
        <button class='btn' type='submit'>
          Add to Cart
        </button>
        <input
          type='hidden'
          name='productId'
          ref={prodIdRef}
          value={props.productId}
        />
      </form>
    </React.Fragment>
  );
};

export default CartButton;
