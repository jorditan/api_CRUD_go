import type { JSX } from "react/jsx-dev-runtime";

interface Props {
  label?: string;
  onClick?: () => void;
  tooltipText?: string;
  idTooltip: string;
  icon: JSX.Element;
}

const ButtonIcon: React.FC<Props> = ({
  label,
  onClick,
  tooltipText,
  idTooltip,
  icon,
}) => {
  return (
    <>
      <button
        onClick={onClick}
        data-tooltip-target={idTooltip}
        data-tooltip-style="light"
        type="button"
        className="toggle-full-view flex items-center justify-center w-10 h-unset text-xs font-medium text-body bg-neutral-primary-medium border border-default-medium rounded-base focus:outline-none hover:bg-neutral-secondary-strong hover:border-default-strong hover:text-heading focus:z-10 focus:ring-2 focus:ring-neutral-tertiary"
      >
        {icon}
        <span className="sr-only">{label}</span>
      </button>

      <div
        id={idTooltip}
        role="tooltip"
        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip"
      >
        {tooltipText}
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </>
  );
};

export default ButtonIcon;
