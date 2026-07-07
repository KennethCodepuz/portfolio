import React from "react";

const Html5Icon = ({ size = 48, color = "#E34F26", accentColor = "#EF652A", ...props }) => (
  <svg
    viewBox="0 0 512 512"
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill={color}
      d="M71 460L30 0h451l-41 460-185 52"
    />
    <path
      fill={accentColor}
      d="M256 472l149-41 35-394H256"
    />
    <path
      fill="#EBEBEB"
      d="M256 208h-75l-5-58h80v-56H114l15 171h127zM256 355l-63-17-4-45h-56l7 89 116 32z"
    />
    <path
      fill="#FFFFFF"
      d="M256 208v57h70l-7 74-63 17v58l116-32 16-171zM256 94v56h140l5-56z"
    />
  </svg>
);

export default Html5Icon;