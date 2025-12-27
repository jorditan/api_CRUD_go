import Form from "../components/Form";

const FormView = () => {
  return (
    <>
      <section className="max-w-3xl mx-auto flex gap-4 flex-col">
        <h1 className="text-3xl font-bold mb-4 text-heading font-sans">
          Añadir reseña de un libro
        </h1>
        <Form />
      </section>
    </>
  );
};

export default FormView;
