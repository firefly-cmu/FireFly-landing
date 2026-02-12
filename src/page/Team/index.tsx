import { Layout, MarginContainer } from "../../components/Layout/Layout";
import { MarginGradientBox } from "../../components/Layout/Box";
import Header from "../../components/Layout/Header";
import MemberAccording from "./component/memberAccording";
import { asset } from "../../utils/asset";

const Team = () => {
  const ImgTeamList = [
    asset("picture/team/team1.jpg"),
    asset("picture/team/team2.jpg"),
    asset("picture/team/team3.jpg"),
  ];
  const ImgCommunityList = [
    asset("picture/team/commu1.jpg"),
    asset("picture/team/commu2.jpg"),
    asset("picture/team/commu3.jpg"),
  ];
  const OurteamDescrib = `Project FireFly brings together a diverse team of researchers and engineers from RMIT Vietnam, Chiang Mai University, 
                          and the University of Glasgow Singapore. \n\n Our multidisciplinary team is committed to innovating and implementing 
                          solutions that address the challenges of forest fire detection and prevention, ensuring the safety of both 
                          ecosystems and human communities.`;
  const TeamMemberDescrib = [
    {
      picture: asset("picture/team/dinesh.jpg"),
      name: "Dr. Dinesh Bhatia",
      describe: `Senior Lecturer in Aviation at RMIT Vietnam. Over 8 years of research and teaching background in Aerospace, Aviation, 
                  and Mechanical Engineering at several prestigious institutions. Involved in path breaking research in carbon emission 
                  reductions through biodiversity conservation, aerodynamic drag reduction mechanisms for aircraft and adoption of clean 
                  energy such as green hydrogen. Proficient in experimental and computational aerodynamics through wind tunnel testing and CFD. 
                  Passionate about our environment and looking to develop sustainable solutions to reduce emissions including green buildings, 
                  renewable energy sources, eco-friendly material development and carbon neutral solutions to agriculture and forestry.`,
    },
    {
      picture: asset("picture/team/kampol.jpg"),
      name: "Dr. Kampol Woradit",
      describe: `Assistant Professor Kampol Woradit is with the Department of Computer Engineering, Chiang Mai University, Thailand. 
                He is also the Head of Cybersecurity at CMU. He received a PhD in Electrical Engineering from Chulalongkorn University in 2010 
                where he investigated outage behavior of cooperative communications in wireless relay networks. In 2021, 
                he developed an IoT system for mine, where LIDAR and web camera detect each loaded truck and send data to server via internet 
                to show estimated load volume on dashboard. In 2022, he developed real-time multi-player virtual reality game via 5G for intervening 
                elderly who have mild cognitive impairment.`,
    },
    {
      picture: asset("picture/team/henrik.jpg"),
      name: "Dr. Henrik Hesse",
      describe: `Associate Professor in Aerospace Engineering with the University of Glasgow in Singapore. He received a PhD from 
                Imperial College London (2013) where he investigated reduced-order modelling approaches for load control in flexible aircraft 
                and large wind turbines. During his postdoc at ETH Zurich (2014-2016), Henrik developed novel estimation and control methods for the 
                autonomous operation of tethered drones. He has now ventured into robotics focusing on sensor fusion and localisation of unmanned aerial 
                vehicles in GPS-denied environments. My current research focuses on modelling, design and control of autonomous systems in the context 
                of their practical application.`,
    },
    {
      picture: asset("picture/team/pargorn.jpg"),
      name: "Pargorn Puttapirat",
      describe: `PhD student with the Department of Computer Engineering, Chiang Mai University, Thailand. He received his M.Eng from the 
                Department of Computer Science and Technology at Xi’an Jiaotong University under the supervision of Professor Chen Li, in the 
                Biomedical Semantic Understanding Group. He received B.Eng. degree in Biomedical Engineering Program from Srinakharinwirot University, 
                Thailand in 2017. His past works include medical image analysis for development of anti-malarial drug and 3D model-based hand poses estimation.`,
    },
  ];

  const OurCommunityDescribe = `We actively work with the local community in Chiang Mai province through collaboration with Chiang Mai 
                                University's Forest Restoration Research Unit (FORRU).
                                This partnership allows us to engage with local stakeholders, 
                                understand their needs, and integrate their invaluable insights into our project.`;
  return (
    <Layout>
      <MarginContainer>
        <Header header="TEAM" />
        <MarginGradientBox>
          <div className="px-5 md:px-9 py-7">
            <div className="flex gap-2">
              {ImgTeamList.map((img, index) => (
                <div
                  key={index}
                  className={`h-32 md:h-52 lg:h-96 rounded-xl bg-no-repeat bg-center bg-cover ${
                    index === 1 ? "grow w-full" : "w-3/5 opacity-70"
                  } hover:opacity-100 hover:w-full transition-all duration-300`}
                  style={{ backgroundImage: `url(${img})` }}
                ></div>
              ))}
            </div>

            <div className="my-5">
              <p>{OurteamDescrib}</p>
            </div>

            <div className="w-full">
              {TeamMemberDescrib.map((member, index) => (
                <div className="md:px-2 py-3" key={index}>
                  <MemberAccording
                    name={member.name}
                    picture={member.picture}
                    describe={member.describe}
                  />
                </div>
              ))}
            </div>
          </div>
        </MarginGradientBox>
      </MarginContainer>
      <div className="my-5">
        <MarginContainer>
          <Header topic="COMMUNITY" />
        </MarginContainer>
        <div className="py-10 bg-custom-gradient2 mt-3">
          <MarginContainer>
            <div className="flex gap-2">
              {ImgCommunityList.map((img, index) => (
                <div
                  key={index}
                  className={`h-32 md:h-52 lg:h-96 rounded-xl bg-no-repeat bg-center bg-cover ${
                    index === 1 ? "grow w-full" : "w-3/5 opacity-70"
                  } hover:opacity-100 hover:w-full transition-all duration-300`}
                  style={{ backgroundImage: `url(${img})` }}
                ></div>
              ))}
            </div>

            <div className="my-3">
              <p>{OurCommunityDescribe}</p>
            </div>
          </MarginContainer>
        </div>
      </div>
    </Layout>
  );
};
export default Team;
