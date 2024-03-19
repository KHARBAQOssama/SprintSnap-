import React from "react";
import CSSIcon from "./CSSIcon";
import HTMLIcon from "./HTMLIcon";
import XMLIcon from "./XMLIcon";
import PPTIcon from "./PPTIcon";
import DOCXIcon from "./DOCXIcon";
import PDFIcon from "./PDFIcon";
import TXTIcon from "./TXTIcon";
import XSLIcon from "./XSLIcon";
const PLIcon = ({ type, className }) => {
  const color =
    type == "javascript"
      ? "#FF9908"
      : type == "javascript"
      ? "#0072FF"
      : "#EE0000";
  console.log(type, color);
  if (type == "css") {
    return <CSSIcon className={className} />;
  } else if (type == "html") {
    return <HTMLIcon className={className} />;
  } else if (type == "XML") {
    return <XMLIcon className={className} />;
  } else if (type == "ppt") {
    return <PPTIcon className={className} />;
  } else if (
    type == "vnd.openxmlformats-officedocument.wordprocessingml.document"
  ) {
    return <DOCXIcon className={className} />;
  } else if (type == "pdf") {
    return <PDFIcon className={className} />;
  } else if (type == "txt") {
    return <TXTIcon className={className} />;
  } else if (type == "vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
    return <XSLIcon className={className} />;
  } else {
    return (
      <svg
        className={className}
        viewBox="0 0 165 216"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.3">
          <path
            opacity="0.3"
            d="M139.71 49.24C134.242 49.2347 128.999 47.0609 125.132 43.1953C121.264 39.3297 119.088 34.0881 119.08 28.62V0H26.9099C19.7729 0 12.9283 2.83514 7.88171 7.88174C2.83511 12.9283 0 19.773 0 26.91V189.13C0.0105984 196.26 2.85042 203.094 7.89587 208.132C12.9413 213.17 19.7799 216 26.9099 216H137.51C144.647 216 151.491 213.165 156.538 208.118C161.585 203.072 164.42 196.227 164.42 189.09V49.24H139.71Z"
            fill={color}
          />
        </g>
        <path
          d="M164.42 49.24H139.71C134.242 49.2347 128.999 47.0609 125.132 43.1953C121.264 39.3297 119.088 34.0881 119.08 28.62V0L164.42 49.24Z"
          fill={color}
        />
        <path
          d="M67.11 154.14H64.8999C59.7999 154.14 55.7366 152.643 52.71 149.65C49.6833 146.657 48.1733 142.613 48.1799 137.52V121.2C48.1799 114.96 45.6966 111.84 40.73 111.84V104.18C45.6966 104.18 48.1799 101.06 48.1799 94.8199V78.4999C48.1799 73.3999 49.69 69.3532 52.71 66.3599C55.73 63.3666 59.7932 61.8732 64.8999 61.8799H67.11V69.5399H65.6C59.6 69.5399 56.6 72.9299 56.6 79.7099V96.4299C56.5266 102.43 54.1933 106.223 49.6 107.81V108.21C54.1 109.69 56.4333 113.383 56.6 119.29V136.29C56.6 143.07 59.6 146.46 65.6 146.46H67.11V154.14Z"
          fill={color}
        />
        <path
          d="M97.2998 154.14V146.48H98.8098C104.81 146.48 107.81 143.09 107.81 136.31V119.31C107.943 113.397 110.276 109.703 114.81 108.23V107.83C110.236 106.217 107.903 102.423 107.81 96.4499V79.7299C107.81 72.9499 104.81 69.5599 98.8098 69.5599H97.2998V61.8999H99.5199C104.62 61.8999 108.68 63.3932 111.7 66.3799C114.72 69.3666 116.233 73.4132 116.24 78.5199V94.8399C116.24 101.08 118.723 104.2 123.69 104.2V111.86C118.723 111.86 116.24 114.98 116.24 121.22V137.54C116.24 142.64 114.726 146.683 111.7 149.67C108.673 152.657 104.613 154.153 99.5199 154.16L97.2998 154.14Z"
          fill={color}
        />
        <path
          d="M81.38 86.1699C85.0417 86.1699 88.01 83.2017 88.01 79.54C88.01 75.8784 85.0417 72.9099 81.38 72.9099C77.7184 72.9099 74.75 75.8784 74.75 79.54C74.75 83.2017 77.7184 86.1699 81.38 86.1699Z"
          fill={color}
        />
        <path
          d="M81.38 114.64C85.0417 114.64 88.01 111.672 88.01 108.01C88.01 104.348 85.0417 101.38 81.38 101.38C77.7184 101.38 74.75 104.348 74.75 108.01C74.75 111.672 77.7184 114.64 81.38 114.64Z"
          fill={color}
        />
        <path
          d="M81.38 143.11C85.0417 143.11 88.01 140.142 88.01 136.48C88.01 132.818 85.0417 129.85 81.38 129.85C77.7184 129.85 74.75 132.818 74.75 136.48C74.75 140.142 77.7184 143.11 81.38 143.11Z"
          fill={color}
        />
      </svg>
    );
  }
};

export default PLIcon;
