import "./App.css";
import { useState } from "react";
import { format, cross } from "d3";
import { Marks } from "./components/PunnetSquare";
import Buttons from "./components/Buttons";

const width = 960;
const menuHeight = 75;
const height = 500 - menuHeight;
const margin = { top: 20, right: 30, bottom: 15, left: 20 };
const xAxisLabelOffset = 50;
const yAxisLabelOffset = 45;

const attributes = [
  {
    value: "YY",
    label: "YY",
    xParent: "Y",
    yParent: "Y",
    xParentVal: 0,
    yParentVal: 0,
  },
  {
    value: "Yy",
    label: "Yy",
    xParent: "Y",
    yParent: "y",
    xParentVal: 1,
    yParentVal: 0,
  },
  {
    value: "yy",
    label: "yy",
    xParent: "y",
    yParent: "y",
    xParentVal: 1,
    yParentVal: 1,
  },
];

const getLabel = (value) => {
  for (let i = 0; i < attributes.length; i++) {
    if (attributes[i].value === value) {
      return attributes[i].label;
    }
  }
};
const mapping = {
  YY: [0, 0],
  Yy: [1, 0],
  yy: [1, 1],
};

const App = () => {
  const initialXAttribute = "YY";
  const [xAttribute, setXAttribute] = useState(initialXAttribute);
  const xValue = xAttribute;

  const initialYAttribute = "YY";
  const [yAttribute, setYAttribute] = useState(initialYAttribute);
  const yValue = yAttribute;

  const PrintButtonLabel = (name) => {
    console.log("Event target: ", name);
    setXAttribute(name);
  };

  const PrintButtonLabelY = (name) => {
    console.log("Event target: ", name);
    setYAttribute(name);
  };

  const data = cross([0, 1], [0, 1]);

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;
  const siFormat = format(".2s");
  const xAxisTickFormat = (tickValue) => siFormat(tickValue).replace("G", "B");

  return (
    <>
      <Buttons
        buttons={["YY", "Yy", "yy"]}
        doSomethingAfterClick={PrintButtonLabel}
      />
      <Buttons
        buttons={["YY", "Yy", "yy"]}
        doSomethingAfterClick={PrintButtonLabelY}
      />

      <svg width={600} height={600} viewBox="0 0 50 50">
        <g transform={`translate(${margin.left},${margin.bottom})`}>
          <Marks
            data={data}
            xValue={xAttribute}
            yValue={yAttribute}
            tooltipFormat={xAxisTickFormat}
          />
        </g>
      </svg>
    </>
  );
};

export default App;
