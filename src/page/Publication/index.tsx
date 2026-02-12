import { Layout, MarginContainer } from "../../components/Layout/Layout";
import { MarginGradientBox } from "../../components/Layout/Box";
import Header from "../../components/Layout/Header";
import { asset } from "../../utils/asset";

import { OpenInBrowser, Article } from "@mui/icons-material";
const Publications = () => {
  const PublicationDescribe = `Explore our latest research and findings in the field of forest fire detection and aerial robotics. 
                                Our publications highlight the methods and technologies developed through Project FireFly, showcasing our contributions to 
                                improving wildfire monitoring and response.`;
  const Publications = [
    {
      picture: asset("picture/publication/UAV.png"),
      topic:
        "FireFly Project: UAV Development for Distributed Sensing of Forest Fires",
      describe: `Puttapirat, P.,Woradit, K.,Hesse, H.andBhatia, D.(2024)FireFly Project: UAV Development for 
                Distributed Sensing of Forest Fires.In: 2024 International Conference on Unmanned Aircraft Systems (ICUAS), 
                Chania - Crete, Greece, 04-07 Jun 2024, pp. 594-601. `,
      source: "10.1109/ICUAS60882.2024.10556892",
      path: "https://ieeexplore.ieee.org/document/10556892",
    },
    {
      picture: asset("picture/publication/monitoring.png"),
      topic:
        "FIREfly Project: Forest Fire Monitoring and Prediction Using Machine Learning.",
      describe: `Ong, S., Ang, H., Lian, E., Tan, T., Tan, K., Tay, E., Yau, P., Hesse, H.,Woradit, K. andBhatia, D.(2024)
                  FIREfly Project: Forest Fire Monitoring and Prediction Using Machine Learning.In: 2024 International Conference on Unmanned 
                  Aircraft Systems (ICUAS), Chania - Crete, Greece, 04-07 Jun 2024, pp. 594-601.`,
      source: "10.1109/ICUAS60882.2024.10556892",
      path: "https://ieeexplore.ieee.org/document/10556892",
    },
  ];
  return (
    <Layout>
      <MarginContainer>
        <Header header="PUBLICATIONS" />
        <MarginGradientBox>
          <div className="px-6 md:px-10 py-7">
            <p>{PublicationDescribe}</p>
          </div>
          <div>
            {Publications.map((publication, index) => (
              <div key={index} className="py-5 px-6 md:px-10">
                <div>
                  <div className="flex gap-2 bg-navtext text-white px-4 py-2 rounded-lg lg:rounded-full w-fit">
                    <Article />
                    <h4 className="font-medium text-sm my-auto">
                      {publication.topic}
                    </h4>
                  </div>
                  <div className="lg:flex gap-4 pt-7 md:px-10">
                    <div
                      className="border-black border w-52 h-72 bg-cover bg-center mx-auto"
                      style={{ backgroundImage: `url(${publication.picture})` }}
                    ></div>
                    <div className="lg:w-4/5">
                      <p className="font-light mt-2 text-xs text-center lg:text-left lg:text-sm w-fit mx-3 lg:m-0">
                        {publication.describe}
                      </p>

                      <div className="flex gap-2 bg-color13 px-4 py-2 rounded-lg lg:rounded-full lg:w-fit my-3">
                        <OpenInBrowser
                          fontSize="small"
                          className="text-navtext"
                        />

                        <p className="text-xs md:text-sm whitespace-nowrap text-ellipsis overflow-hidden">
                          doi:{" "}
                          <a
                            href={publication.path}
                            target="_blank"
                            className="font-light my-auto"
                          >
                            <span className="underline">
                              {publication.source}
                            </span>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </MarginGradientBox>
      </MarginContainer>
    </Layout>
  );
};
export default Publications;
