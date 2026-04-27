import { Layout, MarginContainer } from "../../components/Layout/Layout";
import Header from "../../components/Layout/Header";
import { OpenInNew } from "@mui/icons-material";

const Dashboard = () => {
  return (
    <Layout>
      <MarginContainer>
        <Header topic="DASHBOARD" />
        <div className="mb-4 flex justify-end">
          <a
            href="https://grafana.firefly-project.org/d/firefly-sensors/firefly-sensors?orgId=1&from=now-12h&to=now&timezone=browser&var-cluster=All&var-node_id=$__all&refresh=5m"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-navtext text-white px-4 py-2 rounded-lg hover:opacity-90"
          >
            Open Full Dashboard <OpenInNew fontSize="small" />
          </a>
        </div>
        <iframe
          src="https://grafana.firefly-project.org/d/firefly-sensors/firefly-sensors?orgId=1&kiosk"
          width="100%"
          height="800"
          frameBorder="0"
          className="rounded-xl"
        />
      </MarginContainer>
    </Layout>
  );
};
export default Dashboard;
