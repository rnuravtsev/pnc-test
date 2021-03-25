import styled from "styled-components";
import Header from "../header/header";
import Main from "../main/main";
import Footer from "../footer/footer";

const StyledGridContainer = styled.div`
  display: grid;
  grid-template-areas: 
  'header'
  'main'
  'footer';
  min-height: 100vh;
  grid-template-rows: 80px 1fr 80px;
`;

const BaseLayout = () => {
  return (
      <StyledGridContainer>
        <Header />
        <Main/>
        <Footer/>
      </StyledGridContainer>
  );
};

export default BaseLayout;
