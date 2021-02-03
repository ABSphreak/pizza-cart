import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: linear-gradient(to right, #141e30, #243b55);
  color: white;
  display: flex;
  justify-content: center;
  padding: 25px 0;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>Copyright &copy;2021 Pizza Cart. All rights reserved.</p>
    </FooterWrapper>
  );
};

export default Footer;
