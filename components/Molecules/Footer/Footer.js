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
    <footer className="text-white bg-gradient-to-r from-dark-blue to-purple">
      <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <ul className="w-3/5 mx-auto lg:mx-0">
              <li className="mb-4">
                <Link href="/">
                  <Image
                    src="/cfc-horizontal.png"
                    alt="Cfc Capital Logo"
                    width={450}
                    height={88}
                    priority
                  />
                </Link>
              </li>
              <div className="flex items-center justify-center gap-8 lg:justify-between">
                <li>
                  <Link href="/">
                    <Image
                      src="/20-años.svg"
                      alt="Logo edición 20 aniversario"
                      width={80}
                      height={80}
                      priority
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <Image
                      src="/logo-40hrs.svg"
                      alt="Logo 40 horas"
                      width={100}
                      height={100}
                      priority
                    />
                  </Link>
                </li>
                <li>
                  <a href="https://efa.cl/" target="_blank">
                    <Image
                      src="/logo-efa.svg"
                      alt="Efa Logo"
                      width={100}
                      height={100}
                      priority
                    />
                  </a>
                </li>
              </div>
            </ul>
            <a
              className="flex justify-center lg:justify-start gap-2 mt-4 transition hover:opacity-75"
              href="https://maps.app.goo.gl/fqshTCpLzfMJZKKV7"
              target="_blank"
            >
              <small>
                El Bosque Central 92, piso 11, Las Condes,
                <br /> Región Metropolitana, Chile
              </small>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-4 border-t border-white sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4 lg:border-none">
            {navItems.length &&
              navItems.map((item) => (
                <div key={item.label}>
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
            <div>
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
        <ul className="lg:flex gap-8 w-11/12 mx-auto justify-center items-center border-t border-white pt-4 mt-4 text-2xl">
          <div className="flex gap-8 justify-center mb-2 lg:mb-0">
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
            <ul className="flex flex-wrap justify-start  gap-4 mt-8 text-xs sm:mt-0 lg:justify-end">
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
