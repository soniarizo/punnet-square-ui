import { useState } from "react";
import { ReactComponent as GreenPea } from "../assets/green_pea.svg";
import { ReactComponent as YellowPea } from "../assets/yellow_pea.svg";
import { Button } from "./styles/Button.styled";

import ButtonGroup from "@mui/material/ButtonGroup";

const Buttons = ({ buttons, doSomethingAfterClick, orientation }) => {
  const [clickedId, setClickedId] = useState(null);

  const handleClick = (buttonName, id) => {
    setClickedId(id);
    doSomethingAfterClick(buttonName);
  };

  const buttonList = buttons.map((buttonLabel, i) => (
    <Button color={i === clickedId ? "gray" : "white"}>
      <button
        key={i}
        name={buttonLabel}
        id={buttonLabel}
        onClick={() => handleClick(buttonLabel, i)}
      >
        {buttonLabel === "yy" ? <GreenPea /> : <YellowPea />}
        <div>{buttonLabel}</div>
      </button>
    </Button>
  ));

  return <ButtonGroup orientation={orientation}>{buttonList}</ButtonGroup>;
};

export default Buttons;
