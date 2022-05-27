// Renders Punnet Squares and Axes Labels
import { ReactComponent as GreenPea } from "../assets/green_pea.svg";
import { ReactComponent as YellowPea } from "../assets/yellow_pea.svg";
import { StyledPunnetSquare } from "./styles/PunnetSquare.styled";
import { Grid } from "@mui/material";
import { AxisRow, AxisColumn } from "./Axis";

export const PunnetSquare = ({
  data,
  xValue,
  yValue,
  newPairs,
  computedValue,
}) => {
  const computeCoords = (iter_val) => {
    return data[iter_val];
  };

  return (
    <>
      <Grid container justifyContent={"right"}>
        <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
        <Grid item xs={11} sm={11} md={11}>
          <AxisRow orientation={"row"} xValue={xValue} />
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
          <AxisColumn
            justifyContent={"left"}
            orientation={"column"}
            yValue={yValue}
          />
        </Grid>
        <Grid item xs={11} sm={11} md={11}>
          <StyledPunnetSquare>
            {newPairs.map((p, index) =>
              computedValue(p[0], p[1]) ? (
                <GreenPea
                  x={computeCoords(index)[0] * 130 + 20}
                  y={computeCoords(index)[1] * 130 + 30}
                  width={100}
                  height={100}
                />
              ) : (
                <YellowPea
                  x={computeCoords(index)[0] * 130 + 20}
                  y={computeCoords(index)[1] * 130 + 30}
                  width={100}
                  height={100}
                />
              )
            )}
          </StyledPunnetSquare>
        </Grid>
      </Grid>
    </>
  );
};
