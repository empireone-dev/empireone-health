import classNames from "classnames";
import React, { forwardRef } from "react";

const variantStyles = {
  primary: {
    solid: "bg-blue-600 text-white hover:bg-blue-700 focus-visible:outline-blue-600",
    outlined: "border border-blue-600 text-blue-600 hover:bg-blue-50 focus-visible:outline-blue-600",
  },
  secondary: {
    solid: "bg-purple-600 text-white hover:bg-purple-700 focus-visible:outline-purple-600",
    outlined: "border border-purple-600 text-purple-800 hover:bg-purple-50 focus-visible:outline-purple-600",
  },
  danger: {
    solid: "bg-red-600 text-white hover:bg-red-700 focus-visible:outline-red-600",
    outlined: "border border-red-600 text-red-600 hover:bg-red-50 focus-visible:outline-red-600",
  },
  warning: {
    solid: "bg-yellow-500 text-white hover:bg-yellow-600 focus-visible:outline-yellow-500",
    outlined: "border border-yellow-500 text-yellow-600 hover:bg-yellow-50 focus-visible:outline-yellow-500",
  },
  success: {
    solid: "bg-green-600 text-white hover:bg-green-700 focus-visible:outline-green-600",
    outlined: "border border-green-600 text-green-600 hover:bg-green-50 focus-visible:outline-green-600",
  },
  neutral: {
    solid: "bg-gray-600 text-white hover:bg-gray-700 focus-visible:outline-gray-600",
    outlined: "border border-gray-600 text-gray-600 hover:bg-gray-50 focus-visible:outline-gray-600",
  },
  light: {
    solid: "bg-white text-black hover:bg-gray-100 focus-visible:outline-gray-400",
    outlined: "border border-gray-300 text-gray-700 hover:bg-gray-50 focus-visible:outline-gray-400",
  },
  engagement: {
    solid: "bg-orange-500 text-white hover:bg-orange-600 focus-visible:outline-orange-500",
    outlined: "border border-orange-500 text-orange-500 hover:bg-orange-50 focus-visible:outline-orange-500",
  },
};

const sizeStyles = {
  xs: "px-3 py-1 text-xs gap-1.5",
  sm: "px-3 py-1 text-sm gap-1.5",
  md: "px-4 py-2 text-base gap-2",
  lg: "px-5 py-3 text-lg gap-2",
};

const spinnerSizeStyles = {
  xs: "size-3",
  sm: "size-3.5",
  md: "size-4",
  lg: "size-5",
};

function Spinner({ size = "md", className = "" }) {
  return (
    <svg
      className={classNames("animate-spin", spinnerSizeStyles[size], className)}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  );
}

const Button = forwardRef(function Button(
  {
    children,
    variant = "primary",
    size = "md",
    disabled = false,
    onClick,
    type = "button",
    className = "",
    loading = false,
    outlined = false,
    fullWidth = false,
    leftIcon = null,
    rightIcon = null,
    ...rest
  },
  ref,
) {
  const baseStyle =
    "inline-flex items-center justify-center font-medium rounded-md transition-colors " +
    "focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 " +
    "disabled:opacity-50 disabled:cursor-not-allowed";

  const styleType = outlined ? "outlined" : "solid";
  const isDisabled = disabled || loading;

  const finalClass = classNames(
    baseStyle,
    variantStyles[variant]?.[styleType] ?? variantStyles.primary[styleType],
    sizeStyles[size] ?? sizeStyles.md,
    fullWidth && "w-full",
    className,
  );

  return (
    <button
      ref={ref}
      type={type}
      className={finalClass}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={loading}
      onClick={onClick}
      {...rest}
    >
      {loading ? (
        <>
          <Spinner size={size} />
          <span>{children}</span>
        </>
      ) : (
        <>
          {leftIcon}
          {children}
          {rightIcon}
        </>
      )}
    </button>
  );
});

export default Button;