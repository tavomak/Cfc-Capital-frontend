import Input from '@/components/Atoms/Input';
/* eslint-disable jsx-a11y/tabindex-no-positive */
const FormAccess = () => (
  <div className="container md:px-4">
    <div className="row">
      <div className="col-12">
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
            Para más información, ingrese sus datos y un ejecutivo de CFC
            Capital se pondrá en contacto a la brevedad
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
            className="form-control mt-2"
          />
          <input
            type="submit"
            value="Solicitar Información"
            className="form-control btn btn-primary mt-3"
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
          <h2 className="text-xl font-semibold mb-4">
            Formulario de ingreso clientes
          </h2>
          <p className="text-sm font-semibold mb-4">
            Si ya está registrado, ingrese rut sin puntos ni dígito verificador.
          </p>
          <Input
            name="txtRut"
            type="text"
            tabIndex="1"
            placeholder="Rut"
            className="form-control mt-2"
          />
          <Input
            name="txtPass"
            type="password"
            tabIndex="2"
            placeholder="Clave"
            className="form-control mt-2"
          />
          <input type="hidden" name="Factoring" value="26" />
          <input
            type="submit"
            value="Ingresar"
            className="form-control mt-2 btn btn-primary "
          />
        </form>

        <div className="md:flex">
          <form
            name="frmSolic"
            id="frmSolic"
            method="POST"
            encType="multipart/form-data"
            target="_blank"
            action="https://prosystem-fe.cl/Inicio/LoginProd"
            className="text-right w-full"
          >
            <input
              type="hidden"
              name="Tipo"
              value="1"
              className="form-control"
            />
            <input
              type="hidden"
              name="FactID"
              value="26"
              className="form-control"
            />
            <input
              type="submit"
              value="Olvidé mi contraseña"
              className="mb-2 text-soft-blue font-semibold text-sm relative -top-6"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default FormAccess;