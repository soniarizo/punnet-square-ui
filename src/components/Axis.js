import { AxisStyledColumn, AxisStyledRow } from "./styles/Axis.styled";

export const AxisRow = ({ orientation, xValue }) => {
  const labelList = (
    <>
      <AxisStyledRow>
        <text x="0" y="15" fontSizeAdjust={50} fill="black">
          {xValue[0]}
        </text>
        <text x="120" y="15" fill="black">
          {xValue[1]}
        </text>
      </AxisStyledRow>
    </>
  );
  return <>{labelList}</>;
};

export const AxisColumn = ({ orientation, yValue }) => {
  const labelList = (
    <>
      <AxisStyledColumn>
        <text x="2" y="65" fill="black">
          {yValue[0]}
        </text>
      </AxisStyledColumn>
      <AxisStyledColumn>
        <text x="2" y="65" fill="black">
          {yValue[1]}
        </text>
      </AxisStyledColumn>
    </>
  );
  return <>{labelList}</>;
};
