const OnDeveloping = () => {
  return (
    <div className="bg-white rounded-xl py-10 px-3">
      <div className="flex justify-center">
        <img src={`${import.meta.env.BASE_URL}picture/coding.png`} className="h-32 md:h-48"></img>
        <div className="mt-4 ml-3">
          <h1 className="text-3xl md:text-[60px] font-bold text-navtext w-fit">
            SORRY
          </h1>
          <h4 className="text-sm md:text-xl gradient-text2 w-fit">
            This page is on Developing.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default OnDeveloping;
