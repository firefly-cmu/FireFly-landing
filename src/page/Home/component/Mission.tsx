import MissionData from "../../../constants/data/mission.json";
import { asset } from "../../../utils/asset";

interface Mission {
  title: string;
  subtitle: string;
}

const Mission = () => {
  const data: Mission = MissionData;
  const decorationPath = "picture/landing-decor/";
  return (
    <div className="relative w-full h-auto bg-color3 flex flex-col items-center px-6 py-12">
      <div className="max-w-4xl text-center mt-2">
        {/* Quotation Marks */}
        <div className="relative px-4 hidden lg:block">
          <img
            src={asset(decorationPath + "left-quote.png")}
            alt="Quote Left"
            className="absolute left-[-20px] md:left-[-50px] lg:left-[-150px] top-0"
          />
          <img
            src={asset(decorationPath + "right-quote.png")}
            alt="Quote Right"
            className="absolute right-[-20px] md:right-[-50px] lg:right-[-150px] top-0"
          />
        </div>
        <p className="gradient-text z-10 font-semibold text-base md:text-xl lg:text-2xl">
          {data.title}
        </p>
        {/* Supporting Text */}
        <div className="text-white flex justify-center mt-4 px-2 text-xs md:text-sm lg:text-lg">
          {data.subtitle}
        </div>
      </div>

      {/* Trees Illustration */}
      <div className="flex justify-between w-full max-w-8xl absolute bottom-0 left-0 right-0 gap-4">
        <img
          src={asset(decorationPath + "tree1.png")}
          alt="Left Trees"
          className="h-12 lg:h-16 w-auto  "
        />
        <img
          src={asset(decorationPath + "tree2.png")}
          alt="Right Trees"
          className="h-12 lg:h-16 w-auto"
        />
      </div>
    </div>
  );
};

export default Mission;
