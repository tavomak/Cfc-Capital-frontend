import Image from 'next/image'
import { FaRegEnvelope, FaWhatsapp, FaRegDotCircle, FaFacebookSquare, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-dark-blue py-5" style={{ borderTop: '4px solid #212529' }}>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-6 text-white">
            <Image src="/footer-logo.png" alt="Cfc Capital Logo" width={220} height={66} />
            <p>Somos una empresa de servicios financieros especializada en el segmento de empresas PYME del país, presentes en el mercado desde el año 2003.</p>
            <p>Todos los derechos reservados CFC Capital S.A.</p>
          </div>
          <div className="col-md-3 text-white">
            <h5 className="text-uppercase">Contacto</h5>
            <ul>
              <li>
                <ul className="d-flex">
                  <li className="me-3">
                    <FaRegEnvelope />
                  </li>
                  <li>
                    <a href="mailto:contacto@cfccapital.cl" className="text-white">contacto@cfccapital.cl</a>
                  </li>
                </ul>
              </li>
              <li>
                <ul className="d-flex">
                  <li className="me-3">
                    <FaWhatsapp />
                  </li>
                  <li>
                    <a href="mailto:contacto@cfccapital.cl" className="text-white">+56228201100 | +56228201158</a>
                  </li>
                </ul>
              </li>
              <li>
                <ul className="d-flex">
                  <li className="me-3">
                    <FaRegDotCircle />
                  </li>
                  <li>
                    <a href="mailto:contacto@cfccapital.cl" className="text-white">contacto@cfccapital.cl</a>
                  </li>
                </ul>
              </li>
              <li>
                <ul className="d-flex">
                  <li className="me-3">
                    <FaLinkedin />
                  </li>
                  <li>
                    <a href="mailto:contacto@cfccapital.cl" className="text-white">contacto@cfccapital.cl</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;