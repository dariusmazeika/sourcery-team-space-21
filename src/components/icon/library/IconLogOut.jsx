import * as React from "react";

function SvgIconLogOut(props) {
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
        d="M9.59 21h-4a2 2 0 01-2-2V5a2 2 0 012-2h4M16.59 17l5-5-5-5M21.59 12h-12"
        stroke={props.currentColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgIconLogOut;
