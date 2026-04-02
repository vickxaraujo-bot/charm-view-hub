import { Lightbulb, Target, TrendingUp, BarChart3 } from "lucide-react";
import KPICard from "@/components/dashboard/KPICard";
import CapturadasChart from "@/components/dashboard/CapturadasChart";
import ImplementadasChart from "@/components/dashboard/ImplementadasChart";
import DataTable from "@/components/dashboard/DataTable";
import logoAlcoa from "@/assets/logo-alcoa.png";
import logoAtitude from "@/assets/logo-atitude.png";
import logoInovAlcoa from "@/assets/logo-inovalcoa-icon.png";

const capturadasData = [
  { mes: "Jan", real: 19, meta: 17, diferenca: 2 },
  { mes: "Fev", real: 24, meta: 23, diferenca: 1 },
  { mes: "Mar", real: 43, meta: 51, diferenca: -8 },
  { mes: "Abr", real: 0, meta: 37, diferenca: -37 },
  { mes: "Mai", real: 0, meta: 47, diferenca: -47 },
  { mes: "Jun", real: 0, meta: 80, diferenca: -80 },
  { mes: "Jul", real: 0, meta: 47, diferenca: -47 },
  { mes: "Ago", real: 0, meta: 42, diferenca: -42 },
  { mes: "Set", real: 0, meta: 84, diferenca: -84 },
  { mes: "Out", real: 0, meta: 23, diferenca: -23 },
  { mes: "Nov", real: 0, meta: 19, diferenca: -19 },
  { mes: "Dez", real: 0, meta: 14, diferenca: -14 },
];

const implementadasData = [
  { mes: "Jan", real: 17, meta: 11, diferenca: 6 },
  { mes: "Fev", real: 21, meta: 12, diferenca: 9 },
  { mes: "Mar", real: 37, meta: 26, diferenca: 11 },
  { mes: "Abr", real: 0, meta: 19, diferenca: -19 },
  { mes: "Mai", real: 0, meta: 23, diferenca: -23 },
  { mes: "Jun", real: 0, meta: 40, diferenca: -40 },
  { mes: "Jul", real: 0, meta: 23, diferenca: -23 },
  { mes: "Ago", real: 0, meta: 21, diferenca: -21 },
  { mes: "Set", real: 0, meta: 42, diferenca: -42 },
  { mes: "Out", real: 0, meta: 12, diferenca: -12 },
  { mes: "Nov", real: 0, meta: 9, diferenca: -9 },
  { mes: "Dez", real: 0, meta: 7, diferenca: -7 },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      {/* Header with Logos */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <img src={logoAlcoa} alt="Alcoa" className="h-10 md:h-12 object-contain brightness-0 invert" />
            <div className="h-8 w-px bg-border" />
            <img src={logoInovAlcoa} alt="InovAlcoa" className="h-8 md:h-10 object-contain" />
          </div>
          <img src={logoAtitude} alt="Programa Atitude" className="h-8 md:h-10 object-contain" />
        </div>
        <div className="flex items-center gap-3 mb-1">
          <div className="h-8 w-1 rounded-full bg-primary" />
          <h1 className="text-2xl md:text-3xl font-bold font-display text-foreground tracking-tight">
            DASHBOARD <span className="text-primary">OVERVIEW</span>
          </h1>
        </div>
        <p className="text-sm text-muted-foreground ml-5">Ideias 300% — Acompanhamento mensal</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <KPICard
          title="Capturadas (Real)"
          value={86}
          subtitle="Acumulado até Mar"
          trend={18.4}
          icon={<Lightbulb className="h-5 w-5" />}
        />
        <KPICard
          title="Capturadas (Meta)"
          value={468}
          subtitle="Meta anual"
          icon={<Target className="h-5 w-5" />}
        />
        <KPICard
          title="Implementadas (Real)"
          value={75}
          subtitle="Acumulado até Mar"
          trend={32.1}
          icon={<TrendingUp className="h-5 w-5" />}
        />
        <KPICard
          title="Implementadas (Meta)"
          value={234}
          subtitle="Meta anual"
          icon={<BarChart3 className="h-5 w-5" />}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <CapturadasChart />
        <ImplementadasChart />
      </div>

      {/* Tables */}
      <div className="grid grid-cols-1 gap-4">
        <DataTable
          title="Ideias Capturadas (300%)"
          data={capturadasData}
          acumuladoReal={86}
          acumuladoMeta={468}
        />
        <DataTable
          title="Ideias Implementadas (300%)"
          data={implementadasData}
          acumuladoReal={75}
          acumuladoMeta={234}
        />
      </div>
    </div>
  );
};

export default Index;
