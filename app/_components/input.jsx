import React, { forwardRef, useId } from "react";

/**
 * Input
 *
 * Colors work two ways here:
 *  - accentColor / labelBg are always dynamic (any CSS color), passed through
 *    CSS variables + Tailwind arbitrary-value syntax, e.g.
 *    `border-[color:var(--input-accent)]`.
 *  - textColor has an explicit, self-contained default (#111827 — near black)
 *    instead of relying on inherited `currentColor`. That matters because
 *    this component often renders inside a portal (e.g. a Modal appended to
 *    <body>), where the *nearest DOM ancestor's* text color — not the visible
 *    card background — decides what `currentColor` resolves to. On a dark
 *    themed page with a white modal panel, `currentColor` can end up white
 *    text on a white card and disappear completely. Giving text its own
 *    default sidesteps that. Pass `textColor="#ffffff"` (or similar) when you
 *    genuinely are putting this on a dark surface.
 */
const Input = forwardRef(
  (
    {
      label,
      name,
      type = "text",
      disabled = false,
      required = false,
      iconLeft,
      iconRight,
      error,
      hint,
      readOnly = false,
      className = "",
      accentColor = "#000000", // focus ring/border + focused label color
      labelBg = "#ffffff", // color behind the floated label (match your surface)
      textColor = "#000000", // input text, icons, resting label, border base
      ...props
    },
    ref,
  ) => {
    const autoId = useId();
    const id = name || autoId;
    const isTextarea = type === "textarea";
    const errorId = error ? `${id}-error` : undefined;
    const hintId = hint && !error ? `${id}-hint` : undefined;

    const borderClasses = error
      ? "border-red-500 focus:border-red-500 focus:ring-red-500/40"
      : "border-[color:var(--input-text)]/25 focus:border-[color:var(--input-accent)] focus:ring-[color:var(--input-accent)]/30";

    const sharedFieldClasses = `
      peer w-full border bg-transparent px-4 text-sm text-[color:var(--input-text)]
      transition-colors duration-150
      placeholder:text-transparent
      focus:outline-none focus:ring-2 focus:ring-offset-0
      disabled:cursor-not-allowed disabled:opacity-50
      read-only:bg-[color:var(--input-text)]/5
      ${borderClasses}
      ${className}
    `;

    return (
      <div
        className="w-full"
        style={{
          "--input-accent": accentColor,
          "--input-label-bg": labelBg,
          "--input-text": textColor,
        }}
      >
        <div className="relative">
          {/* Left Icon */}
          {!isTextarea && iconLeft && (
            <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[color:var(--input-text)]/50">
              {iconLeft}
            </div>
          )}

          {/* Textarea */}
          {isTextarea ? (
            <textarea
              ref={ref}
              id={id}
              name={name}
              disabled={disabled}
              required={required}
              readOnly={readOnly}
              placeholder=" "
              aria-invalid={!!error}
              aria-describedby={errorId || hintId}
              {...props}
              className={`${sharedFieldClasses} rounded-2xl py-3 resize-none`}
            />
          ) : (
            /* Input */
            <input
              autoComplete="off"
              ref={ref}
              id={id}
              name={name}
              type={type}
              disabled={disabled}
              required={required}
              readOnly={readOnly}
              step={type === "number" ? "any" : undefined}
              placeholder=" "
              aria-invalid={!!error}
              aria-describedby={errorId || hintId}
              {...props}
              className={`${sharedFieldClasses} rounded-full py-2.5 ${iconLeft ? "pl-10" : ""} ${iconRight ? "pr-10" : ""}`}
            />
          )}

          {/* Floating Label */}
          <label
            htmlFor={id}
            className={`
              absolute left-3 z-10
              origin-left rounded-full px-1.5 text-sm text-white
              transition-all duration-150 ease-out
              pointer-events-none
              ${isTextarea
                ? "-translate-y-1/2 top-[1.1rem] peer-placeholder-shown:top-[1.1rem] peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:text-sm peer-placeholder-shown:bg-transparent"
                : "top-1/2 -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:bg-transparent"
              }

              peer-focus:top-0
              peer-focus:-translate-y-full
              peer-focus:text-xs
              peer-focus:bg-[color:var(--input-label-bg)]
              ${error ? "peer-focus:text-red-500" : "peer-focus:text-[color:var(--input-accent)]"}

              peer-not-placeholder-shown:top-0
              peer-not-placeholder-shown:-translate-y-full
              peer-not-placeholder-shown:text-xs
              peer-not-placeholder-shown:bg-[color:var(--input-label-bg)]
              peer-not-placeholder-shown:text-[color:var(--input-text)]/70
            `}
          >
            {label}
            {required && <span className="ml-0.5 text-red-500">*</span>}
          </label>

          {/* Right Icon */}
          {iconRight && (
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[color:var(--input-text)]/50">
              {iconRight}
            </div>
          )}
        </div>

        {/* Error / Hint */}
        {error && (
          <p id={errorId} className="mt-1 text-sm text-red-500">
            {error.message ?? error}
          </p>
        )}
        {!error && hint && (
          <p id={hintId} className="mt-1 text-sm text-[color:var(--input-text)]/50">
            {hint}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;