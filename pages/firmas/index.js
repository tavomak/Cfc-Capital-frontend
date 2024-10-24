import { useState } from 'react';
import { formatPhoneNumberString } from '@utils/index';
import useNotify from '@hooks/useNotify';

import Layout from '@components/Templates/Layout';
import Button from "@components/Atoms/Button";
import styles from './styles.module.scss';

const Signature = () => {
  const [notification] = useNotify();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value.trim(),
    });
  };

  const handleCopy = async () => {
    setPhoneError(false);
    setLoading(true);

    if (data?.phone?.lenght > 0 && data?.phone?.lenght < 9) {
      setPhoneError(true);
      return;
    }

    const tableElement = document.getElementById('signatureTable');
    const tableHtml = tableElement.outerHTML;
    navigator.clipboard.writeText(tableHtml).then(() => {
      setLoading(false);
      notification('success', 'Firma de correo copiada en el portapapeles');
    }).catch((error) => {
      console.log(error);
      setLoading(false);
      notification('error', '¡Oh! algo salió mal, inténtalo de nuevo');
    });
  };
  return (
    <Layout noindex>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-4 py-5">
            <div>
              <input type="text" className="form-control" placeholder="Nombre" name="name" value={data?.name} onChange={handleChange} />
            </div>
            <div className="mt-3">
              <input type="text" className="form-control" placeholder="Cargo" name="position" value={data?.position} onChange={handleChange} />
            </div>
            <div className="my-3">
              <input type="text" className="form-control" placeholder="Teléfono contacto corporativo" name="phone" value={data?.phone} onChange={handleChange} maxLength={9}/>
            </div>
            <div className="text-center" style={{ minHeight: '50px' }}>
            {data.name && data.position ? (
              <>
                <Button className="btn btn-primary" onClick={handleCopy} loading={loading} text="Copiar al portapapeles" />
                <br />
                {phoneError && <small className="text-danger">Ingresa un teléfono valido</small>}
              </>
              ) : (
              <p className="text-warning">
                <small className="text-left">Cuando ingreses tus datos podrás copiar la firma en el portapapeles, para luego pegarla en tu casilla de correo</small>
              </p>)}
            </div>
          </div>
        </div>
        
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h5 className="text-center font-weight-bold">Previsualización de firma de correo</h5>
              <div className="card p-5 shadow mb-5">
                {processComplete}
                <table
                  id="signatureTable"
                  cellPadding="0"
                  cellSpacing="0"
                  border="0"
                  style={{
                    verticalAlign: 'middle', fontSize: 'medium', fontFamily: 'Arial', width: '100%', maxWidth: '600px',
                  }}
                >
                  <tbody>
                    <tr>
                        <td height="20"></td>
                    </tr>

                    <tr>
                      <td style={{verticalAlign: 'middle'}}>
                          <table
                            cellPadding="0"
                            cellSpacing="0"
                            border="0"
                            style={{
                              verticalAlign: 'middle',
                              fontSize: "medium",
                              fontFamily: "Arial",
                              width: "100%"
                            }}>
                              <tbody>
                                  <tr>
                                      <td align="left" width="300" style={{ verticalAlign: 'middle'}}>
                                          <img src="./cfc-logo.jpg" role="presentation" width="200" style={{ display: "block", maxWidth: "200px"}} />
                                      </td>
                                      <td align="left" width="300" style={{ verticalAlign: 'middle' }}>
                                        <p style={{ margin: 0 }}>
                                          <b><span style={{ color: '#623482', fontSize: '24px' }}>
                                            {data.name ? data.name : (
                                              <span className={styles.skeletonContainer} >
                                                <span className={styles.skeleton} style={{ height: "35px" }}/>
                                              </span>
                                            )}
                                          </span></b>
                                        </p>
                                        <p style={{ margin: 0 }}>
                                          <span style={{ fontSize: '18px', color: '#00ABC8' }}>
                                            {data.position ? data.position : (
                                              <span className={styles.skeletonContainer} >
                                                <span className={styles.skeleton} style={{ animationDelay: '0.1s', height: '20px' }} />
                                              </span>
                                            )}
                                          </span>
                                        </p>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </td>
                    </tr>

                    <tr>
                        <td height="20"></td>
                    </tr>
                    <tr>
                        <td color="#623482" direction="horizontal" width="100%" height="1" style={{width: "100%", borderBottom: "1px solid rgb(81, 49, 172)", borderLeft: "none"}}></td>
                    </tr>
                    <tr>
                        <td height="20"></td>
                    </tr>

                    <tr>
                      <td style={{ verticalAlign: 'middle'}}>
                          <table cellPadding="0" cellSpacing="0" border="0" style={{ verticalAlign: 'middle', fontSize: "medium", fontFamily: "Arial", width: "100%" }}>
                              <tbody>
                                  <tr>
                                      <td align="left" width="300" style={{ verticalAlign: 'middle'}}>
                                          <img src="icon20.png" alt="20 años" style={{ width: "auto", height: "40px"}} />
                                          <img src="icon40.png" alt="40 horas" style={{ width: "auto", height: "40px", marginLeft: "10px", marginRight: "10px"}} />
                                          <img src="icon_efa.png" alt="EFA" style={{ width: "auto", height: "40px"}} />
                                      </td>
                                      <td align="left" width="300">
                                          <p style={{ margin: 0, color: "#00ABC8", fontSize: "18px"}}>
                                              +56 2 2820 1190
                                          </p>
                                          {data.phone && (
                                            <p style={{ margin: 0, color: "#00ABC8", fontSize: "18px"}}>
                                              +56 {formatPhoneNumberString(data.phone)}
                                            </p>
                                          )}
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </td>
                    </tr>

                    <tr>
                        <td height="20"></td>
                    </tr>
                    <tr>
                        <td color="#623482" direction="horizontal" width="100%" height="1" style={{width: "100%", borderBottom: "1px solid rgb(81, 49, 172)", borderLeft: "none"}}></td>
                    </tr>
                    <tr>
                        <td height="20"></td>
                    </tr>

                    <tr>
                      <td colSpan="2" align="left">
                          <p>
                              <span style={{ fontSize: '12px', color: '#7f7f7f', textTransform: 'uppercase'}}>
                                  AV. El Bosque Central 92, piso 11, 7550248 Las Condes, Santiago, Chile
                              </span>
                          </p>
                      </td>
                  </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
      </div>

    </Layout>
  );
};

export default Signature;