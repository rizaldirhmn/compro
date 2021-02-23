import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./description-text.style";

export const DescriptionText = ({ text, textAlignLeft = false, ...props }) => {
  const classes = useStyles();

  return (
    <>
      <Typography
        {...props}
        className={textAlignLeft ? classes.textAlignLeft : classes.text}
        color="textSecondary"
        variant="body1"
      >
        {text}
      </Typography>
    </>
  );
};
