import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import router from 'next/router'
import Link from 'next/link';
import Image from 'next/image';
import Modal from 'components/Templates/Modal';
import FormAccess from 'components/Molecules/FromAccess';
import styles from './styles.module.scss';

const Navbar = () => {
  const links = [
    {
      name: 'Home',
      route: '/',
      children: false,
    },
    {
      name: 'CFC',
      route: '/cfc',
      children: false,
    },
    {
      name: 'Servicios',
      route: '/servicios',
      children: [
        {
          name: 'Factoring',
          route: '/servicios/factoring',
        },
        {
          name: 'Factoring web',
          route: '/servicios/CFC-PasoaPaso.pdf',
        },
        {
          name: 'Leasing',
          route: '/servicios/leasing',
        }, {
          name: 'Leaseback',
          route: '/servicios/leaseback',
        },
      ],
    },
    {
      name: 'Prensa',
      route: '/prensa',
      children: false,
    },
    {
      name: 'Contacto',
      route: '/contacto',
      children: false,
    },
  ];
  const [modal, setModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const handleClick = (e, name, route) => {
    e.preventDefault();
    if(name === 'Factoring web') {
      window.open ('/CFC-PasoaPaso.pdf', '_ blank');
    } else {
      router.push(`${route}`)
    }
  };
  const handleClickModal = (e) => {
    e.preventDefault();
    setModal(true);
  };
  const handleMouseEnter = (e, selected) => {
    if (selected === 'Servicios') {
      setShowSubMenu(true);
    }
  }
  return (
    <>
      <header className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <Link href="/">
              <a className={`navbar-brand ${styles.primaryNav}`} href="#">
                <Image
                  src="/cfc-logo.png"
                  alt="Cfc Capital Logo"
                  width={15}
                  height={3}
                  layout="responsive"
                  objectFit="contain"
                />
              </a>
            </Link>
            <button className={`d-lg-none hamburger hamburger--emphatic ${menuOpen ? 'is-active' : ''}`} type="button" onClick={() => setMenuOpen(!menuOpen)} >
              <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
              </span>
            </button>
            <div className={`collapse navbar-collapse text-center ${menuOpen ? 'show' : ''}`} id="navbarTogglerDemo02">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {links.length && links.map((item) => (
                  <li className="nav-item position-relative" key={item.name} onMouseEnter={(e) => handleMouseEnter(e, item.name)} onMouseLeave={() => setShowSubMenu(false)}>
                    <Link href={item.route}>
                      <a className="nav-link text-uppercase text-dark-blue" href={item.route}>
                        <p className="mb-0 display-font">
                          <b>
                            {item.name}
                          </b>
                        </p>
                      </a>
                    </Link>
                    {item.children?.length > 1 && (
                        <CSSTransition
                          in={showSubMenu}
                          timeout={300}
                          classNames="alert"
                          unmountOnExit
                        >
                        <ul className={`${styles.submenu}`}>
                          {item.children.map((subItem) => (
                            <li className="py-2" key={subItem.route}>
                              <a href={subItem.route} onClick={(e) => handleClick(e, subItem.name, subItem.route)}>
                                {subItem.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </CSSTransition>
                    )}
                  </li>
                ))}
                <li className="nav-item">
                  <a
                    className="nav-link text-uppercase btn btn-primary text-white display-font"
                    href="!#"
                    onClick={handleClickModal}
                  >
                    Acceso Clientes
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <Modal
        showModal={modal}
        onClick={(e) => { e.preventDefault(); setModal(false); }}
      >
        <FormAccess />
      </Modal>
    </>
  );
};

export default Navbar;
