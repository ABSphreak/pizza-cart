import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { IoTrashOutline } from 'react-icons/io5';

const CartWrapper = styled.div`
  background-color: #f5f3f4;
  z-index: 1;
  padding: 0 2em 3em 2em;
  height: 100vh;
  .header {
    font-size: 2rem;
    font-weight: bold;
    padding: 1.5em 0;
  }
  .empty-msg {
    font-size: 1.25rem;
    display: flex;
    a {
      padding: 0 0 0 15px;
      text-decoration: none;
      font-weight: bold;
      color: #e3427d;
    }
  }
  .cart-outer {
    display: flex;
    justify-content: center;

    .cart-inner {
      .cart-item {
        font-size: 1.25rem;
        width: 60vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5em 0.5em;
        img {
          width: 120px;
          margin-right: 25px;
          border-radius: 10px;
        }
        .details {
          width: 70%;
          padding: 0 2em 0 0;
          .name {
            font-weight: 500;
          }
          .meta {
            padding: 10px 0;
            font-size: 1rem;
            display: flex;
            justify-content: space-between;
          }
          .topping {
            font-size: 1rem;
            background-color: #ffc8dd;
            color: #5f0f40;
            border-radius: 50px;
            padding: 3px 10px;
            margin: 0 5px;
            overflow: scroll;
            width: 100%;
            :nth-child(1) {
              margin: 0 5px 0 0;
            }
          }
        }
        button {
          outline: none;
          border: none;
          font-size: 2rem;
          margin-left: 25px;
          cursor: pointer;
          color: #ef233c;
          background-color: transparent;
        }
        border-radius: 10px;
        :hover {
          transition: 300ms all;
          box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        }
      }
      .cart-summary {
        padding: 0.5em;
        font-size: 1.5rem;
        h4 {
          padding: 15px 0;
          font-weight: bold;
        }
        div {
          display: flex;
          button {
            outline: none;
            border: none;
            border-radius: 25px;
            font-size: 1.15rem;
            padding: 5px 15px;
            margin-left: 25px;
            cursor: pointer;
            background-color: #22223b;
            color: #f5f3f4;
          }
        }
      }
    }
  }
  /* @media (max-width: 768px) {
    .card-outer {
      .card-inner {
        .card-item {
          width: 100%;
          .details {
            width: 100%;
          }
        }
      }
    }
  } */
`;

const CartScreen = ({ match }) => {
  const productId = match.params.id;
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const qty = searchParams.get('qty');
  const size = searchParams.get('size');
  const toppingsParam = searchParams.get('toppings');
  console.log(toppingsParam);

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty, size, toppingsParam));
    }
  }, [dispatch, productId, qty, size, toppingsParam]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <CartWrapper>
        <div className="header">🛒 Your cart</div>
        <div className="content">
          {cartItems.length === 0 ? (
            <div className="empty-msg">
              <h2>Your cart is empty!</h2>
              <Link to="/" className="font-bold underline">
                ← Go Back
              </Link>
            </div>
          ) : (
            <div className="cart-outer">
              <div className="cart-inner">
                {cartItems.map((item) => (
                  <div className="cart-item" key={item.product}>
                    <img src={item.img_url} alt={item.name} width="300" />
                    <div className="details">
                      <h3 className="name">{item.name}</h3>
                      <div className="meta">
                        <p>₹ {item.price}</p>
                        <p>Qty. {item.qty}</p>
                        <p>Size: {item.size}</p>
                      </div>
                      <p>
                        {item.toppingsParam &&
                          item.toppingsParam
                            .split(',')
                            .map((topping) => (
                              <span className="topping">{topping}</span>
                            ))}
                      </p>
                    </div>

                    <button onClick={() => removeFromCartHandler(item.product)}>
                      <IoTrashOutline />
                    </button>
                  </div>
                ))}

                <div className="cart-summary">
                  <h4>Order summary</h4>
                  <div>
                    <h5>
                      Total: ₹{' '}
                      {cartItems
                        .reduce(
                          (acc, item) =>
                            acc + Number(item.qty) * Number(item.price),
                          0
                        )
                        .toFixed(2)}
                    </h5>
                    <button className="pay-btn">Checkout →</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </CartWrapper>
    </div>
  );
};

export default CartScreen;
