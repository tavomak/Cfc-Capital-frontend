import Image from 'next/image';
import Link from 'next/link';
import { FaRegEnvelope, FaWhatsapp, FaRegDotCircle, FaFacebookSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark-blue py-5" style={{ borderTop: '4px solid #212529' }}>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-6 text-white">
            <Image src="/footer-logo.png" alt="Cfc Capital Logo" width={220} height={66} />
            <p>
              <small>
                Somos una empresa de servicios financieros especializada en el segmento de empresas PYME del país, presentes en el mercado desde el año 2003.
              </small>
            </p>
            <p>
              <small>Todos los derechos reservados CFC Capital S.A.</small>
            </p>
          </div>
          <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3 text-white">
            <h3 className="text-uppercase fs-5"><small>Contacto</small></h3>
            <ul>
              <li>
                <ul className="d-flex">
                  <li className="me-3">
                    <FaRegEnvelope />
                  </li>
                  <li>
                    <a href="mailto:contacto@cfccapital.cl" className="text-white">
                      <small>
                        contacto@cfccapital.cl
                      </small>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <ul className="d-flex">
                  <li className="me-3">
                    <FaWhatsapp />
                  </li>
                  <li>
                    <a href="tel:+56228201100" className="text-white"><small>+56228201100</small></a>
                    <span> | </span>
                    <a href="tel:+56228201158" className="text-white"><small>+56228201158</small></a>
                  </li>
                </ul>
              </li>
              <li>
                <ul className="d-flex">
                  <li className="me-3">
                    <FaRegDotCircle />
                  </li>
                  <li>
                    <a href="https://goo.gl/maps/2nH53YZL7SBkM3eSA" className="text-white"><small>El Bosque Central 92, piso 11, Las Condes, Región Metropolitana, Chile</small></a>
                  </li>
                </ul>
              </li>
              <li className="mt-4">
                <ul className="d-flex">
                  <li className="me-3">
                  <FaRegEnvelope />
                  </li>
                  <li>
                    <p>
                      <Link href="/formulario-denuncias">
                        <a href="formulario-denuncias">
                          <small className="text-white">Formulario de denuncias Ley Nº 20.393</small>
                        </a>
                      </Link>
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <ul className="d-flex py-2">
                  <li className="me-3">
                    <FaFacebookSquare />
                    <a href="https://www.facebook.com/cfccapitalchile/" className="text-white"><small> Facebook</small></a>
                  </li>
                  <li className="me-3">
                    <FaLinkedin />
                    <a href="https://www.linkedin.com/company/cfc-capital-s-a/" className="text-white"><small> Linkedin</small></a>
                  </li>
                  <li>
                    <FaInstagramSquare />
                    <a href="https://www.instagram.com/cfc_capital" className="text-white"><small> Instagram</small></a>
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