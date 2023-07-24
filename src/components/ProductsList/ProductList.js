import styled from "styled-components";

export const StyledProductList = styled.section`
  width: 850px;
  height: 650px;

  display: flex;
  flex-wrap: wrap;


  @media(max-width:768px){
    margin-top: 60px;
    /* border: 1px solid green; */
    max-width: 99vw;
    height: auto;
  
  }
`;
