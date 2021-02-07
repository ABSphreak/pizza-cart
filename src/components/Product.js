import { useState } from 'react';
import styled from 'styled-components';
import ProductModal from './ProductModal';
import Rating from './Rating';
import { BiFoodTag } from 'react-icons/bi';

const ProductWrapper = styled.div`
  .inner-wrapper {
    height: 100%;
    background-color: #ffffff;
    transition: 0.35s all;
    margin: 0 0 15px 0;
    border-radius: 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    img {
      width: 100%;
      height: 225px;
      object-fit: cover;
      border-radius: 10px 10px 0 0;
    }
    .info {
      padding: 5px;
      margin: 10px 0;
      .header {
        display: flex;
        justify-content: space-between;
        font-size: 1.2rem;
        padding: 5px 8px;
        h3 {
          display: flex;
          font-weight: 600;
          color: #014f86;
          .veg-icon {
            margin-left: 6px;
            color: #d00000;
          }
        }
        h4 {
          color: #343a40;
          font-weight: bold;
        }
      }
      p {
        margin: 5px 8px;
        line-height: 1.1;
        color: #495057;
      }
    }
    .actions-wrapper {
      .actions {
        width: 100%;
        position: relative;
        height: 35px;
        padding: 0 0 10px 0;

        .qty-input {
          position: absolute;
          left: 3.5%;
          bottom: 20%;
          display: flex;
          width: 30%;
          input {
            font-size: 1.1rem;
            width: 20%;
            outline: none;
            border: 1px solid #ffbf69;
            text-align: center;
            -moz-appearance: textfield;
            ::-webkit-outer-spin-button,
            ::-webkit-inner-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }
          }
          button {
            font-size: 1.1rem;
            border: none;
            outline: none;
            padding: 5px 10px;
            background-color: #ffbf69;
            cursor: pointer;
          }
          button:nth-child(1) {
            border-radius: 50px 0 0 50px;
          }
          button:last-child {
            border-radius: 0 50px 50px 0;
          }
        }
        .add-btn {
          position: absolute;
          right: 3.5%;
          bottom: 20%;
          button {
            border-radius: 50px;
            font-size: 1.1rem;
            border: none;
            outline: none;
            padding: 5px 20px;
            background-color: #014f86;
            color: #f0efeb;
            width: 100%;
            :hover {
              cursor: pointer;
            }
          }
        }
      }
    }

    :hover {
      transition: 0.35s all;
      transform: scale(1.025);
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    }
  }
`;

const Product = ({
  id,
  name,
  description,
  imgUrl,
  price,
  isVeg,
  rating,
  size,
  toppings,
  historyMain,
}) => {
  const [qty, setQty] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const handleAdd = () => {
    if (qty > 0) {
      setShowModal(true);
    }
  };

  return (
    <ProductWrapper>
      <div className="inner-wrapper">
        <img src={imgUrl} alt={name} />
        <div className="info">
          <div className="header">
            <h3>
              <div>{name}</div>
              <div className="veg-icon">
                <BiFoodTag style={{ color: `${isVeg && '#2b9348'}` }} />
              </div>
            </h3>
            <h4>₹ {price}</h4>
          </div>
          <p>{description}</p>
          <Rating rating={rating} />
        </div>
        <div className="actions-wrapper">
          <div className="actions">
            <div className="qty-input">
              <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
              <input
                type="number"
                onChange={(e) => setQty(e.target.value)}
                value={qty}
                min="0"
              />
              <button onClick={() => setQty(qty + 1)}>+</button>
            </div>
            <div className="add-btn">
              <button onClick={() => handleAdd()}>Add</button>
            </div>
          </div>
        </div>
      </div>
      <ProductModal
        showModal={showModal}
        setShowModal={setShowModal}
        size={size}
        toppings={toppings}
        id={id}
        name={name}
        imgUrl={imgUrl}
        price={price}
        isVeg={isVeg}
        qty={qty}
        historyMain={historyMain}
      />
    </ProductWrapper>
  );
};

export default Product;
