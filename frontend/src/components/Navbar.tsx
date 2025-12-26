import { changeTheme } from "../theme/themeController"
import Button from "./Button"
import ButtonIcon from "./ButtonIcon"
import { SunMoon } from "lucide-react"
import ModalDialog from "./ModalDialog"

const Navbar = () => {
  return (
    


<nav className="bg-neutral-primary fixed w-full z-20 top-0 start-0 border-b border-default">
  <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://flowbite.com/docs/images/logo.svg" className="h-7" alt="Flowbite Logo" />
      <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">Flowbite</span>
  </a>
  <div className="inline-flex md:order-2 gap-4 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <Button label="Añadir libro" 
      />
      <ModalDialog title="Añadir libro" buttonPrimaryText="Guardar" buttonSecondaryText="Cancelar" />
      <ButtonIcon onClick={changeTheme} icon={<SunMoon />} idTooltip="themeButton" tooltipText="Cambiar tema" />
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
      <li>
        <a href="#" className="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0" aria-current="page">Inicio</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Agenda</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Mi perfil</a>
      </li>
    </ul>
  </div>
  </div>
</nav>


  )
}

export default Navbar
