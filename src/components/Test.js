import styled from 'styled-components';
import logo from '../img/logo.png';

const Screen = styled.div`
  width: 1425px;
  height: 844.781px;
  background-color: #e5e5e5;
  position: fixed;
  z-index: -1;
  border: 20px solid black;
  // display: flex;
  // justify-content: center;
  // align-items: center;
`;
const TopHeader = styled.div`
  width: 100%;
  height: 140px;
  background: green;
  display: flex;
  justify-content: space-between;
`;
const Body = styled.div`
  width: 100%;
  height: 704.781px;
  background: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// const Logo = styled.div`
//   width: 400px;
//   height: 150px;
//   background-image: url(${logo});
//   background-repeat: no-repeat;
//   margin: 30px;
// `;

const Container = styled.div`
  width: 1200px;
  height: 600px;
  background-color: red;
  display: grid;
  grid-template-columns: repeat(3, 400px);
  overflow-y: scroll;
  &::-webkit-scrollbar{
    display: none;
  }
`;

function Test() {
  const sytledLogo = {
    margin: '40px',
    width: '190px',
    height: '60px',
    // position: 'absolute',
  }
  const styledEx = {
    width: '50px',
    height: '50px',
    backgroundColor: 'black',
    borderRadius: '50%',
    position: 'absolute',
    right: '20px',
    bottom: '20px'
  }
  const stye = {
    display: 'flex'
  }
  const perfil = {
    width: '250px',
    height: '250px',
    backgroundColor: 'black',
    borderRadius: '50%',
  }
  const perfilBox = {
    width: '400px',
    height: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  return (
    <>
    <Screen>
      <TopHeader>
        <div style={stye}>
          <img src={logo} alt="" style={sytledLogo}></img>
          <p>Abarrotes en General</p>
        </div>
        <img src={logo} alt="" style={sytledLogo}></img>
      </TopHeader>
      <Body>
        {/* <Logo></Logo> */}
        <Container>
          <div style={perfilBox}>
            <div style={perfil}></div>
          </div>
          <div style={perfilBox}>
            <div style={perfil}></div>
          </div>
          <div style={perfilBox}>
            <div style={perfil}></div>
          </div>
          <div style={perfilBox}>
            <div style={perfil}></div>
          </div>
          <div style={perfilBox}>
            <div style={perfil}></div>
          </div>
          <div style={perfilBox}>
            <div style={perfil}></div>
          </div>
          <div style={perfilBox}>
            <div style={perfil}></div>
          </div>
          <div style={perfilBox}>
            <div style={perfil}></div>
          </div>
          <div style={perfilBox}>
            <div style={perfil}></div>
          </div>
          <div style={perfilBox}>
            <div style={perfil}></div>
          </div>
          <div style={perfilBox}>
            <div style={perfil}></div>
          </div>
          <div style={perfilBox}>
            <div style={perfil}></div>
          </div>
          <div style={perfilBox}>
            <div style={perfil}></div>
          </div>
          
          
          {/* <div style={styledEx}></div> */}
        </Container>
        <div style={styledEx}></div>
      </Body>
    </Screen>
    </>
  );
}

export default Test;