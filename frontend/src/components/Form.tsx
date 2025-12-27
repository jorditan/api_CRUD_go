import { Download } from "lucide-react";
import EditorText from "./EditorText";

const Form = () => {
  return (
    <>
      <form className="w-full mx-auto space-y-4">
        <div>
          <label
            htmlFor="visitors"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Título *{" "}
          </label>
          <input
            type="text"
            id="visitors"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body"
            placeholder="Ej: El Principito"
            required
          />
        </div>
        <div>
          <label
            htmlFor="visitors"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Autor *{" "}
          </label>
          <input
            type="text"
            id="visitors"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body"
            placeholder="Ej: Antoine de Saint-Exupéry"
            required
          />
        </div>
        <div>
          <label
            htmlFor="visitors"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Editorial *{" "}
          </label>
          <input
            type="text"
            id="visitors"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body"
            placeholder="Ej: Editorial Planeta"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Reseña
          </label>
          <EditorText placeholder="Escribe tu análisis aquí..." />
          <button
            type="button"
            className="text-body flex gap-2 bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary-soft shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
          >
            <Download className="w-4 h-4" />
            Subir imágen
          </button>
        </div>
        <div className="flex w-full justify-end">
          <div className="flex gap-2">
            <button
              type="button"
              className="text-body bg-neutral-primary border border-default hover:bg-neutral-secondary-soft hover:text-heading focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
            >
              Guardar libro
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
