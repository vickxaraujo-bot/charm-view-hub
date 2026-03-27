import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: number;
  icon?: React.ReactNode;
}

const KPICard = ({ title, value, subtitle, trend, icon }: KPICardProps) => {
  const trendColor = trend && trend > 0 ? "text-success" : trend && trend < 0 ? "text-primary" : "text-muted-foreground";
  const TrendIcon = trend && trend > 0 ? TrendingUp : trend && trend < 0 ? TrendingDown : Minus;

  return (
    <Card className="card-glow border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold font-display text-foreground">{value}</p>
            {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
          </div>
          <div className="flex flex-col items-end gap-2">
            {icon && <div className="text-primary">{icon}</div>}
            {trend !== undefined && (
              <div className={`flex items-center gap-1 text-xs font-medium ${trendColor}`}>
                <TrendIcon className="h-3 w-3" />
                <span>{trend > 0 ? "+" : ""}{trend}%</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default KPICard;
