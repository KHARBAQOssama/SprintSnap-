import React from "react";

const ClipIcon = ({ className, color }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 508.107 508.107"
      // style="enable-background:new 0 0 508.107 508.107;"
      xmlSpace="preserve"
    >
      <g>
        <path
          fill={color ? color : "#9896A3"}
          d="M226.115,508.106c-51.379,0.067-100.736-20.016-137.472-55.936c-76.869-79.88-75.368-206.677,3.371-284.715l123.52-123.499   C266.003-7.965,347.03-14.72,405.4,28.128c62.185,47.742,73.893,136.855,26.151,199.04c-3.729,4.857-7.768,9.468-12.092,13.803   L290.2,370.229c-14.547,15.21-33.853,24.994-54.72,27.733c-28.285,3.099-56.286-7.899-74.901-29.419   c-28.539-36.559-25.488-88.624,7.125-121.6l98.539-98.453c12.496-12.492,32.752-12.492,45.248,0l0,0   c12.492,12.496,12.492,32.752,0,45.248L209.923,295.328c-8.937,8.943-8.932,23.437,0.011,32.373s23.437,8.932,32.373-0.011   L372.739,197.28c26.777-26.037,31.729-67.24,11.883-98.88c-23.436-36.1-71.699-46.367-107.799-22.931   c-4.52,2.934-8.723,6.329-12.543,10.131L135.555,214.432C86.9,261.676,80.579,337.582,120.75,392.224   c44.681,58.192,128.077,69.144,186.268,24.463c4.547-3.491,8.863-7.273,12.921-11.322l101.589-101.568   c12.496-12.492,32.752-12.492,45.248,0l0,0c12.492,12.496,12.492,32.752,0,45.248L365.187,450.613   C328.326,487.519,278.276,508.21,226.115,508.106z"
        />
      </g>
    </svg>
  );
};

export default ClipIcon;