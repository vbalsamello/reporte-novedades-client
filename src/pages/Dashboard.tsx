import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { Card } from "antd";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

type Stat = { label: string; value: number };

export default function Dashboard() {
  const { data = [], isLoading, isError } = useQuery<Stat[]>({
    queryKey: ["stats"],
    queryFn: async () => (await api.get("/stats")).data,
  });

  return (
    <Card title="Dashboard">
      {isLoading && "Cargando..."}
      {isError && "Error al cargar"}
      {!isLoading && !isError && (
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </Card>
  );
}
