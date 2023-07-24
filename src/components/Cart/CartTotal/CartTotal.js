import styled from "styled-components";

export const StyledCartTotal = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 0px 0px;
  gap: 16px;

  width: 343px;
  height: 122px;

  .cart__total {
    border-top: 2px solid #E0E0E0;
    gap: 20px;
    display: flex;
    flex-direction: column;
    width: 450px;
    height: 200px;
    padding: 20px 20px 0 20px;
    background: #f5f5f5;
  }

  .subtotal {
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    margin: 0;
    background: #f5f5f5;
  }

  .total {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #333333;
  }

  .price {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #828282;
  }
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    gap: 10px;
    margin-bottom: 10px;
    /* width: 430px; */
    height: 60px;

    background: #e0e0e0;
    border: 2px solid #e0e0e0;
    border-radius: 8px;

    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    color: #828282;
  }



  @media(max-width:768px){
    .cart__total{
      width: 90vw;
    }

  }
`;
