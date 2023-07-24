import styled from "styled-components";

export const StyledHeader = styled.header`
  background: #f5f5f5;
  display: flex;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
  height: 80px;



  @media (max-width: 768px) {
    min-width: 100vw;
    display: flex;
    flex-direction: column;
    height: 140px;
  }

  img{
    width: 160px;
    margin-top: 14px;
  }
`;
