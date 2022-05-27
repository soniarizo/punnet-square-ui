import styled from "styled-components";

export const Container = styled.div`
  margin-left: 10%;
  display: flex;
  width: 90%;
  margin-bottom: 10%;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
  }
`;
