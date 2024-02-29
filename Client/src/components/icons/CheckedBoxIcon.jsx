const CheckedBoxIcon = ({ className, color }) => {
  return (
    <svg
        className={className}
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="15" height="15" rx="3" fill={color} />
      <path
        d="M4 8L6 10L11 5"
        stroke="#E6E4F0"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CheckedBoxIcon;
