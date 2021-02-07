import styled from 'styled-components';

const AboutWrapper = styled.div`
  background-color: #f5f3f4;
  z-index: 1;
  padding: 0 2em 3em 2em;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    .header {
      font-size: 1.25rem;
      h1 {
        padding: 0.1em 0;
        font-size: 2.5rem;
        font-weight: 900;
        letter-spacing: -1.25px;
        background: -webkit-linear-gradient(to right, #c94b4b, #4b134f);
        background: linear-gradient(to right, #c94b4b, #4b134f);
        background-clip: unset;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
`;

const AboutScreen = () => {
  return (
    <AboutWrapper>
      <div className="content">
        <div className="header">
          <p>Created by</p> <h1>Abhinav Sharma</h1> <p>(@ABSphreak)</p>
        </div>
      </div>
    </AboutWrapper>
  );
};

export default AboutScreen;
