import styled from "styled-components";

export const StyledCart = styled.section`
  .div__cart {

    margin-top: 19px;
    display: flex;
    align-items: center;
    width: 450px;
    /* width: 100%; */
    height: 65px;
    background: #27ae60;
    border-radius: 5px 5px 0px 0px;
  }
  .div__cart--title {
    padding-left: 20px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
  }

  ul {
    padding-top: 25px;
    background: #f5f5f5;
    display: flex;
    flex-direction: column;
    gap: 10px;

  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
  }

  .itens__container {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .div__img {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e0e0e0;
    border-radius: 5px;
    width: 80px;
    height: 80px;
  }
  img {
    width: 70px;
  }

  .div__itens {
    display: flex;
    flex-direction: column;
  }

  .cart__empty {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 450px;
    height: 158px;
    background: #f5f5f5;
    border-radius: 0px 0px 5px 5px;
  }

  h3 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;

    color: #333333;
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #828282;
  }

  .remover {
    background-color: transparent;
    border: transparent;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #bdbdbd;
  }

  .noItens {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #333333;
  }
  .addItens {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: #828282;
  }

  @media (max-width: 768px) {
    margin: auto;

    .div__cart {
      width: 90vw;
    }

    ul {
      width: 90vw;
      padding: 0;
    }
    .cart__empty {
      width: 90vw;
    }
  }
`;
