import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  FaRegEnvelope,
  FaPhone,
  FaLocationDot,
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
          label: '¿Que es?',
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
    <footer className="bg-gradient-to-r from-dark-blue to-purple text-white">
      <div className="mx-auto container px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <ul className="w-full flex gap-2">
              <li>
                <Link href="/">
                  <Image
                    src="/cfc-footer-logo.svg"
                    alt="Cfc Capital Logo"
                    width={100}
                    height={100}
                    priority
                  />
                </Link>
              </li>
              <li>
                <a href="https://efa.cl/" target="_blank">
                  <Image
                    src="/efa-logo.svg"
                    alt="Efa Logo"
                    width={100}
                    height={100}
                    priority
                  />
                </a>
              </li>
            </ul>
            <a
              className="mt-4 flex gap-2 transition hover:opacity-75"
              href="https://maps.app.goo.gl/fqshTCpLzfMJZKKV7"
              target="_blank"
            >
              <FaLocationDot />
              <small>
                El Bosque Central 92, piso 11, Las Condes,
                <br /> Región Metropolitana, Chile
              </small>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4 border-t border-white lg:border-none pt-4">
            {navItems.length &&
              navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.path}
                    className="transition hover:opacity-75"
                  >
                    <p className="font-bold mb-6">{item.label}</p>
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
                <p className="font-bold mb-6">Contacto</p>
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

        <ul className="flex space-x-8 lg:space-x-24 py-4 text-2xl border-t border-white lg:border-none pt-4 mt-4 lg:mt-0">
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
        </ul>

        <div className="border-t border-white pt-4">
          <div className="sm:flex sm:justify-between">
            <p className="text-xs text-white">
              &copy; 2024. CFC Capital. Todos los derechos reservados.
            </p>

            <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end hidden">
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
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
