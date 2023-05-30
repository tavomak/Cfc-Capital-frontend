/* eslint-disable jsx-a11y/tabindex-no-positive */
const FormAccess = () => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <form
          name="frmIngreso"
          id="frmIngresoRegistro"
          method="POST"
          encType="multipart/form-data"
          action="https://www.cfccapital.cl/informacion-envio.php"
          noValidate="novalidate"
        >
          <p>
            Para más información, ingrese sus datos y un ejecutivo de CFC Capital se pondrá
            {' '}
            en contacto a la brevedad
          </p>
          <input name="telefono" type="text" tabIndex="1" placeholder="Teléfono" className="form-control" />
          <input name="email" type="email" tabIndex="1" placeholder="Email" className="form-control mt-2" />
          <input type="submit" value="Solicitar Información" className="form-control btn-secondary mt-3" />
        </form>

        <hr className="my-4" />

        <form
          name="frmIngreso"
          id="frmIngreso"
          method="POST"
          encType="multipart/form-data"
          action="https://prosystem-fe.cl/Inicio/LoginProd"
          target="_blank"
        >
          <p>Si ya está registrado, ingrese rut sin puntos ni dígito verificador.</p>
          <input name="txtRut" type="text" tabIndex="1" placeholder="Rut" className="form-control mt-2" />
          <input name="txtPass" type="password" tabIndex="2" placeholder="Clave" className="form-control mt-2" />
          <input type="hidden" name="Factoring" value="26" />
          <input type="submit" value="Ingresar" className="form-control mt-2 btn-secondary mt-3" />
        </form>

        <hr className="my-4" />

        <form
          name="frmOlvido"
          id="frmOlvido"
          method="POST"
          encType="multipart/form-data"
          target="_blank"
          action="https://prosystem-fe.cl/Inicio/LoginProd"
        >
          <input type="hidden" name="Tipo" value="0" className="form-control" />
          <input type="hidden" name="FactID" value="26" className="form-control" />
          <input type="submit" value="¿Olvidó su clave?" className="form-control btn-secondary bg-dark-blue text-white mb-2" />
        </form>

        <form
          name="frmSolic"
          id="frmSolic"
          method="POST"
          encType="multipart/form-data"
          target="_blank"
          action="https://prosystem-fe.cl/Inicio/LoginProd"
        >
          <input type="hidden" name="Tipo" value="1" className="form-control" />
          <input type="hidden" name="FactID" value="26" className="form-control" />
          <input type="submit" value="Solicitar Clave" className="form-control btn-secondary bg-dark-blue text-white mb-2" />
        </form>

      </div>
    </div>
  </div>
);

export default FormAccess;
