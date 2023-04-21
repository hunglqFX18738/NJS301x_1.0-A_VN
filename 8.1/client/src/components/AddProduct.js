import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const navigate = useNavigate();

  const titleRef = useRef();
  const imageUrlRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();

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

  const submitHandler = event => {
    event.preventDefault();
    const titleValue = titleRef.current.value;
    const imageUrlValue = imageUrlRef.current.value;
    const priceValue = priceRef.current.value;
    const descriptionValue = descriptionRef.current.value;
    let productData = {
      title: titleValue,
      imageUrl: imageUrlValue,
      price: priceValue,
      description: descriptionValue,
    };
    postData('http://localhost:5000/add-product', productData);
    navigate('/', { replace: true });
  };

  return (
    <React.Fragment>
      <form class='product-form' onSubmit={submitHandler} method='POST'>
        <div class='form-control'>
          <label>Enter Title</label>
          <input
            type='text'
            ref={titleRef}
            name='product-title'
            id='product-title'
          />
          <label>Enter imageUrl</label>
          <input
            type='text'
            ref={imageUrlRef}
            name='product-imageUrl'
            id='product-imageUrl'
          />
          <label>Enter Price</label>
          <input
            type='text'
            ref={priceRef}
            name='product-price'
            id='product-price'
          />
          <label>Enter Description</label>
          <textarea
            ref={descriptionRef}
            name='product-description'
            id='product-description'
          />
        </div>
        <button className='btn' type='submit'>
          Add Product
        </button>
      </form>
    </React.Fragment>
  );
};

export default AddProduct;
