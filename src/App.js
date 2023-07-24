import styled from "styled-components";

export const StyledCardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px 0 5px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
  }
`;
