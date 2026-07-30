import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserAvatarProps {
  name: string;
  image?: string | null;
  fallback?: string;
  className?: string;
  fallbackClassName?: string;
}

export function UserAvatar({
  name,
  image,
  fallback,
  className,
  fallbackClassName,
}: UserAvatarProps) {
  return (
    <Avatar className={className}>
      {image && <AvatarImage src={image} alt={name} />}
      <AvatarFallback className={fallbackClassName}>
        {fallback ?? name.charAt(0).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
}
