import { FC } from "react";
import { ButtonProps } from "./types";

const Button: FC<ButtonProps> = ({
  className,
  type,
  children,
  disabled = false,
  onClick,
  icon,
  withIcon,
}) => {
  const button = (
    <button
      type={type}
      className={`${
        withIcon ? "justify-center group inline-flex items-center" : ""
      } flex items-center px-4 py-2 mx-auto text-gray-500 bg-white rounded-md dark:bg-gray-800  hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:text-gray-200 
			${className ?? ""} ${disabled ? "opacity-20 cursor-not-allowed" : ""}
			`}
      disabled={disabled}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );

  return withIcon ? <div className="text-center">{button}</div> : button;
};

export default Button;
