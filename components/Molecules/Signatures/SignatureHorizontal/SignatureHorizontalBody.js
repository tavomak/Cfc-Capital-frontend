// SignatureBody.jsx
import { formatPhoneNumberString } from '@/utils';
import styles from './styles.module.css';

const SignatureHorizontalBody = ({ data, direccion, urlMaps }) => (
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
              <td align="left" width="200" style={{ verticalAlign: 'middle' }}>
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
            {direccion}
          </a>
        </p>
      </td>
    </tr>
  </tbody>
);

export default SignatureHorizontalBody;
