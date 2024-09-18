import { ComponentProps } from "react";
import { Link } from "react-router-dom";

type Props = {
  label: string;
  route?: string;
  isFullWidth?: boolean;
  isReversed?: boolean;
} & ComponentProps<"button">;

export const Button = ({
  label,
  route,
  isFullWidth = true,
  isReversed = false,
  ...rest
}: Props) => {
  const widthStyle = isFullWidth ? "w-full" : "px-4";
  const colorStyle = isReversed
    ? "text-lime-700 hover:text-white bg-white border border-lime-600 hover:bg-lime-600"
    : "text-white bg-lime-500 hover:bg-lime-600";

  const buttonElement = (
    <button className={`${widthStyle} py-2 rounded ${colorStyle}`} {...rest}>
      {label}
    </button>
  );

  return route ? <Link to={route}>{buttonElement}</Link> : buttonElement;
};
