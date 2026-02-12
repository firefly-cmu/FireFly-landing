import { Layout, MarginContainer } from "../../components/Layout/Layout";
import { MarginGradientBox } from "../../components/Layout/Box";
import Header from "../../components/Layout/Header";
import { asset } from "../../utils/asset";

import { DateRange } from "@mui/icons-material";

const Gallery = () => {
  const galleryDescribe = `Take a look at our gallery to see Project FireFly in action. From UAV deployments to IoT sensor installations, 
                            our collection of images and videos captures the essence of our project and the impact we are making in protecting 
                            forests and communities.`;
  const gallery = [
    {
      duration: "September - November 2024 ",
      describe: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. 
                Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, 
                ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. `,
      picture: [
        asset("picture/gallery/Picture1.jpg"),
        asset("picture/gallery/Picture2.jpg"),
        asset("picture/gallery/Picture3.jpg"),
        asset("picture/gallery/Picture4.jpg"),
        asset("picture/gallery/Picture5.jpg"),
        asset("picture/gallery/Picture6.jpg"),
      ],
    },
    {
      duration: "September - November 2024 ",
      describe: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. 
                Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, 
                ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. `,
      picture: [
        asset("picture/gallery/Picture7.jpg"),
        asset("picture/gallery/Picture8.jpg"),
        asset("picture/gallery/Picture6.jpg"),
        asset("picture/team/commu1.jpg"),
        asset("picture/team/commu2.jpg"),
        asset("picture/team/commu3.jpg"),
        asset("picture/gallery/Picture1.jpg"),
        asset("picture/gallery/Picture2.jpg"),
      ],
    },
    {
      duration: "September - November 2024 ",
      describe: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. 
                Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, 
                ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. `,
      picture: [
        asset("picture/team/team1.jpg"),
        asset("picture/team/team2.jpg"),
        asset("picture/team/team3.jpg"),
      ],
    },
  ];
  return (
    <Layout>
      <MarginContainer>
        <Header header="GALLERY" />
        <MarginGradientBox>
          <div className="px-6 md:px-10 py-7">
            <p>{galleryDescribe}</p>
            <div>
              {gallery.map((item, index) => (
                <div key={index}>
                  <h4 className="text-center text-navtext text-xl font-semibold my-3">
                    TOPIC
                  </h4>
                  <div>
                    <div className="flex gap-2 mx-auto w-fit text-navtext bg-color13 rounded px-3 py-1">
                      <DateRange fontSize="small" sx={{ marginTop: "2px" }} />
                      <p>
                        <span className="font-semibold">Duration: </span>
                        {item.duration}
                      </p>
                    </div>
                    <p className="my-3">{item.describe}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2">
                    {item.picture.map((picture, key) => (
                      <div
                        key={key}
                        className="bg-color13 h-32 w-full rounded-2xl bg-cover bg-center"
                        style={{ backgroundImage: `url(${picture})` }}
                      ></div>
                    ))}
                  </div>
                  <div className="w-full h-1 bg-color13 my-10"></div>
                </div>
              ))}
            </div>
          </div>
        </MarginGradientBox>
      </MarginContainer>
    </Layout>
  );
};
export default Gallery;
