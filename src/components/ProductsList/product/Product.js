import styled from "styled-components";

export const StyledMainList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;


  li {
    width: 250px;
    height: 346px;

    background: #ffffff;
    border: 2px solid #e0e0e0;
    border-radius: 5px;
  }

  .div__img {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    background: #f5f5f5;
    width: 100%;
    height: 150px;
  }

  img {
    margin-bottom: 40px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 10px 0 0 20px;
  }

  h3 {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #333333;
  }

  span {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #828282;
  }
  p {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;

    color: #27ae60;
  }

  button {
    padding: 0px 20px;
    gap: 10px;

    width: 106px;
    height: 40px;
    background: #27ae60;
    border: 2px solid #27ae60;
    border-radius: 8px;

    font-family: "Inter" sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
  }



  @media(max-width:768px){
    display: flex;
    flex-direction: row;
    overflow-y: auto;
    flex-wrap: nowrap;
    /* border: 1px solid red; */
    height: 360px;
    width: 99vw;
    overflow-x: auto;
    padding: 0;
  }
`;
