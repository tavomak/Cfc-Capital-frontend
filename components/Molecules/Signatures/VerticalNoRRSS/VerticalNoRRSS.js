import { formatPhoneNumberString } from '@/utils';
import styles from './styles.module.css';

const VerticalNoRRSS = ({ data, children, direction, urlMaps }) => (
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
          {direction && (
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
                  >
                    <span
                      style={{
                        display: 'block',
                        textDecoration: 'none',
                        color: '#7f7f7f',
                        fontSize: '13px',
                        paddingRight: '20px',
                        textWrap: 'balance',
                        MozTextDecoration: 'none',
                        WebkitTextDecoration: 'none',
                      }}
                    >
                      {direction}
                    </span>
                  </a>
                ) : (
                  <span
                    style={{
                      display: 'block',
                      textDecoration: 'none ',
                      color: '#7f7f7f',
                      fontSize: '13px',
                      paddingRight: '20px',
                      textWrap: 'balance',
                      MozTextDecoration: 'none',
                      WebkitTextDecoration: 'none',
                    }}
                  >
                    {direction}
                  </span>
                )}
              </td>
            </tr>
          )}
        </table>
      </td>

      <td
        style={{
          borderLeft: '2px solid #b1a3c6',
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
                    color: '#235092',
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
                        style={{ color: '#623482', height: '35px' }}
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
                  fontSize: '13px',
                  textDecoration: 'none ',
                  paddingRight: '4px',
                  MozTextDecoration: 'none',
                  WebkitTextDecoration: 'none',
                }}
              >
                <span
                  style={{
                    color: '#7f7f7f',
                    textDecoration: 'none ',
                    MozTextDecoration: 'none',
                    WebkitTextDecoration: 'none',
                  }}
                >
                  +56{' '}
                </span>
                {data.phone ? formatPhoneNumberString(data.phone) : ''}
              </p>

              <p
                style={{
                  margin: 0,
                  color: '#7f7f7f',
                  fontSize: '13px',
                  paddingLeft: '4px',
                  borderLeft: '1px solid #b1a3c6',
                  textDecoration: 'none ',
                  MozTextDecoration: 'none',
                  WebkitTextDecoration: 'none',
                }}
              >
                {data.mobile && (
                  <>
                    <span
                      style={{
                        color: '#7f7f7f',
                        textDecoration: 'none ',
                        MozTextDecoration: 'none',
                        WebkitTextDecoration: 'none',
                      }}
                    >
                      +56{' '}
                    </span>
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
                  fontSize: '13px',
                  color: '#7f7f7f',
                  textDecoration: 'none',
                  MozTextDecoration: 'none',
                  WebkitTextDecoration: 'none',
                }}
              >
                <span
                  style={{
                    color: '#7f7f7f',
                    textDecoration: 'none',
                    MozTextDecoration: 'none',
                    WebkitTextDecoration: 'none',
                  }}
                >
                  {data.email ? data.email : ''}
                </span>
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
                  fontSize: '13px',
                  textDecoration: 'none',
                  MozTextDecoration: 'none',
                  WebkitTextDecoration: 'none',
                }}
              >
                <span
                  style={{
                    color: '#7f7f7f',
                    textDecoration: 'none',
                    MozTextDecoration: 'none',
                    WebkitTextDecoration: 'none',
                  }}
                >
                  www.cfccapital.cl
                </span>
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
                      src="FC-20years.png"
                      // src="http://imgfz.com/i/nyzoSjk.png"
                      alt="20yrs"
                      width="43"
                      height="36"
                      style={{
                        maxWidth: '43px',
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
                      src="FC-40hrs.png"
                      // src="http://imgfz.com/i/fBTnlJV.png"
                      alt="40hrs"
                      width="55"
                      height="30"
                      style={{
                        maxWidth: '55px',
                      }}
                    />
                  </td>
                  <td>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="FC-Efa.png"
                      // src="http://imgfz.com/i/6FLI3kX.png"
                      alt="EFA logo"
                      width="50"
                      height="33"
                      style={{
                        maxWidth: '50px',
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
