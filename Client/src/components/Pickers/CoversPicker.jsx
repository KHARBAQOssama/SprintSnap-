const CoversPicker = ({ close, choose }) => {
  const covers = [];

  for (let i = 1; i <= 100; i++) {
    covers.push(
      <button
        key={i}
        className="bg-center bg-cover bg-no-repeat min-h-[60px] rounded-xl"
        onClick={() => choose(`/images/Gradients/projectCover${i}.jpg`)}
        style={{
          backgroundImage: `url('/images/Gradients/projectCover${i}.jpg')`,
        }}
      ></button>
    );
  }
  return (
    <div className="bg-white drop-shadow rounded-lg min-w-[240px] z-50 p-3 absolute top-3 right-3 flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <span>choosing a cover</span>
        <button className="px-1 rounded-full text-gray-400" onClick={close}>
          close
        </button>
      </div>
      <div className="flex flex-col max-h-[160px] overflow-scroll gap-2">
        {covers}
      </div>
    </div>
  );
};

export default CoversPicker;
