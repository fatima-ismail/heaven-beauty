type IconProps = {
  name: "bag" | "heart" | "instagram" | "mail" | "menu" | "phone" | "search" | "user";
};

export function Icon({ name }: IconProps) {
  return <span className={`icon icon-${name}`} aria-hidden="true" />;
}
