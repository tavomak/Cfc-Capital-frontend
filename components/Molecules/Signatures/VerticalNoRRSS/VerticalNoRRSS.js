import { formatPhoneNumberString } from '@/utils';
import styles from './styles.module.css';

const VerticalNoRRSS = ({ data, children, direccion, urlMaps }) => (
  <tbody>
    <tr>
      <td
        style={{
          verticalAlign: 'middle',
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
          {/* Renderiza los elementos hijos proporcionados */}
          {children}
          {direccion && (
            <tr>
              <td>
                <p
                  style={{
                    margin: '0 auto',
                    fontSize: '10px',
                    paddingRight: '20px',
                    width: '85%',
                  }}
                >
                  <a
                    style={{
                      textDecoration: 'none',
                      color: '#472c6e',
                      textWrap: 'balance',
                    }}
                    href={urlMaps}
                    target="_blank"
                  >
                    {direccion}
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
                    fontSize: '18px',
                    margin: 0,
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
            </td>
          </tr>
          <tr>
            <td
              style={{
                paddingBottom: '13px',
              }}
            >
              <p
                style={{
                  fontSize: '14px',
                  color: '#00ABC8',
                  margin: 0,
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
              </p>
            </td>
          </tr>

          <tr>
            <td
              style={{
                display: 'flex',
                width: '100%',
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: '#7f7f7f',
                  fontSize: '10px',
                  textDecoration: 'none',
                  paddingRight: '4px',
                }}
              >
                <span>+56 </span>
                {data.phone ? formatPhoneNumberString(data.phone) : ''}
              </p>

              <p
                style={{
                  margin: 0,
                  color: '#7f7f7f',
                  fontSize: '10px',
                  textDecoration: 'none',
                  paddingLeft: '4px',
                  borderLeft: '1px solid #b1a3c6',
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
              <a
                href={`mailto:${data.email ? data.email : ''}`}
                style={{
                  margin: 0,
                  color: '#7f7f7f',
                  fontSize: '12px',
                  textDecoration: 'none',
                }}
              >
                {data.email ? data.email : ''}
              </a>
            </td>
          </tr>
          <tr>
            <td
              style={{
                paddingBottom: '15px',
              }}
            >
              <a
                href="https://cfccapital.cl/"
                target="_blank"
                style={{
                  margin: 0,
                  color: '#7f7f7f',
                  fontSize: '12px',
                  textDecoration: 'none',
                }}
              >
                www.cfccapital.cl
              </a>
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
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="http://imgfz.com/i/nyzoSjk.png"
                      // src="Firma-IG.png"
                      alt="20 años"
                      width="63"
                      height="58"
                      style={{
                        maxWidth: '70px',
                      }}
                    />
                  </td>
                  <td
                    style={{
                      paddingRight: '15px',
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="http://imgfz.com/i/fBTnlJV.png"
                      // src="Firma-IN.png"
                      alt="40hrs"
                      width="70"
                      height="45"
                      style={{
                        maxWidth: '80px',
                      }}
                    />
                  </td>
                  <td>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="http://imgfz.com/i/6FLI3kX.png"
                      // src="Firma-FB.png"
                      alt="EFA logo"
                      width="70"
                      height="55"
                      style={{
                        maxWidth: '80px',
                      }}
                    />
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </tbody>
);

export default VerticalNoRRSS;
