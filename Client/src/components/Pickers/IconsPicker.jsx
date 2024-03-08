const IconsPicker = ({close,choose}) => {
  const projectIcons = [];

  for (let i = 1; i <= 600; i++) {
    projectIcons.push(
      <button
        key={i}
        className="bg-center bg-cover bg-no-repeat h-6 w-6 rounded-full"
        onClick={() => choose(`/images/logos/projectIcon${i}.png`)}
        style={{
          backgroundImage: `url('/images/logos/projectIcon${i}.png')`,
        }}
      ></button>
    );
  }
  return (
    <div className="top-[102%] bg-white absolute drop-shadow rounded-xl p-3 min-w-[280px]">
      <div className="flex justify-between items-center">
        <span>choosing an icon</span>
        <button
          className="px-1 rounded-full text-gray-400"
          onClick={close}
        >
          close
        </button>
      </div>
      <div className="max-h-48 flex flex-wrap gap-2 overflow-scroll">
        {projectIcons}
      </div>
    </div>
  );
};

export default IconsPicker;
