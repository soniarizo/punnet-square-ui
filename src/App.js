import "./App.css";
import { useState } from "react";
import { format, cross } from "d3";
import { PunnetSquare } from "./components/PunnetSquare";
import Buttons from "./components/Buttons";
import { Container } from "./components/styles/Container.styled";
import { Header } from "./components/Header";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import { Grid } from "@mui/material";
import { Chart } from "./components/Chart";
import Genotype from "./components/Genotype";

const theme = {
  colors: {
    header: "aliceblue",
    body: "#ffff",
  },
  mobile: "768px",
};

const App = () => {
  const mapping = {
    YY: [0, 0],
    Yy: [0, 1],
    yy: [1, 1],
    yY: [1, 0],
  };

  const convertValues = (val) => {
    return mapping[val];
  };

  const initialXAttribute = "YY";
  const [xAttribute, setXAttribute] = useState(initialXAttribute);

  const initialYAttribute = "YY";
  const [yAttribute, setYAttribute] = useState(initialYAttribute);

  const PrintButtonLabel = (label) => {
    setXAttribute(label);
  };

  const PrintButtonLabelY = (label) => {
    setYAttribute(label);
  };

  const newX = convertValues(xAttribute);
  const newY = convertValues(yAttribute);

  const newPairs = cross(newX, newY);
  const computedValue = (a, b) => (a + b < 2 ? 0 : 1);

  const computedValueGenotype = (a, b) =>
    a + b === 1 ? "Yy" : a + b === 2 ? "yy" : "YY";
  const genotypes = newPairs.map((pair) =>
    computedValueGenotype(pair[0], pair[1])
  );

  const data = cross([0, 1], [0, 1]);

  const siFormat = format(".2s");
  const xAxisTickFormat = (tickValue) => siFormat(tickValue).replace("G", "B");

  const gridStylesPunnetSquare = {
    backgroundColor: "white",
    paddingBottom: 2,
    paddingRight: 1,
    paddingLeft: 0,
    paddingTop: 5,
    marginTop: 2,
    height: 400,
    marginLeft: 0,
    maxWidth: 200,
  };
  const gridStyles = {
    backgroundColor: "white",
    paddingBottom: 2,
    paddingRight: 1,
    paddingLeft: 0,
    paddingTop: 5,
    marginTop: 2,
    height: 400,
    width: 300,
    marginLeft: 0,
    maxWidth: 150,
  };
  const gridStylesRow1 = {
    backgroundColor: "white",
    paddingBottom: 5,
    paddingRight: 1,
    paddingLeft: 0,
    height: 150,
    width: 200,
    marginLeft: 0,
    maxWidth: 400,
  };
  const gridStylesChart = {
    backgroundColor: "white",
    marginTop: 10,
    paddingTop: 5,
    paddingRight: 1,
    paddingLeft: 0,
    height: 100,
    width: 100,
    marginLeft: 0,
    maxWidth: 400,
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <Grid container rowSpacing={1} columnSpacing={1}>
            <Grid container lg={6} md={7} s={7} xs={12}>
              <Grid item xs={12} lg={12}>
                <h3>Select two pea plant genotypes to cross.</h3>
              </Grid>
              <Grid item xs={1} sm={1} m={1} lg={2}>
                <p></p>
              </Grid>
              <Grid item sx={gridStylesRow1} xs={9} sm={9} md={9} lg={9}>
                <Buttons
                  buttons={["YY", "Yy", "yy"]}
                  doSomethingAfterClick={PrintButtonLabel}
                  orientation={"horizontal"}
                />
              </Grid>
              <Grid item sx={gridStyles} xs={1} sm={2} md={3} lg={3}>
                <Buttons
                  buttons={["YY", "Yy", "yy"]}
                  doSomethingAfterClick={PrintButtonLabelY}
                  orientation={"vertical"}
                />{" "}
              </Grid>
              <Grid
                item
                sx={gridStylesPunnetSquare}
                xs={8}
                sm={5}
                md={5}
                lg={5}
              >
                <PunnetSquare
                  data={data}
                  xValue={xAttribute}
                  yValue={yAttribute}
                  tooltipFormat={xAxisTickFormat}
                  newPairs={newPairs}
                  computedValue={computedValue}
                />
              </Grid>
            </Grid>
            <Grid container xs={10} sm={4} md={4} lg={6}>
              <Grid sx={gridStylesChart} item xs={12} sm={12} md={12} lg={12}>
                <text>Phenotypic Ratio</text>
              </Grid>
              <Grid item xs={12} sm={10} md={10} lg={10}>
                <Chart xValue={xAttribute} yValue={yAttribute} />
              </Grid>
              <Grid item xs={12} lg={10}>
                <Genotype genotypeRatios={genotypes} />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </>
    </ThemeProvider>
  );
};

export default App;
