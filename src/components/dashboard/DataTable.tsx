import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface DataTableProps {
  title: string;
  data: { mes: string; real: number; meta: number; diferenca: number }[];
  acumuladoReal: number;
  acumuladoMeta: number;
}

const DataTable = ({ title, data, acumuladoReal, acumuladoMeta }: DataTableProps) => (
  <Card className="card-glow border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden">
    <CardHeader className="pb-2">
      <CardTitle className="text-base font-display text-foreground">{title}</CardTitle>
    </CardHeader>
    <CardContent className="p-0">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-border/50 hover:bg-transparent">
              <TableHead className="text-xs text-muted-foreground font-semibold">Mês</TableHead>
              {data.map((d) => (
                <TableHead key={d.mes} className="text-xs text-muted-foreground text-center">{d.mes}</TableHead>
              ))}
              <TableHead className="text-xs text-primary text-center font-bold">Acum.</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="border-border/50">
              <TableCell className="text-xs font-semibold text-primary">Real</TableCell>
              {data.map((d) => (
                <TableCell key={d.mes} className="text-xs text-center text-foreground">{d.real}</TableCell>
              ))}
              <TableCell className="text-xs text-center font-bold text-primary">{acumuladoReal}</TableCell>
            </TableRow>
            <TableRow className="border-border/50">
              <TableCell className="text-xs font-semibold text-warning">Meta</TableCell>
              {data.map((d) => (
                <TableCell key={d.mes} className="text-xs text-center text-foreground">{d.meta}</TableCell>
              ))}
              <TableCell className="text-xs text-center font-bold text-warning">{acumuladoMeta}</TableCell>
            </TableRow>
            <TableRow className="border-border/50">
              <TableCell className="text-xs font-semibold text-muted-foreground">Dif.</TableCell>
              {data.map((d) => (
                <TableCell key={d.mes} className={`text-xs text-center ${d.diferenca >= 0 ? "text-success" : "text-primary"}`}>
                  {d.diferenca >= 0 ? `+${d.diferenca}` : d.diferenca}
                </TableCell>
              ))}
              <TableCell className="text-xs text-center font-bold text-muted-foreground">
                {acumuladoReal - acumuladoMeta >= 0 ? "+" : ""}{acumuladoReal - acumuladoMeta}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </CardContent>
  </Card>
);

export default DataTable;
