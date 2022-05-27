import React from "react";
import { GenotypeStyled } from "./styles/Genotype.styled";

const Genotype = ({ genotypeRatios }) => {
  console.log(genotypeRatios);
  const countOccurrences = (arr, val) =>
    arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
  const numYY = countOccurrences(genotypeRatios, "YY");
  const numYy = countOccurrences(genotypeRatios, "Yy");
  const numyy = countOccurrences(genotypeRatios, "yy");
  return (
    <GenotypeStyled>
      <div>
        <text>Genotypic Ratio</text>
      </div>
      <h3>
        {numYY} YY : {numYy} Yy : {numyy} yy
      </h3>
    </GenotypeStyled>
  );
};

export default Genotype;
