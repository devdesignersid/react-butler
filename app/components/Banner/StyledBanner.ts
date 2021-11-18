import styled from '@emotion/styled';

const StyledBanner = styled.div`
  background-color: #161a1a;
  color: #d5cfcc;
  padding: 12px 24px;
  width: 512px;
  border-radius: 4px;
  border: 1px solid #5e504b;
  font-size: 12px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 30%;
  & > h1 {
    font-weight: normal;
    font-family: 'RobotoItalic', sans-serif;
  }
  & > p {
    font-family: 'Roboto', serif;
    font-weight: 300;
    font-size: 16px;
  }
`;

export default StyledBanner;
