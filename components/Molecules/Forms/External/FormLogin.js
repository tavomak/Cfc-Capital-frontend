/* eslint-disable jsx-a11y/tabindex-no-positive */

const LogIn = () => (
  <form
    name="frmIngreso"
    id="frmIngreso"
    method="POST"
    encType="multipart/form-data"
    action="https://prosystem-fe.cl/Inicio/LoginProd"
    target="_blank"
  >
    <p>Si ya está registrado, ingrese rut sin puntos ni dígito verificador.</p>
    <input name="txtRut" type="text" tabIndex="1" placeholder="Rut" />
    <input name="txtPass" type="password" tabIndex="2" placeholder="Clave" />
    <input type="hidden" name="Factoring" value="26" />
    <input type="submit" value="Ingresar" />
  </form>
);

export default LogIn;
