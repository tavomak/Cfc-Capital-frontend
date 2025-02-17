import Input from '@/components/Atoms/Input';
/* eslint-disable jsx-a11y/tabindex-no-positive */
const FormAccess = () => (
  <div className="container md:px-4">
    <div className="">
      <form
        name="frmIngreso"
        id="frmIngresoRegistro"
        method="POST"
        encType="multipart/form-data"
        action="https://www.cfccapital.cl/informacion-envio.php"
        noValidate="novalidate"
        className="hidden"
      >
        <p>
          Para más información, ingrese sus datos y un ejecutivo de CFC Capital
          se pondrá en contacto a la brevedad
        </p>
        <input
          name="telefono"
          type="text"
          tabIndex="1"
          placeholder="Teléfono"
          className="form-control"
        />
        <input
          name="email"
          type="email"
          tabIndex="1"
          placeholder="Email"
          className="mt-2 form-control"
        />
        <input
          type="submit"
          value="Solicitar Información"
          className="mt-3 form-control btn btn-primary"
        />
        <hr className="my-4" />
      </form>

      <form
        name="frmIngreso"
        id="frmIngreso"
        method="POST"
        encType="multipart/form-data"
        action="https://prosystem-fe.cl/Inicio/LoginProd"
        target="_blank"
      >
        <h2 className="mb-4 text-xl font-semibold">
          Formulario de ingreso clientes
        </h2>
        <p className="mb-4 text-sm font-semibold">
          Si ya está registrado, ingrese rut sin puntos ni dígito verificador.
        </p>
        <Input
          name="txtRut"
          type="text"
          tabIndex="1"
          placeholder="Rut"
          className="mt-2 form-control"
        />
        <Input
          name="txtPass"
          type="password"
          tabIndex="2"
          placeholder="Clave"
          className="mt-2 form-control"
        />
        <input type="hidden" name="Factoring" value="26" />
        <input
          type="submit"
          value="Ingresar"
          className="mt-2 form-control btn btn-primary "
        />
      </form>

      <hr className="my-4" />

      <div className="mt-5 md:flex">
        <form
          name="frmOlvido"
          id="frmOlvido"
          method="POST"
          encType="multipart/form-data"
          target="_blank"
          action="https://prosystem-fe.cl/Inicio/LoginProd"
          className="w-full"
        >
          <input type="hidden" name="Tipo" value="0" className="form-control" />
          <input
            type="hidden"
            name="FactID"
            value="26"
            className="form-control"
          />
          <input
            type="submit"
            value="Olvidé mi contraseña"
            className="mb-2 text-sm font-semibold transition-colors duration-300 cursor-pointer text-dark-grey hover:text-soft-blue"
          />
        </form>

        <form
          name="frmSolic"
          id="frmSolic"
          method="POST"
          encType="multipart/form-data"
          target="_blank"
          action="https://prosystem-fe.cl/Inicio/LoginProd"
          className="w-full md:text-right"
        >
          <input type="hidden" name="Tipo" value="1" className="form-control" />
          <input
            type="hidden"
            name="FactID"
            value="26"
            className="form-control"
          />
          <input
            type="submit"
            value="Solicitar Clave"
            className="mb-2 text-sm font-semibold transition-colors duration-300 cursor-pointer text-dark-grey hover:text-soft-blue"
          />
        </form>
      </div>
    </div>
  </div>
);

export default FormAccess;
