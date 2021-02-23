import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./subtitle-text.style";

export const SubtitleText = ({ text, ...props }) => {
  const classes = useStyles();
  return (
    <>
      <Typography
        {...props}
        variant="subtitle1"
        color="textSecondary"
        className={classes.text}
      >
        {text}
      </Typography>
    </>
  );
};
