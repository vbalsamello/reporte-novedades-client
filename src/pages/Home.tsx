import { Card, Typography } from "antd";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
const { Title, Paragraph } = Typography;

export default function Home() {
  const buttonDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: () => {
          toast.success("Inicio de sesión exitoso");
        },
      });
      if (buttonDiv.current) {
        window.google.accounts.id.renderButton(buttonDiv.current, {
          theme: "outline",
          size: "large",
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <Card>
      <Title level={3}>Home</Title>
      <Paragraph>
        Proyecto base sin autenticación. Usá React Query + axios para tus endpoints.
      </Paragraph>
      <div ref={buttonDiv} />
    </Card>
  );
}
