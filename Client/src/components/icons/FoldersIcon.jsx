const FoldersIcon = ({ color, className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width="512"
      height="512"
      fill={color || "#9896A3"}
    >
      <path d="M13,11h8c1.654,0,3-1.346,3-3v-3c0-1.654-1.346-3-3-3h-2.586l-1.414-1.414c-.378-.378-.88-.586-1.414-.586h-2.586c-1.654,0-3,1.346-3,3v2H2V1c0-.553-.448-1-1-1S0,.447,0,1V15c0,2.757,2.243,5,5,5h5v1c0,1.654,1.346,3,3,3h8c1.654,0,3-1.346,3-3v-3c0-1.654-1.346-3-3-3h-2.586l-1.414-1.414c-.378-.378-.88-.586-1.414-.586h-2.586c-1.654,0-3,1.346-3,3v2H5c-1.654,0-3-1.346-3-3V7H10v1c0,1.654,1.346,3,3,3Zm-1,5c0-.552,.449-1,1-1h2.586l1.414,1.414c.378,.378,.88,.586,1.414,.586h2.586c.551,0,1,.448,1,1v3c0,.552-.449,1-1,1H13c-.551,0-1-.448-1-1v-5Zm0-13c0-.552,.449-1,1-1h2.586l1.414,1.414c.378,.378,.88,.586,1.414,.586h2.586c.551,0,1,.448,1,1v3c0,.552-.449,1-1,1H13c-.551,0-1-.448-1-1V3Z" />
    </svg>
  );
};

export default FoldersIcon;
