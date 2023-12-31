import ButtonSubmit from '@components/Atoms/Button';

const FormSubscribe = () => {
  console.log('subscribe');
  return (
    <form className="form row">
      <div className="form-group d-flex align-items-center">
        <input type="email" placeholder="Email" className="form-control me-4" />
        <ButtonSubmit className="btn btn-complementary" text="Enviar" submit />
      </div>
    </form>
  );
};

export default FormSubscribe;
