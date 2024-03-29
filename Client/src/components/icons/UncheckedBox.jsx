const UncheckedBox = ({ className, color }) => {
  return (
    <svg
      className={className}
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="13"
        height="13"
        rx="2"
        stroke={color || "#5577FF"}
        strokeWidth="2"
      />
    </svg>
  );
};

export default UncheckedBox;
