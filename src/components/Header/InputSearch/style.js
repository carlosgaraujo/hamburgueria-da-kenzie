import styled from "styled-components";

export const SectionSearch = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  padding: 0 20px 0 0;
  width: 450px;

  input {
    margin-left: 10px;
    padding: 0px 0px 0px 15px;
    gap: 115px;
    border: none;
    width: 300px;
    height: 60px;
    outline: transparent;
  }

  button {
    width: 107px;
    height: 40px;
    background: #27ae60;
    border: 2px solid #27ae60;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 99%;
    padding: 0;
  }
  form {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 80vw;
  }

  input {
    height: 60px;
  }
`;
