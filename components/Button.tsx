import classNames from "classnames";

export interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant: "primary" | "outline" | "disabled";
  children: React.ReactNode;
  size?: "sm" | "normal";
  className?: string;
}

export default function Button(props: ButtonProps) {
  const classes =
    classNames({
      btn: true,
      "btn-primary": props.variant === "primary",
      "btn-outline": props.variant === "outline",
      "btn-disabled": props.variant === "disabled",
      "btn-sm": props.size === "sm",
    }) +
    " " +
    props.className;

  return (
    <button
      className={classes}
      onClick={props.onClick}
      disabled={props.variant === "disabled"}
    >
      {props.children}
    </button>
  );
}
