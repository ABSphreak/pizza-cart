import { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;

  z-index: 1000;
  border-radius: 15px;
  button.close {
    color: #fff;
    position: absolute;
    top: 5.7%;
    right: 0.25%;
    outline: none;
    border: none;
    font-size: 1.5rem;
    background: transparent;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    button.close {
      right: 6%;
      color: #000;
    }
  }
`;

const ModalContent = styled.div`
  display: flex;
  height: 470px;
  width: 550px;
  .left {
    padding: 25px 0 25px 25px;
    width: 50%;
    h2 {
      font-size: 1.5rem;
      font-weight: 600;
      padding: 0 0 15px 0;
      color: #014f86;
    }
    h4 {
      font-size: 1.25rem;
      padding: 8px 0;
    }
    p {
      font-size: 1.15rem;
      margin: 10px 0;
    }
    .sizes,
    .toppings {
      margin: 10px 0;
    }
    .size-options,
    .toppings-options {
      display: flex;
      flex-direction: column;
      div {
        margin: 3px 0;
      }
    }
    .cart-btn {
    }
  }
  .right {
    display: block;
    width: 50%;
    height: 100%;
    margin: 0;
    padding: 0;
    img {
      object-fit: cover;
      width: 300px;
      height: 100%;
      border-radius: 0 15px 15px 0;
    }
  }
  button.cart-btn {
    outline: none;
    border: none;
    border-radius: 25px;
    font-size: 1.1rem;
    padding: 5px 15px;
    cursor: pointer;
    background-color: #22223b;
    color: #f5f3f4;
  }
  @media (max-width: 768px) {
    width: 300px;
    height: auto;
    .right {
      display: none;
    }
  }
`;

const OverlayComponent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: saturate(120%) blur(20px);
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

const ProductModal = ({
  showModal,
  setShowModal,
  name,
  imgUrl,
  size,
  toppings,
  price,
  isVeg,
  qty,
  historyMain,
  id,
}) => {
  const [pizzaSize, setPizzaSize] = useState('');
  const [pizzaToppings, setPizzaToppings] = useState({});

  const handleAdd = () => {
    console.log(pizzaToppings);
    console.log(`Radio value → ${pizzaSize}`);
    console.log(id);
    // convert pizzaToppings to a query string
    const toppingsParam = Object.keys(pizzaToppings)
      .map((key) => `${key}`)
      .join(',');

    historyMain.push(
      `/cart/${id}?qty=${qty}&size=${pizzaSize}&toppings=${toppingsParam}`
    );
  };

  if (!showModal) return null;
  return ReactDOM.createPortal(
    <>
      <OverlayComponent onClick={() => setShowModal(false)} />
      <ModalWrapper>
        <button className="close" onClick={() => setShowModal(false)}>
          <MdClose />
        </button>
        <ModalContent>
          <div className="left">
            <h2>{name}</h2>
            <p>Customize your order:</p>
            <div className="sizes">
              {/* <h4>{size.title}</h4> */}
              <h4>Choose size:</h4>
              <div className="size-options">
                {size.items.map((item, i) => (
                  <div key={i}>
                    <label htmlFor="size">
                      <input
                        key={item.size}
                        type="radio"
                        required
                        name="size"
                        value={item.size}
                        onChange={(e) => setPizzaSize(e.target.value)}
                      />
                      {item.size}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="toppings">
              {/* <h4>{toppings.title}</h4> */}
              <h4>Choose toppings:</h4>
              <div className="toppings-options">
                {toppings.items.map((item, i) => (
                  <div key={i}>
                    <input
                      key={item.name}
                      type="checkbox"
                      name={item.name}
                      value={item.name}
                      onChange={(e) =>
                        setPizzaToppings({
                          ...pizzaToppings,
                          [e.target.name]: e.target.checked,
                        })
                      }
                    />
                    <label htmlFor="toppings">{item.name}</label>
                  </div>
                ))}
              </div>
            </div>
            <button className="cart-btn" onClick={handleAdd}>
              Add to cart
            </button>
          </div>
          <div className="right">
            <img src={imgUrl} alt={name} />
          </div>
        </ModalContent>
      </ModalWrapper>
    </>,
    document.getElementById('portal')
  );
};

export default ProductModal;
