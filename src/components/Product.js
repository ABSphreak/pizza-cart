import styled from 'styled-components';

const ProductWrapper = styled.div`
  .inner-wrapper {
    transition: 0.35s all;
    margin: 0 0 15px 0;
    border-radius: 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    img {
      width: 100%;
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
          font-weight: 600;
        }
        h4 {
        }
      }
      p {
        margin: 5px 8px;
        line-height: 1.1;
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
  name,
  description,
  imgUrl,
  price,
  rating,
  isVeg,
  size,
  toppings,
}) => {
  return (
    <ProductWrapper>
      <div className="inner-wrapper">
        <img src={imgUrl} alt={name} />
        <div className="info">
          <div className="header">
            <h3>{name}</h3>
            <h4>₹ {price}</h4>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </ProductWrapper>
  );
};

export default Product;
