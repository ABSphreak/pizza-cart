import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';

const CartScreen = ({ match, location }) => {
  const productId = match.params.id;
  const qty = location.search ? location.search.split('=')[1] : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <>
        <h1 className="text-lg uppercase">Your cart</h1>
        {cartItems.length === 0 ? (
          <>
            <h2>Your cart is empty!</h2>
            <Link to="/" className="font-bold underline">
              ← Go Back
            </Link>
          </>
        ) : (
          <div>
            <div>
              {cartItems.map((item) => (
                <div key={item.product}>
                  <img src={item.img_url} alt={item.name} width="300" />
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  <button onClick={() => removeFromCartHandler(item.product)}>
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default CartScreen;
