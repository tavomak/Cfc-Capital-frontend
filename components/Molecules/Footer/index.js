import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  FaRegEnvelope, FaPhone, FaRegDotCircle, FaFacebook, FaLinkedin, FaInstagram,
} from 'react-icons/fa';
import styles from './styles.module.scss';

const Footer = () => {
  const navItems = [
    {
      label: 'Inicio',
      path: '/',
      children: [
        {
          label: 'Nosotros',
          path: '/cfc',
        },
        {
          label: 'Contacto',
          path: '/contacto',
        }, {
          label: 'Gerencia',
          path: '/cfc#gerencia',
        },
      ],
    },
    {
      label: 'Factoring',
      path: '/servicios/factoring',
      children: [
        {
          label: '¿Que es?',
          path: '/servicios/factoring#que-es-factoring',
        },
        {
          label: '¿Cómo funciona?',
          path: '/servicios/factoring#como-funciona-factoring',
        }, {
          label: 'Saber más',
          path: '/servicios/factoring#saber-mas-factoring',
        },
      ],
    },
    {
      label: 'Servicios',
      path: '/servicios',
      children: [
        {
          label: 'Factoring',
          path: '/servicios/factoring',
        },
        {
          label: 'Factoring web',
          path: '/servicios/cfc_paso_a_paso.pdf',
        },
        {
          label: 'Leasing',
          path: '/servicios/leasing',
        }, {
          label: 'Leaseback',
          path: '/servicios/leaseback',
        },
      ],
    },
  ];
  const router = useRouter();
  const handleClick = (e, label, path) => {
    e.preventDefault();
    if (label === 'Factoring web') {
      window.open('/cfc_paso_a_paso.pdf', '_ blank');
    } else {
      router.push(`${path}`);
    }
  };
  return (
    <footer className={`bg-soft-purple py-5 ${styles.footer}`}>
      <section className="container">
        <div className="row justify-content-between">
          <div className="col-md-3 text-white">
            <ul className={`${styles.footerFs}`}>
              <li>
                <Image src="/footer-logos.png" alt="Cfc Capital Logo" width={332} height={100} />
              </li>
              <li className="py-4">
                <ul className="d-flex">
                  <li className="me-3">
                    <FaRegDotCircle />
                  </li>
                  <li>
                    <a href="https://goo.gl/maps/2nH53YZL7SBkM3eSA" className="text-white fw-lighter">El Bosque Central 92, piso 11, Las Condes, Región Metropolitana, Chile</a>
                  </li>
                </ul>
              </li>
              <li>
                <p className="fw-lighter d-none d-md-block">
                  <small>Todos los derechos reservados CFC Capital S.A.</small>
                </p>
              </li>
            </ul>
          </div>
          <div className="col-md-6 d-none d-md-block">
            <ul className={`d-flex w-100 justify-content-between px-md-5 ${styles.footerFs}`}>
              {navItems.length && navItems.map((item) => (
                <li className="nav-item position-relative" key={item.label}>
                  <Link href={item.path}>
                    <a href={item.path} className="nav-link text-white">
                      <p className="mb-0 display-font fs-5">
                        {item.label}
                      </p>
                    </a>
                  </Link>
                  {item.children?.length > 1 && (
                    <ul className={`${styles.submenu} text-white`}>
                      {item.children.map((subItem) => (
                        <li className="py-2" key={subItem.path}>
                          <a
                            href={subItem.path}
                            onClick={(e) => handleClick(e, subItem.label, subItem.path)}
                            className="text-white fw-lighter"
                          >
                            {subItem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-3 text-white">
            <p className="mb-0 display-font fs-5">Contacto</p>
            <ul>
              <li className="py-2">
                <ul className="d-flex">
                  <li className="me-3">
                    <FaRegEnvelope />
                  </li>
                  <li className="fw-lighter">
                    <a href="mailto:contacto@cfccapital.cl" className="text-white">
                      contacto@cfccapital.cl
                    </a>
                  </li>
                </ul>
              </li>
              <li className="py-2">
                <ul className="d-flex">
                  <li className="me-3">
                    <FaPhone />
                  </li>
                  <li className="fw-lighter">
                    <a href="tel:+56228201100" className="text-white">+56 2 2820 1100</a>
                    <span> | </span>
                    <a href="tel:+56228201158" className="text-white">+56 2 2820 1158</a>
                  </li>
                </ul>
              </li>
              <li className="py-2">
                <ul className="d-flex">
                  <li className="me-3">
                    <FaRegEnvelope />
                  </li>
                  <li className="fw-lighter">
                    <p>
                      <Link href="/formulario-denuncias">
                        <a href="!#" className="text-white">
                          <small>
                            Formulario de denuncias Ley Nº 20.393
                          </small>
                        </a>
                      </Link>
                    </p>
                  </li>
                </ul>
              </li>
              <li className="py-2">
                <ul className={`d-flex ${styles.social}`}>
                  <li className={styles.socialListItem}>
                    <a href="https://www.facebook.com/cfccapitalchile/" className={`text-white ${styles.icon}`}>
                      <FaFacebook />
                    </a>
                  </li>
                  <li className={styles.socialListItem}>
                    <a href="https://www.linkedin.com/company/cfc-capital-s-a/" className={`text-white ${styles.icon}`}>
                      <FaLinkedin />
                    </a>
                  </li>
                  <li className={styles.socialListItem}>
                    <a href="https://www.instagram.com/cfc_capital" className={`text-white ${styles.icon}`}>
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
