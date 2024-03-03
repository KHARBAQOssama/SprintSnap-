const Logo = ({ containerClass, classItems, full }) => {
  return (
    <div className={`${containerClass} flex w-max gap-2 items-center`}>
      <img
        className={`${classItems} w-max`}
        src="/images/logo.png"
        alt="Sprint-Snap-Logo"
      ></img>
      {full && (
        <h1 className="text-[150%] w-max text-black font-semibold dark:text-gray-100">
          SprintSnap
        </h1>
      )}
    </div>
  );
};

export default Logo;
