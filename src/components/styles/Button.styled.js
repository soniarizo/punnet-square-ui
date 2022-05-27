import styled from "styled-components";

export const Button = styled.button`
  border-radius: 20px;
  cursor: pointer;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 3px 3px;
  opacity: 1;
  margin-left: 10px;
  margin-top: 20px;
  background-color: ${({ color }) => color || "#fff"};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }

  & > button {
    cursor: pointer;
    border: none;
    background-color: rgba(51, 170, 51, 0);
  }
`;
