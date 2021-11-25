import * as React from "react";

function SvgIconLocationHome(props) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.59 9l9-7 9 7v11a2 2 0 01-2 2h-14a2 2 0 01-2-2V9z"
        stroke={props.currentColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.59 22V12h6v10"
        stroke={props.currentColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgIconLocationHome;
