import { Button } from "@material-ui/core";
import React from "react";
import useStyles from "./navbar-button.style";
import { Icon } from "@iconify/react";
import uiEarthEast from "@iconify-icons/geo/ui-earth-east";
import uiEarthWest from "@iconify-icons/geo/ui-earth-west";
import { Trans } from "react-i18next";

export const NavbarButton = ({ text, condition, i18nKey, ...props }) => {
  const classes = useStyles();
  return (
    <Button
      {...props}
      startIcon={
        text === "English" ? (
          <Icon icon={uiEarthWest} />
        ) : (
          <Icon icon={uiEarthEast} />
        )
      }
      className={condition ? classes.containedButton : classes.outlinedButton}
      disableElevation={true}
    >
      <Trans i18nKey={i18nKey} count={1}>
        {text}
      </Trans>
    </Button>
  );
};
