import React from "react";

const ReactIcon = ({ size = 48, color = "#61DAFB", ...props }) => (
  <svg
    viewBox="-11.5 -10.23174 23 20.46348"
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="0" cy="0" r="2.05" fill={color} />
    <g stroke={color} strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

export default ReactIcon;