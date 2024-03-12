const ProgressIcon = ({ className,color }) => {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5715 10.5941L17.4266 4.72014C17.7929 4.35183 18 3.84877 18 3.32376V1.60099C18 0.520023 17.1423 0 16.0844 0H1.91556C0.857655 0 0 0.520023 0 1.60099V3.3547C0 3.85177 0.18462 4.33087 0.517719 4.69419L5.89711 10.5632C5.9987 10.674 6.14034 10.7368 6.28979 10.7378L11.1915 10.7518C11.3332 10.7528 11.4699 10.6969 11.5715 10.5941Z"
        fill={color || '#5577FF'}
      />
      <path
        opacity="0.4"
        d="M6.05634 10.6857V17.2903C6.05634 17.5309 6.17746 17.7575 6.37576 17.8872C6.48907 17.9621 6.61996 18 6.75086 18C6.84952 18 6.94818 17.979 7.04 17.9371L11.0059 16.0886C11.254 15.9738 11.4133 15.7213 11.4133 15.4428V10.6857H6.05634Z"
        fill={color || '#5577FF'}
      />
    </svg>
  );
};

export default ProgressIcon;