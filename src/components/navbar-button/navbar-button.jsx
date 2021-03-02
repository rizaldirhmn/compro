import { Button } from "@material-ui/core";
import React from "react";
import useStyles from "./navbar-button.style";
import { Icon } from "@iconify/react";
import englishIcon from "@iconify-icons/cif/gb";
import idIcon from "@iconify-icons/cif/id";

export const NavbarButton = ({ condition, ...props }) => {
  const classes = useStyles();
  return (
    <Button
      {...props}
      className={condition ? classes.buttonActive : classes.button}
      disableElevation={true}
    >
      {props.lang === "en" ? (
        <Icon
          icon={englishIcon}
          style={{ margin: "0 auto" }}
          width="2.5em"
          height="2em"
        />
      ) : (
        <Icon
          icon={idIcon}
          style={{ margin: "0 auto" }}
          width="2.5em"
          height="2em"
        />
      )}
    </Button>
  );
};
