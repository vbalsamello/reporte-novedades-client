import { Layout, theme } from "antd";
import { Outlet, useLocation } from "react-router-dom";
import Topbar from "@/components/Topbar";
const { Content, Footer } = Layout;

export default function App() {
  const { token } = theme.useToken();
  const location = useLocation();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Topbar />
      <Content style={{ padding: 24, background: token.colorBgContainer }}>
        <Outlet />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        {location.pathname} • Vite + React + TS (sin auth)
      </Footer>
    </Layout>
  );
}
