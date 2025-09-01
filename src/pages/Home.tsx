import { Card, Typography, Button } from "antd";
import toast from "react-hot-toast";
const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <Card>
      <Title level={3}>Home</Title>
      <Paragraph>
        Proyecto base sin autenticación. Usá React Query + axios para tus endpoints.
      </Paragraph>
      <Button onClick={() => toast.success("Hola 👋")}>Probar toast</Button>
    </Card>
  );
}
