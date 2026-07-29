import { UserAvatar } from "@/components/shared/user-avatar";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  quote: string;
  avatar: string;
  role?: string;
  dark?: boolean;
}

export function TestimonialCard({
  name,
  quote,
  avatar,
  role,
  dark,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg p-6 shadow-sm",
        dark ? "bg-ink text-white" : "bg-white text-foreground",
      )}
    >
      <p
        className={cn(
          "text-sm",
          dark ? "text-white/70" : "text-muted-foreground",
        )}
      >
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-5 flex items-center gap-3">
        <UserAvatar name={name} image={avatar} />
        <div>
          <div className="text-sm font-semibold">{name}</div>
          {role && <div className="text-xs text-muted-foreground">{role}</div>}
        </div>
      </div>
    </div>
  );
}
