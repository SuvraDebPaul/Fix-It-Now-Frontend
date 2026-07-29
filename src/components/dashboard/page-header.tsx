import type { ReactNode } from "react";

interface DashboardPageHeaderProps {
  title: string;
  description: ReactNode;
  action?: ReactNode;
}

export function DashboardPageHeader({
  title,
  description,
  action,
}: DashboardPageHeaderProps) {
  return (
    <div
      className={
        action ? "flex flex-wrap items-center justify-between gap-4" : undefined
      }
    >
      <div>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {action}
    </div>
  );
}
