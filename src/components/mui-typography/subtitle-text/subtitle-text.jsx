import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./subtitle-text.style";
import { Trans } from "react-i18next";

export const SubtitleText = ({ text, i18nKey, count = 1, ...props }) => {
  const classes = useStyles();
  return (
    <>
      <Typography
        {...props}
        variant="subtitle1"
        color="textSecondary"
        className={classes.text}
      >
        <Trans i18nKey={i18nKey} count={count}>
          {text}
        </Trans>
      </Typography>
    </>
  );
};
