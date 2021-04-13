import styled from 'styled-components';
import logo from '../img/logo.png';

const Screen = styled.div`
  width: 1425px;
  height: 844.781px;
  background-color: #e5e5e5;
  position: fixed;
  z-index: -1;
  border: 20px solid black;
`;

// const Logo = styled.div`
//   width: 400px;
//   height: 150px;
//   background-image: url(${logo});
//   background-repeat: no-repeat;
//   margin: 30px;
// `;

function Test() {
  const sytledLogo = {
    margin: '40px',
    width: '190px',
    height: '60px'
  }
  return (
    <>
    <Screen>
      <img src={logo} alt="" style={sytledLogo}></img>
      {/* <Logo></Logo> */}
    </Screen>
    </>
  );
}

export default Test;