import type { JSX } from "react/jsx-dev-runtime"

interface Props {
  label?: string
  onClick?: () => void
  tooltipText?: string
  idTooltip: string
  icon: JSX.Element
}

const ButtonIcon:React.FC<Props> = ({ label, onClick, tooltipText, idTooltip, icon }) => {
  return (
    <>
      <button onClick={onClick} data-tooltip-target={idTooltip} data-tooltip-style="light" type="button" className="inline-flex items-center justify-center  text-fg-brand bg-neutral-primary border border-brand hover:bg-brand hover:text-white focus:ring-4 focus:ring-brand-subtle rounded-base w-10 h-10 focus:outline-none">
        {icon}
        <span className="sr-only">{label}</span>
      </button>

      <div id={idTooltip} role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
        {tooltipText}
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </>
  )
}

export default ButtonIcon
