import React from "react";
import aboutUsData from "../../../constants/data/aboutus.json";
import Card from "../../../components/Card";
import Header from "../../../components/Layout/Header";

const DetailSection: React.FC<{
  details: { text: string; style: string }[];
}> = ({ details }) => (
  <p className="mt-4">
    {details.map((item, index) => (
      <span
        key={index}
        className={
          item.style === "highlight"
            ? "font-bold text-color10" // Highlighted text
            : "text-black font-light" // Normal text
        }
      >
        {item.text}
      </span>
    ))}
  </p>
);

const Title2: React.FC<{ title2: { text: string; style: string }[] }> = ({
  title2,
}) => (
  <p className="mb-6 mt-8">
    {title2.map((item, index) => (
      <span
        key={index}
        className={
          item.style === "underline"
            ? "text-navtext font-bold underline decoration-gradient"
            : "text-navtext text-start w-full font-bold"
        }
      >
        {item.text}
      </span>
    ))}
  </p>
);

const AboutUs: React.FC = () => {
  const { title2, details, details2, details3, details4 } = aboutUsData;

  return (
    <div className="mt-10">
      {/* Title */}
      <Header header="ABOUT US" topic="ABOUT PROJECT FIREFLY" />
      {/* Details */}
      <DetailSection details={details} />
      <DetailSection details={details2} />
      <DetailSection details={details3} />
      <DetailSection details={details4} />
      <div>
        <Title2 title2={title2} />
        <Card />
      </div>
      <img
        src={`${import.meta.env.BASE_URL}cardimage/FIREfly Overview 2.png`}
        alt="overview"
        className="w-full h-auto mt-8 mb-12 flex justify-center items-center flex-wrap"
      />
    </div>
  );
};

export default AboutUs;
