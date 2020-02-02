import React from "react";

const NetworkCell = props => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path fill-opacity=".3" d="M2 22h20V2z" />
      <path d="M17 7L2 22h15z" />
    </svg>
  );
};

export default NetworkCell;
