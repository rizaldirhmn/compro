import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./header-text.style";
import { Trans } from "react-i18next";

export const HeaderText = ({ text, i18nKey, count = 1, ...props }) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h3" className={classes.text} {...props}>
        <Trans i18nKey={i18nKey} count={count}>
          {text}
        </Trans>
      </Typography>
    </>
  );
};
