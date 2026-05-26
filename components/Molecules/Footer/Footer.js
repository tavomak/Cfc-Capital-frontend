import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  FaRegEnvelope,
  FaPhone,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa6';

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
        },
        {
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
          label: '¿Qué es?',
          path: '/servicios/factoring#que-es-factoring',
        },
        {
          label: '¿Cómo funciona?',
          path: '/servicios/factoring#como-funciona-factoring',
        },
        {
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
        },
        {
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
    <footer className="text-white bg-linear-to-r from-dark-blue to-medium-purple">
      <div className="container px-4 py-16 mx-auto sm:px-6">
        <div className="gap-8 md:flex">
          <div className="flex flex-wrap items-center justify-center gap-8 md:flex-col lg:gap-2 md:items-start md:justify-start md:w-1/4 xl:w-2/4">
            <div className="mb-4">
              <Link href="/">
                <Image
                  src="/cfc-horizontal.png"
                  alt="Cfc Capital Logo"
                  width={500}
                  height={88}
                  priority
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: '250px',
                    maxHeight: '100px',
                    objectFit: 'contain',
                  }}
                />
              </Link>
            </div>

            <ul className="flex items-center justify-around w-full gap-6 mb-4 max-w-64">
              <li className="w-1/3">
                <Link href="/">
                  <Image
                    src="/20-años.svg"
                    alt="Logo edición 20 aniversario"
                    width={50}
                    height={40}
                    priority
                  />
                </Link>
              </li>

              <li className="w-1/3">
                <Link href="/">
                  <Image
                    src="/logo-40hrs.svg"
                    alt="Logo 40 horas"
                    width={100}
                    height={100}
                    priority
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: '60px',
                      maxHeight: '120px',
                      objectFit: 'contain',
                      margin: '0 auto',
                    }}
                  />
                </Link>
              </li>

              <li className="w-1/3">
                <a href="https://efa.cl/" target="_blank">
                  <Image
                    src="/logo-efa.svg"
                    alt="Efa Logo"
                    width={100}
                    height={100}
                    priority
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: '60px',
                      maxHeight: '120px',
                      objectFit: 'contain',
                      margin: '0 auto',
                    }}
                  />
                </a>
              </li>
            </ul>

            <a
              className="block w-full mb-4 text-center transition hover:opacity-75 md:text-left"
              href="https://maps.app.goo.gl/fqshTCpLzfMJZKKV7"
              target="_blank"
            >
              <span className="text-sm">Av. El Bosque 92, piso 11, </span>
              <br className="xl:hidden" />
              <span className="text-sm">Las Condes, Chile.</span>
            </a>
          </div>

          <div className="flex flex-wrap py-4 border-t border-white md:w-3/4 md:py-0 lg:border-none">
            {navItems.length &&
              navItems.map((item) => (
                <div key={item.label} className="w-2/4 py-4 md:w-1/4">
                  <Link
                    href={item.path}
                    className="transition hover:opacity-75"
                  >
                    <p className="mb-6 font-bold">{item.label}</p>
                  </Link>
                  {item.children?.length > 1 && (
                    <ul className="space-y-4 text-sm">
                      {item.children.map((subItem) => (
                        <li key={subItem.path}>
                          <a
                            href={subItem.path}
                            onClick={(e) =>
                              handleClick(e, subItem.label, subItem.path)
                            }
                            className="transition hover:opacity-75"
                          >
                            <small>{subItem.label}</small>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            <div className="w-2/4 py-4 md:w-1/4">
              <Link href="/contacto" className="transition hover:opacity-75">
                <p className="mb-6 font-bold">Contacto</p>
              </Link>
              <ul className="space-y-4 text-sm">
                <li>
                  <ul className="flex items-center transition hover:opacity-75">
                    <li className="me-3">
                      <FaRegEnvelope />
                    </li>
                    <li>
                      <a href="mailto:contacto@cfccapital.cl">
                        <small>contacto@cfccapital.cl</small>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className="flex items-center transition hover:opacity-75">
                    <li className="me-3">
                      <FaPhone />
                    </li>
                    <li>
                      <a href="tel:+56228201100">
                        <small>+56 2 2820 1100</small>
                      </a>
                      <br />
                      <a href="tel:+56228201158">
                        <small>+56 2 2820 1158</small>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className="flex items-center transition hover:opacity-75">
                    <li className="me-3">
                      <FaRegEnvelope />
                    </li>
                    <li className="text-sm">
                      <p>
                        <Link href="/canal-de-denuncias">
                          <small>Canal de Denuncias</small>
                        </Link>
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ul className="items-center justify-center gap-8 pt-4 mx-auto mt-4 text-2xl border-t border-white md:mt-0 lg:flex">
          <div className="flex justify-center gap-8 mb-2 lg:mb-0">
            <li>
              <a
                href="https://www.facebook.com/cfccapitalchile/"
                target="_blank"
                className="transition hover:opacity-75"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/cfc-capital-s-a/"
                target="_blank"
                className="transition hover:opacity-75"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/cfc_capital"
                target="_blank"
                className="transition hover:opacity-75"
              >
                <FaInstagram />
              </a>
            </li>
          </div>
          <div className="text-center">
            <p className="text-xs text-white">
              &copy; 2024. CFC Capital. Todos los derechos reservados.
            </p>
            {/* 
            <ul className="flex flex-wrap justify-start gap-4 mt-8 text-xs sm:mt-0 lg:justify-end">
              <li>
                <Link
                  href="/terminos-y-condiciones"
                  className="transition hover:opacity-75"
                >
                  Términos y Condiciones
                </Link>
              </li>

              <li>
                <Link
                  href="/politica-de-privacidad"
                  className="transition hover:opacity-75"
                >
                  Políticas de privacidad
                </Link>
              </li>

              <li>
                <Link href="/cookies" className="transition hover:opacity-75">
                  Cookies
                </Link>
              </li>
            </ul> */}
          </div>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
