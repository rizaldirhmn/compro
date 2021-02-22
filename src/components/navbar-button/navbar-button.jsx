import { Button } from "@material-ui/core";
import React from "react";
import useStyles from "./navbar-button.style";
import { Icon } from "@iconify/react";
import uiEarthEast from "@iconify-icons/geo/ui-earth-east";

export const NavbarButton = ({ text, ...props }) => {
  const classes = useStyles();
  return (
    <Button
      {...props}
      startIcon={<Icon icon={uiEarthEast} />}
      className={
        props.variant === "contained"
          ? classes.containedButton
          : classes.outlinedButton
      }
      disableElevation={true}
    >
      {text}
    </Button>
  );
};
