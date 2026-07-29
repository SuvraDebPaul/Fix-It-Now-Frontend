import { TrendingDown, TrendingUp, type LucideIcon } from "lucide-react";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface StatCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  hint?: string;
  trend?: {
    percent: number;
    direction: "up" | "down";
  };
}

export function StatCard({
  label,
  value,
  icon: Icon,
  hint,
  trend,
}: StatCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardDescription>{label}</CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums">
          {value}
        </CardTitle>
        <CardAction>
          <Icon className="h-5 w-5 text-muted-foreground" />
        </CardAction>
      </CardHeader>
      {(hint || trend) && (
        <div className="flex items-center gap-2 px-6 pb-4 text-xs text-muted-foreground">
          {trend && (
            <span
              className={
                trend.direction === "up"
                  ? "flex items-center gap-0.5 font-medium text-green-600"
                  : "flex items-center gap-0.5 font-medium text-red-600"
              }
            >
              {trend.direction === "up" ? (
                <TrendingUp className="h-3.5 w-3.5" />
              ) : (
                <TrendingDown className="h-3.5 w-3.5" />
              )}
              {trend.percent}%
            </span>
          )}
          {hint && <span>{hint}</span>}
        </div>
      )}
    </Card>
  );
}
