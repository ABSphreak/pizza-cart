import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

const HomeWrapper = styled.div``;

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <HomeWrapper>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <img src={product.img_url} alt={product.name} />
        </div>
      ))}
    </HomeWrapper>
  );
};

export default HomeScreen;
