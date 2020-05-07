import React from "react";
import { a } from "react-spring";
import { Icon } from "@gz-studio/components";
import ArrowIcon from "../../../static/icons/keyboard_arrow_down-black-48dp.svg";

const AnimIcon = a(Icon);

export const NavIcon = ({ style, open, setOpen }) => {
  return (
    <AnimIcon style={style} height="L" width="L" onClick={() => setOpen(!open)}>
      <ArrowIcon />
    </AnimIcon>
  );
};
