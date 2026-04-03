import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, ComposedChart } from "recharts";

const data = [
  { mes: "Jan", real: 17, meta: 11 },
  { mes: "Fev", real: 21, meta: 12 },
  { mes: "Mar", real: 37, meta: 26 },
  { mes: "Abr", real: 0, meta: 19 },
  { mes: "Mai", real: 0, meta: 23 },
  { mes: "Jun", real: 0, meta: 40 },
  { mes: "Jul", real: 0, meta: 23 },
  { mes: "Ago", real: 0, meta: 21 },
  { mes: "Set", real: 0, meta: 42 },
  { mes: "Out", real: 0, meta: 12 },
  { mes: "Nov", real: 0, meta: 9 },
  { mes: "Dez", real: 0, meta: 7 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload?.length) {
    return (
      <div className="rounded-lg border border-border bg-card p-3 shadow-lg">
        <p className="text-sm font-semibold text-foreground">{label}</p>
        {payload.map((entry: any, i: number) => (
          <p key={i} className="text-xs" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const ImplementadasChart = () => (
  <Card className="card-glow border-border/50 bg-card/80 backdrop-blur-sm">
    <CardHeader className="pb-2">
      <CardTitle className="text-base font-display text-foreground">
        Implementadas <span className="text-primary">300%</span>
      </CardTitle>
      <p className="text-xs text-muted-foreground">Acumulado: 75 real | 234 meta</p>
    </CardHeader>
    <CardContent>
      <ResponsiveContainer width="100%" height={280}>
        <ComposedChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(215 30% 22%)" />
          <XAxis dataKey="mes" tick={{ fill: "hsl(215 20% 55%)", fontSize: 11 }} axisLine={{ stroke: "hsl(215 30% 22%)" }} />
          <YAxis tick={{ fill: "hsl(215 20% 55%)", fontSize: 11 }} axisLine={{ stroke: "hsl(215 30% 22%)" }} />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ fontSize: 11 }} />
          <Bar dataKey="real" name="Real" fill="hsl(205 72% 30%)" radius={[4, 4, 0, 0]} />
          <Line dataKey="meta" name="Meta" stroke="hsl(105 62% 53%)" strokeWidth={2} dot={{ r: 3, fill: "hsl(105 62% 53%)" }} />
        </ComposedChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default ImplementadasChart;
