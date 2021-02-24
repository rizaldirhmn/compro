import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./description-text.style";
import { Trans } from "react-i18next";

export const DescriptionText = ({
  text,
  textAlignLeft = false,
  i18nKey,
  count = 1,
  ...props
}) => {
  const classes = useStyles();

  const { className } = props;

  return (
    <>
      <Typography
        {...props}
        className={
          className
            ? className
            : textAlignLeft
            ? classes.textAlignLeft
            : classes.text
        }
        color="textSecondary"
        variant="body1"
      >
        <Trans i18nKey={i18nKey} count={count}>
          {text}
        </Trans>
      </Typography>
    </>
  );
};
