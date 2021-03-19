import { Button } from "@material-ui/core";
import React from "react";
import useStyles from "./primary-button.style";
import { Trans } from "react-i18next";
import { useHistory } from "react-router";

const stylingButton = (type, classes) => {
  switch (type) {
    case "detailProjectButton":
      return classes.detailProjectButton;

    case "projectButton":
      return classes.button;

    default:
      return classes;
  }
};

export const PrimaryButton = ({
  text,
  id,
  endIcon,
  i18nKey,
  count = 1,
  ...props
}) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Button
      {...props}
      className={stylingButton(props.type, classes)}
      size="small"
      disableElevation={true}
      endIcon={endIcon}
    >
      <Trans i18nKey={i18nKey} count={count}>
        {text}
      </Trans>
    </Button>
  );
};
