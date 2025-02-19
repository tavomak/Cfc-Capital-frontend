import { formatPhoneNumberString } from '@/utils';
import Card from '@/components/Atoms/Card';
import styles from './styles.module.css';

const SignatureCard = ({
  mode,
  data,
  children,
  direction,
  urlMaps,
  socialLinks,
}) => {
  const renderVerticalRRSS = () => (
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
            {children}
            {direction && (
              <tr>
                <td>
                  <p
                    style={{
                      margin: 0,
                      fontSize: '10px',
                      paddingRight: '20px',
                    }}
                  >
                    <a
                      style={{ textDecoration: 'none', color: '#472c6e' }}
                      href={urlMaps}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {direction}
                    </a>
                  </p>
                </td>
              </tr>
            )}
          </table>
        </td>

        <td
          style={{
            borderLeft: '1px solid #b1a3c6',
            height: '100%',
          }}
          aria-label="Separador vertical"
        />

        <td
          style={{
            width: '100%',
            paddingLeft: '20px',
          }}
        >
          <table cellPadding="0" cellSpacing="0" border="0">
            <tr>
              <td>
                <b>
                  <span
                    style={{
                      color: '#623482',
                      fontSize: '15px',
                      fontWeight: 'bold',
                      margin: 0,
                    }}
                  >
                    {data.name || (
                      <span className={styles.skeletonContainer}>
                        <span
                          className={styles.skeleton}
                          style={{ height: '35px' }}
                        />
                      </span>
                    )}
                  </span>
                </b>
              </td>
            </tr>
            <tr>
              <td style={{ paddingBottom: '15px' }}>
                <p
                  style={{
                    fontSize: '12px',
                    color: '#00ABC8',
                    margin: 0,
                  }}
                >
                  {data.position || (
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
                </p>
              </td>
            </tr>
            <tr>
              <td style={{ paddingBottom: '15px' }}>
                <p
                  style={{
                    margin: 0,
                    color: '#7f7f7f',
                    fontSize: '14px',
                    textDecoration: 'none',
                  }}
                >
                  <span>+56 </span>
                  {data.phone && formatPhoneNumberString(data.phone)}
                </p>
                <p
                  style={{
                    margin: 0,
                    color: '#7f7f7f',
                    fontSize: '14px',
                    textDecoration: 'none',
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
            {socialLinks && (
              <tr>
                <td>
                  <table cellPadding="0" cellSpacing="0" border="0">
                    <tr>
                      <td style={{ paddingTop: '2px', paddingRight: '15px' }}>
                        <a href={socialLinks.instagram}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src="/Firma-IG.png"
                            alt="Instagram"
                            width="24"
                            height="24"
                          />
                        </a>
                      </td>
                      <td style={{ paddingRight: '15px' }}>
                        <a href={socialLinks.linkedin}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src="Firma-IN.png"
                            alt="LinkedIn"
                            width="24"
                            height="24"
                          />
                        </a>
                      </td>
                      <td>
                        <a href={socialLinks.facebook}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src="Firma-FB.png"
                            alt="Facebook"
                            width="24"
                            height="24"
                          />
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            )}
          </table>
        </td>
      </tr>
    </tbody>
  );

  const renderHorizontal = () => (
    <tbody>
      <tr>
        <td height="20" aria-label="Espaciador vertical" />
      </tr>

      <tr>
        <td
          style={{ verticalAlign: 'middle' }}
          aria-label="Contenedor de nombre y posición"
        >
          <table
            cellPadding="0"
            cellSpacing="0"
            border="0"
            style={{
              verticalAlign: 'middle',
              fontSize: 'medium',
              fontFamily: 'Arial',
              width: '100%',
              lineHeight: '1',
            }}
          >
            <tbody>
              <tr>
                <td
                  align="left"
                  width="200"
                  style={{ verticalAlign: 'middle' }}
                  aria-label="Contenedor de logo"
                >
                  <a
                    href="https://www.cfccapital.cl/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="./cfc-logo.jpg"
                      role="presentation"
                      width="160"
                      style={{ display: 'block', maxWidth: '160px' }}
                      alt="CFCCapital"
                    />
                  </a>
                </td>
                <td
                  align="left"
                  width="200"
                  style={{ verticalAlign: 'middle' }}
                >
                  <p style={{ margin: 0 }}>
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
                        )}
                      </span>
                    </b>
                  </p>
                  <p style={{ margin: 0 }}>
                    <span style={{ fontSize: '12px', color: '#00ABC8' }}>
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
            </tbody>
          </table>
        </td>
      </tr>

      <tr>
        <td height="10" aria-label="Espaciador vertical" />
      </tr>
      <tr>
        <td
          color="#d3d3d3"
          direction="horizontal"
          height="1"
          style={{
            width: '100%',
            borderLeft: 'none',
            backgroundColor: '#d3d3d3',
          }}
          aria-label="Separador horizontal"
        >
          <span
            style={{
              borderBottom: '1px solid #d3d3d3',
              display: 'block',
              width: '100%',
            }}
          />
        </td>
      </tr>
      <tr>
        <td height="10" aria-label="Espaciador vertical" />
      </tr>

      <tr>
        <td style={{ verticalAlign: 'middle' }}>
          <table
            cellPadding="0"
            cellSpacing="0"
            border="0"
            style={{
              verticalAlign: 'middle',
              fontSize: 'medium',
              fontFamily: 'Arial',
              width: '100%',
            }}
          >
            <tbody>
              <tr>
                <td
                  align="left"
                  width="200"
                  style={{ verticalAlign: 'middle' }}
                  aria-label="Contenedor de iconos"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="icon20.png"
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
                    src="icon40.png"
                    alt="40 horas"
                    style={{
                      width: 'auto',
                      height: '30px',
                      marginLeft: '10px',
                      marginRight: '10px',
                      display: 'inline',
                    }}
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    width="45"
                    height="30"
                    src="icon_efa.png"
                    alt="EFA"
                    style={{
                      width: 'auto',
                      height: '30px',
                      display: 'inline',
                    }}
                  />
                </td>
                <td align="left" width="200">
                  <p
                    style={{
                      margin: 0,
                      color: '#7f7f7f',
                      fontSize: '12px',
                    }}
                  >
                    <span>56 </span>
                    {data.phone ? formatPhoneNumberString(data.phone) : ''}
                  </p>
                  {data.phone && (
                    <p
                      style={{
                        margin: 0,
                        color: '#7f7f7f',
                        fontSize: '12px',
                      }}
                    >
                      {data.mobile && (
                        <>
                          <span>56 </span>
                          {formatPhoneNumberString(data.mobile)}
                        </>
                      )}
                    </p>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>

      <tr>
        <td height="15" aria-label="Espaciador vertical" />
      </tr>

      <tr>
        <td colSpan="2" align="left">
          <p>
            <a
              href={urlMaps}
              target="_blank"
              style={{
                textDecoration: 'none',
                fontSize: '10px',
                color: '#7f7f7f',
              }}
            >
              {direction}
            </a>
          </p>
        </td>
      </tr>
    </tbody>
  );

  const renderVerticalNoRRSS = () => (
    <tbody>
      <tr>
        <td style={{ verticalAlign: 'middle', textAlign: 'center' }}>
          <table
            cellPadding="0"
            cellSpacing="0"
            border="0"
            style={{ width: '100%' }}
          >
            {children}
            {direction && (
              <tbody>
                <tr>
                  <td>
                    {urlMaps ? (
                      <a
                        style={{
                          textDecoration: 'none',
                          color: '#7f7f7f',
                          display: 'block',
                        }}
                        href={urlMaps}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span
                          style={{
                            display: 'block',
                            textDecoration: 'none',
                            color: '#7f7f7f',
                            fontSize: '13px',
                            paddingRight: '20px',
                          }}
                        >
                          {direction}
                        </span>
                      </a>
                    ) : (
                      <span
                        style={{
                          display: 'block',
                          textAlign: 'left',
                          textDecoration: 'none',
                          color: '#7f7f7f',
                          fontSize: '13px',
                          paddingRight: '20px',
                        }}
                      >
                        {direction}
                      </span>
                    )}
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </td>

        <td
          style={{ borderLeft: '2px solid #b1a3c6' }}
          aria-label="Separador vertical"
        />

        <td style={{ width: '100%', paddingLeft: '20px' }}>
          <table cellPadding="0" cellSpacing="0" border="0">
            <tbody>
              <tr>
                <td>
                  <b>
                    <span
                      style={{ color: '#235092', fontSize: '18px', margin: 0 }}
                    >
                      {data.name || (
                        <span className={styles.skeletonContainer}>
                          <span
                            className={styles.skeleton}
                            style={{ color: '#623482', height: '35px' }}
                          />
                        </span>
                      )}
                    </span>
                  </b>
                </td>
              </tr>
              <tr>
                <td style={{ paddingBottom: '20px' }}>
                  <p style={{ fontSize: '14px', color: '#00ABC8', margin: 0 }}>
                    {data.position || (
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
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ display: 'flex', width: '100%' }}>
                  <p
                    style={{
                      margin: 0,
                      color: '#7f7f7f',
                      fontSize: '13px',
                      textDecoration: 'none',
                      paddingRight: '4px',
                    }}
                  >
                    <span style={{ color: '#7f7f7f', textDecoration: 'none' }}>
                      +56{' '}
                    </span>
                    {data.phone && formatPhoneNumberString(data.phone)}
                  </p>

                  {data.mobile && (
                    <p
                      style={{
                        margin: 0,
                        color: '#7f7f7f',
                        fontSize: '13px',
                        paddingLeft: '4px',
                        borderLeft: '1px solid #b1a3c6',
                        textDecoration: 'none',
                      }}
                    >
                      <span
                        style={{ color: '#7f7f7f', textDecoration: 'none' }}
                      >
                        +56{' '}
                      </span>
                      {formatPhoneNumberString(data.mobile)}
                    </p>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href={`mailto:${data.email || ''}`}
                    style={{
                      margin: 0,
                      fontSize: '13px',
                      color: '#7f7f7f',
                      textDecoration: 'none',
                    }}
                  >
                    <span style={{ color: '#7f7f7f', textDecoration: 'none' }}>
                      {data.email}
                    </span>
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ paddingBottom: '5px' }}>
                  <a
                    href="https://cfccapital.cl/"
                    target="_blank"
                    style={{
                      margin: 0,
                      color: '#7f7f7f',
                      fontSize: '13px',
                      textDecoration: 'none',
                    }}
                    rel="noreferrer"
                  >
                    <span style={{ color: '#7f7f7f', textDecoration: 'none' }}>
                      www.cfccapital.cl
                    </span>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <table cellPadding="0" cellSpacing="0" border="0">
                    <tbody>
                      <tr>
                        <td style={{ paddingTop: '2px', paddingRight: '15px' }}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src="/cfc-20years.png"
                            alt="20yrs"
                            width="43"
                            height="36"
                            style={{ maxWidth: '43px' }}
                          />
                        </td>
                        <td style={{ paddingRight: '15px' }}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src="/cfc-40hrs.png"
                            alt="40hrs"
                            width="55"
                            height="30"
                            style={{ maxWidth: '55px' }}
                          />
                        </td>
                        <td>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src="/cfc-efa.png"
                            alt="EFA logo"
                            width="50"
                            height="33"
                            style={{ maxWidth: '50px' }}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  );

  const renderSignatureBody = () => {
    switch (mode) {
      case 'vertical-rrss':
        return renderVerticalRRSS();
      case 'horizontal':
        return renderHorizontal();
      case 'vertical-no-rrss':
        return renderVerticalNoRRSS();
      default:
        return renderVerticalRRSS();
    }
  };

  return (
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
          maxWidth: '450px',
        }}
      >
        {renderSignatureBody()}
      </table>
    </Card>
  );
};

export default SignatureCard;
