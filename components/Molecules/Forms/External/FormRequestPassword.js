const FormRequestPassword = () => (
  <form
    name="frmSolic"
    id="frmSolic"
    method="POST"
    encType="multipart/form-data"
    target="_blank"
    action="https://prosystem-fe.cl/Inicio/LoginProd"
  >
    <input type="hidden" name="Tipo" value="1" />
    <input type="hidden" name="FactID" value="26" />
    <input type="submit" value="Solicitar Clave" />
  </form>
);

export default FormRequestPassword;
