import { UserAvatar } from "@/components/shared/user-avatar";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { getInitials } from "@/lib/utils";

interface ProfileCardHeaderProps {
  name: string;
  email: string;
  image?: string | null;
}

export function ProfileCardHeader({
  name,
  email,
  image,
}: ProfileCardHeaderProps) {
  return (
    <CardHeader className="flex-row items-center gap-4">
      <UserAvatar
        name={name}
        image={image ?? undefined}
        fallback={getInitials(name)}
        className="h-16 w-16"
        fallbackClassName="bg-primary/20 text-lg text-primary"
      />
      <div>
        <CardTitle>{name}</CardTitle>
        <p className="text-sm text-muted-foreground">{email}</p>
      </div>
    </CardHeader>
  );
}
