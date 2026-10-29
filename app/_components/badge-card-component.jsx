export default function BadgeCardComponent({
  icon: Icon,
  title,
  description,
  className = "",
}) {
  return (
    <div
      className={`absolute z-10 flex w-max max-w-47.5 items-center gap-2.5 rounded-xl bg-white/95 px-3 py-2.5 shadow-lg ring-1 ring-slate-100 backdrop-blur sm:max-w-52.5 sm:gap-3 sm:px-4 sm:py-3 ${className}`}
    >
      {Icon && (
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 sm:h-10 sm:w-10">
          <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
        </span>
      )}

      <span className="leading-tight">
        <span className="block text-xs font-semibold text-slate-900 sm:text-sm">
          {title}
        </span>
        {description && (
          <span className="block text-[11px] text-slate-500 sm:text-xs">
            {description}
          </span>
        )}
      </span>
    </div>
  );
}
