import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Product from '../components/Product';

const HomeWrapper = styled.section`
  background-color: #f5f3f4;
  z-index: 1;
  padding: 3em 2em;
  .product-list {
    display: grid;
    grid-gap: 1.75rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <div className="product-list">
        {products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            description={product.description}
            imgUrl={product.img_url}
            price={product.price}
            rating={product.rating}
            isVeg={product.isVeg}
            size={product.size[0]}
            toppings={product.toppings[0]}
          />
        ))}
      </div>
    </HomeWrapper>
  );
};

export default HomeScreen;
