import { useState } from 'react';
import { formatPhoneNumberString } from '@/utils';
import useNotify from '@/hooks/useNotify';

import Button from '@/components/Atoms/Button';
import Card from '@/components/Atoms/Card';
import styles from './styles.module.css';

const Signature = ({ data, setData }) => {
  const [notification] = useNotify();
  const [loading, setLoading] = useState(false);

  const handleCopy = async () => {
    setLoading(true);

    try {
      const tableElement = document.getElementById('signatureTable');
      const tableHtml = tableElement.outerHTML;

      // Crear el objeto ClipboardItem con el formato correcto
      const clipboardItem = new ClipboardItem({
        'text/html': new Blob([tableHtml], { type: 'text/html' }),
        // También incluimos el texto plano como fallback
        'text/plain': new Blob([tableElement.innerText], {
          type: 'text/plain',
        }),
      });

      // Usar writeText para navegadores que no soportan write
      if (!navigator.clipboard.write) {
        await navigator.clipboard.writeText(tableHtml);
      } else {
        // Usar el método write para copiar el HTML formateado
        await navigator.clipboard.write([clipboardItem]);
      }

      setLoading(false);
      notification('success', 'Firma de correo copiada en el portapapeles');
    } catch (error) {
      console.log({ error });
      setLoading(false);
      notification('error', '¡Oh! algo salió mal, inténtalo de nuevo');
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-11/12 lg:w-1/2">
        <h5 className="mb-10 font-bold text-center text-blue">
          Previsualización de firma de correo
        </h5>
        <Card cardClassName="shadow py-14 pb-20 mb-5 flex items-center justify-center">
          <table
            id="signatureTable"
            cellPadding="0"
            cellSpacing="0"
            border="0"
            style={{
              verticalAlign: 'middle',
              fontSize: 'medium',
              fontFamily: 'Arial',
              width: '100%',
              maxWidth: '800px',
            }}
          >
            <tbody>
              <tr>
                <td
                  style={{
                    verticalAlign: 'middle',
                    width: '50%',
                    textAlign: 'center',
                  }}
                >
                  <table
                    cellPadding="0"
                    cellSpacing="0"
                    border="0"
                    style={{
                      width: '100%',
                    }}
                  >
                    <tr>
                      <td
                        style={{
                          paddingBottom: '20px',
                        }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="./cfc-logo-vertical.png"
                          style={{
                            display: 'block',
                            maxWidth: '200px',
                            margin: '0 auto',
                          }}
                          alt="CFC Capital"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          paddingBottom: '20px',
                        }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="./Logo-20años.svg"
                          alt="20 años"
                          width="37"
                          height="30"
                          style={{
                            width: 'auto',
                            height: '30px',
                            display: 'inline',
                          }}
                        />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          width="63"
                          height="30"
                          src="./Logo-40hrs.svg"
                          alt="40 horas"
                          style={{
                            width: 'auto',
                            height: '30px',
                            margin: '0 10px',
                            display: 'inline',
                          }}
                        />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          width="45"
                          height="30"
                          src="./Logo-Efa.svg"
                          alt="EFA"
                          style={{
                            width: 'auto',
                            height: '30px',
                            display: 'inline',
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p
                          style={{
                            margin: 0,
                            fontSize: '10px',
                            color: '#7f7f7f',
                          }}
                        >
                          Av. El Bosque 92, piso 11,
                          <br />
                          Las Condes, Santiago, Chile
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>

                <td
                  color="#d3d3d3"
                  direction="vertical"
                  style={{
                    backgroundColor: '#b1a3c6',
                    height: '100%',
                  }}
                  aria-label="Separador vertical"
                >
                  <span
                    style={{
                      display: 'block',
                      width: '2px',
                    }}
                  />
                </td>

                <td
                  style={{
                    width: '100%',
                    paddingLeft: '20px',
                  }}
                >
                  <table cellPadding="0" cellSpacing="0" border="0">
                    <tr>
                      <td>
                        <p
                          style={{
                            margin: 0,
                          }}
                        >
                          <b>
                            <span
                              style={{
                                color: '#623482',
                                fontSize: '15px',
                              }}
                            >
                              {data.name ? (
                                data.name
                              ) : (
                                <span className={styles.skeletonContainer}>
                                  <span
                                    className={styles.skeleton}
                                    style={{ height: '35px' }}
                                  />
                                </span>
                              )}{' '}
                            </span>
                          </b>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          paddingBottom: '15px',
                        }}
                      >
                        <p
                          style={{
                            margin: 0,
                          }}
                        >
                          <span
                            style={{
                              fontSize: '12px',
                              color: '#00ABC8',
                            }}
                          >
                            {data.position ? (
                              data.position
                            ) : (
                              <span className={styles.skeletonContainer}>
                                <span
                                  className={styles.skeleton}
                                  style={{
                                    animationDelay: '0.1s',
                                    height: '20px',
                                  }}
                                />
                              </span>
                            )}
                          </span>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          paddingBottom: '15px',
                        }}
                      >
                        <p
                          style={{
                            margin: 0,
                            color: '#7f7f7f',
                            fontSize: '14px',
                          }}
                        >
                          <span>+56 </span>
                          {data.phone
                            ? formatPhoneNumberString(data.phone)
                            : ''}
                        </p>
                        <p
                          style={{
                            margin: 0,
                            color: '#7f7f7f',
                            fontSize: '14px',
                          }}
                        >
                          {data.mobile && (
                            <>
                              <span>+56 </span>
                              {formatPhoneNumberString(data.mobile)}
                            </>
                          )}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <table cellPadding="0" cellSpacing="0" border="0">
                          <tr>
                            <td
                              style={{
                                paddingTop: '2px',
                                paddingRight: '15px',
                              }}
                            >
                              <a href="!#">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src="./IG-logo.svg"
                                  alt="Instagram"
                                  width="24"
                                  height="24"
                                />
                              </a>
                            </td>
                            <td
                              style={{
                                paddingRight: '15px',
                              }}
                            >
                              <a href="!#">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src="./Linke-logo.svg"
                                  alt="LinkedIn"
                                  width="24"
                                  height="24"
                                />
                              </a>
                            </td>
                            <td>
                              <a href="!#">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src="./FB-logo.svg"
                                  alt="Facebook"
                                  width="15"
                                  height="15"
                                />
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
        <div className="flex justify-center pt-5">
          <Button
            className="btn btn-primary"
            onClick={handleCopy}
            loading={loading}
            text="Copiar al portapapeles"
          />
          <Button className="btn btn-secondary" onClick={() => setData(null)}>
            Volver
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Signature;
