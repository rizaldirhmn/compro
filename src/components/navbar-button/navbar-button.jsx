import { Button } from "@material-ui/core";
import React from "react";
import useStyles from "./navbar-button.style";
import { Icon } from "@iconify/react";
import englishIcon from "../../assets/icons/great-britain.svg";
import indonesianIcon from "../../assets/icons/indonesia.svg";

export const NavbarButton = ({ condition, ...props }) => {
  const classes = useStyles();
  return (
    <Button
      {...props}
      className={condition ? classes.buttonActive : classes.button}
      disableElevation={true}
    >
      {props.lang === "en" ? (
        <img src={englishIcon} alt="icons" className={classes.icon} />
      ) : (
        <img src={indonesianIcon} alt="icons" className={classes.icon} />
      )}
    </Button>
  );
};
