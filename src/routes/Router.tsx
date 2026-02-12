import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PATH } from "../constants/path.route";

import Home from "../page/Home";
import Dashboard from "../page/Dashboard";
import Team from "../page/Team";
import Publications from "../page/Publication";
import Gallery from "../page/Gallery";
import News from "../page/News";
const Router = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path={PATH.HOME} element={<Home />} />
        <Route path={PATH.DASHBOARD} element={<Dashboard />} />
        <Route path={PATH.TEAM} element={<Team />} />
        <Route path={PATH.PUBLICATIONS} element={<Publications />} />
        <Route path={PATH.GALLERY} element={<Gallery />} />
        <Route path={PATH.NEWS} element={<News />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
