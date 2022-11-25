import classNames from "classnames";
import Link from "next/link";

export interface StaffMenuCardProps {
  title: string | number;
  href: string;
  children?: React.ReactNode;
  variant?: "outline" | "solid";
  className?: string;
}

export default function StaffMenuCard({
  title,
  href,
  children,
  variant = "outline",
  className,
}: StaffMenuCardProps) {
  const classes = classNames({
    "staff-menu-card": true,
    "staff-menu-card-outline": variant === "outline",
    "staff-menu-card-solid": variant === "solid",
    className,
  });

  return (
    <Link href={href}>
      <div className={classes}>
        <span>{children}</span>
        <p className="font-medium">{title}</p>
      </div>
    </Link>
  );
}
