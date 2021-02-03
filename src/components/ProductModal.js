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
`;

const ModalContent = styled.div`
  display: flex;
  height: 450px;
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
  }
  .right {
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
`;

const OverlayComponent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
}) => {
  const [pizzaSize, setPizzaSize] = useState('');
  const [pizzaToppings, setPizzaToppings] = useState({});

  const handleAdd = () => {
    console.log(pizzaToppings);
    console.log(`Radio value → ${pizzaSize}`);
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
                {size.items.map((item) => (
                  <label htmlFor="size">
                    <input
                      key={item.size}
                      type="radio"
                      name="size"
                      value={item.size}
                      onChange={(e) => setPizzaSize(e.target.value)}
                    />
                    {item.size}
                  </label>
                ))}
              </div>
            </div>
            <div className="toppings">
              {/* <h4>{toppings.title}</h4> */}
              <h4>Choose toppings:</h4>
              <div className="toppings-options">
                {toppings.items.map((item) => (
                  <div>
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
            <button onClick={handleAdd}>Add to cart</button>
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
