import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ActiveBadgeProps {
  isActive: boolean;
  activeLabel?: string;
  inactiveLabel?: string;
  className?: string;
}

export function ActiveBadge({
  isActive,
  activeLabel = "Active",
  inactiveLabel = "Inactive",
  className,
}: ActiveBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "border-transparent",
        isActive ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-700",
        className,
      )}
    >
      {isActive ? activeLabel : inactiveLabel}
    </Badge>
  );
}
