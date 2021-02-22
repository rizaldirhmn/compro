import React from "react";

export const TextHeader = ({ text, ...props }) => {
  return (
    <>
      <Typography {...props}>{text}</Typography>
    </>
  );
};
