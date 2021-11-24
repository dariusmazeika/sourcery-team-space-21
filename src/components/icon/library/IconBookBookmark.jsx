import * as React from "react";

function SvgIconBookBookmark(props) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 17 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.59 19l-7-5-7 5V3a2 2 0 012-2h10a2 2 0 012 2v16z"
        stroke={props.currentColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgIconBookBookmark;
