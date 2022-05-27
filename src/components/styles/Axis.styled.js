import styled from "styled-components";

export const AxisStyledRow = styled.svg`
  align-items: center;
  border: 10;
  opacity: 1;
  width: 300px;
  margin-left: 60px;
  height: 30px;

  // to implement: on hover, make text larger to make axes view more accessible
  // needs to be transformed
  &:hover {
    /* scale: 1.25 */
  }
`;

export const AxisStyledColumn = styled.svg`
  border-radius: 20px;
  border: none;
  opacity: 1;
  width: 30px;
  margin-right: 5px;
  display: flex;
  align-items: center;
  height: 130px;
`;
