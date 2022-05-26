/* Outputs PunnetSquares */
import { cross } from "d3";
import { ReactComponent as GreenPea } from "../assets/green_pea.svg";
import { ReactComponent as YellowPea } from "../assets/yellow_pea.svg";

export const Marks = ({ data, xValue, yValue }) => {
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

  console.log("newX: ", newX, "newY: ", newY);

  const newPairs = cross(newX, newY);
  console.log("newPairs: ", newPairs);
  const computedValue = (a, b) => (a + b < 2 ? 0 : 1);

  console.log("Computed Values: ", computedValue(0, 0));

  const computeCoords = (iter_val) => {
    return data[iter_val];
  };

  return newPairs.map((p, index) =>
    computedValue(p[0], p[1]) ? (
      <GreenPea
        x={computeCoords(index)[0] * 10}
        y={computeCoords(index)[1] * 10}
        width={9}
        height={9}
      />
    ) : (
      <YellowPea
        x={computeCoords(index)[0] * 10}
        y={computeCoords(index)[1] * 10}
        width={9}
        height={9}
      />
    )
  );
};
