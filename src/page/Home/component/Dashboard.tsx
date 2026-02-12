import React from "react";
import dashboardData from "../../../constants/data/dashboard.json";
import Header from "../../../components/Layout/Header";

const Dashboard: React.FC = () => {
  const { title, header, view, details } = dashboardData;

  return (
    <div>
      <Header header={title} topic={header} />
      <div className="relative rounded-lg bg-dashboard-gradient bg-opacity-80">
        <div
          style={{
            backgroundImage: "url('/picture/dashboard/dashboard-cover.png')",
          }}
          className="rounded-lg bg-cover bg-center bg-no-repeat overflow-hidden"
        >
          <img
            src={`${import.meta.env.BASE_URL}picture/dashboard/dashboard-pin-decor.png`}
            className="absolute bottom-0 right-0 hidden lg:block"
          ></img>
          <div className="py-10 px-5 lg:px-5 lg:py-20 lg:flex justify-center gap-5">
            <p className="text-white text-xs md:text-base lg:w-3/5">
              {details}
            </p>
            <button
              className={`mt-5 px-6 py-3 lg:px-10 lg:py-4 bg-black border-2 border-white bg-opacity-10 font-semibold 
                rounded-full shadow-lg transition duration-300 hover:bg-opacity-30 w-fit h-fit my-auto`}
            >
              <p className="text-white text-xs md:text-base">{view}</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
