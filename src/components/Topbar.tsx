import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
const { Header } = Layout;

export default function Topbar() {
  const location = useLocation();
  const current = location.pathname === "/" ? "home" : location.pathname.slice(1);
  return (
    <Header style={{ display: "flex", alignItems: "center" }}>
      <div className="text-white font-semibold mr-6">My App</div>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[current]}
        items={[
          { key: "home", label: <Link to="/">Inicio</Link> },
          { key: "dashboard", label: <Link to="/dashboard">Dashboard</Link> },
        ]}
      />
    </Header>
  );
}
