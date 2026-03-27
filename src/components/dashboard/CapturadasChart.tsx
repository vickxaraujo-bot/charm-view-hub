import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, ComposedChart } from "recharts";

const data = [
  { mes: "Jan", real: 19, meta: 17 },
  { mes: "Fev", real: 24, meta: 23 },
  { mes: "Mar", real: 43, meta: 51 },
  { mes: "Abr", real: 0, meta: 37 },
  { mes: "Mai", real: 0, meta: 47 },
  { mes: "Jun", real: 0, meta: 80 },
  { mes: "Jul", real: 0, meta: 47 },
  { mes: "Ago", real: 0, meta: 42 },
  { mes: "Set", real: 0, meta: 84 },
  { mes: "Out", real: 0, meta: 23 },
  { mes: "Nov", real: 0, meta: 19 },
  { mes: "Dez", real: 0, meta: 14 },
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

const CapturadasChart = () => (
  <Card className="card-glow border-border/50 bg-card/80 backdrop-blur-sm">
    <CardHeader className="pb-2">
      <CardTitle className="text-base font-display text-foreground">
        Capturadas <span className="text-primary">300%</span>
      </CardTitle>
      <p className="text-xs text-muted-foreground">Acumulado: 86 real | 468 meta</p>
    </CardHeader>
    <CardContent>
      <ResponsiveContainer width="100%" height={280}>
        <ComposedChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 15% 18%)" />
          <XAxis dataKey="mes" tick={{ fill: "hsl(220 10% 55%)", fontSize: 11 }} axisLine={{ stroke: "hsl(220 15% 18%)" }} />
          <YAxis tick={{ fill: "hsl(220 10% 55%)", fontSize: 11 }} axisLine={{ stroke: "hsl(220 15% 18%)" }} />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ fontSize: 11 }} />
          <Bar dataKey="real" name="Real" fill="hsl(0 85% 50%)" radius={[4, 4, 0, 0]} />
          <Line dataKey="meta" name="Meta" stroke="hsl(38 92% 50%)" strokeWidth={2} dot={{ r: 3, fill: "hsl(38 92% 50%)" }} />
        </ComposedChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default CapturadasChart;
