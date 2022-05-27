import * as d3 from "d3";
import { XYPlot, VerticalBarSeries, XAxis, YAxis } from "react-vis";
import { StyledChart } from "./styles/Chart.styled";

export const Chart = ({ xValue, yValue }) => {
  const mapping = {
    YY: [0, 0],
    Yy: [0, 1],
    yy: [1, 1],
    yY: [1, 0],
  };

  const convertValues = (val) => {
    return mapping[val];
  };

  const newX = convertValues(xValue);
  const newY = convertValues(yValue);

  const newPairs = d3.cross(newX, newY);
  const computedValuePhenotype = (a, b) => (a + b < 2 ? "yellow" : "green");

  const phenotypes = newPairs.map((pair) =>
    computedValuePhenotype(pair[0], pair[1])
  );

  const countOccurrences = (arr, val) =>
    arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
  const numYellow = countOccurrences(phenotypes, "yellow");
  const numGreen = countOccurrences(phenotypes, "green");

  const data = [
    { color: 1, x: "Yellow", y: numYellow },
    { color: 2, x: "Green", y: numGreen },
  ];

  return (
    <>
      <StyledChart>
        <XYPlot
          colorRange={["#efce22", "#65b14f"]}
          colorScale="category"
          height={200}
          yDomain={[0, 4]}
          width={350}
          xType="ordinal"
        >
          <XAxis attr="x" attrAxis="y" orientation="bottom" />
          <YAxis attr="y" attrAxis="x" orientation="left" />
          <VerticalBarSeries data={data} style={{}} />
        </XYPlot>
      </StyledChart>
    </>
  );
};
