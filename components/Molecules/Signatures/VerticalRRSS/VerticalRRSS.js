import { formatPhoneNumberString } from '@/utils';
import styles from './styles.module.css';

const VerticalRRSS = ({
  data,
  children,
  direccion,
  urlMaps,
  socialLinks: { instagram, linkedin, facebook },
}) => (
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
          {/* Renderiza los elementos hijos proporcionados */}
          {children}
          {direccion && (
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
          borderLeft: '1px solid #b1a3c6', // Cambia el color y el estilo según sea necesario
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
                paddingBottom: '15px',
              }}
            >
              <p
                style={{
                  fontSize: '12px',
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
                paddingBottom: '15px',
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: '#7f7f7f',
                  fontSize: '14px',
                  textDecoration: 'none',
                }}
              >
                <span>+56 </span>
                {data.phone ? formatPhoneNumberString(data.phone) : ''}
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
                    <a href={instagram}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        // src="http://imgfz.com/i/hOvwWV4.png"
                        src="Firma-IG.png"
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
                    <a href={linkedin}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        // src="http://imgfz.com/i/eH1lTpb.png"
                        src="Firma-IN.png"
                        alt="LinkedIn"
                        width="24"
                        height="24"
                      />
                    </a>
                  </td>
                  <td>
                    <a href={facebook}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        // src="http://imgfz.com/i/H8mELlU.png"
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
        </table>
      </td>
    </tr>
  </tbody>
);

export default VerticalRRSS;
