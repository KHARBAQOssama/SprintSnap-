const Logo = ({ containerClass, classItems }) => {
  return (
    <div className={`${containerClass} flex w-max gap-2 items-center`}>
      <img
        className={`${classItems} w-max`}
        src="/images/logo.png"
        alt="Sprint-Snap-Logo"
      ></img>
    </div>
  );
};

export default Logo;
