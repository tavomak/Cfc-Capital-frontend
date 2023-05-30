import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { navItems } from '@data/index';
import Modal from '@components/Templates/Modal';
import FormAccess from '@components/Molecules/FromAccess';
import styles from './styles.module.scss';

const Navbar = () => {
  const [modal, setModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const router = useRouter();
  const handleClick = (e, label, path) => {
    e.preventDefault();
    if (label === 'Factoring web') {
      window.open('/CFC-PasoaPaso.pdf', '_ blank');
    } else {
      router.push(`${path}`);
    }
  };
  const handleClickModal = (e) => {
    e.preventDefault();
    setModal(true);
  };
  const handleMouseEnter = (selected) => {
    if (selected === 'Servicios') {
      setShowSubMenu(true);
    }
  };
  const itemActive = (path) => {
    let underline = false;
    switch (path) {
      case '/':
        underline = router.asPath === '/';
        break;
      case '/cfc':
        underline = router.asPath === '/cfc';
        break;
      case '/servicios/factoring':
        underline = router.asPath === '/servicios/factoring';
        break;
      case '/servicios':
        underline = router.asPath === '/servicios' || router.asPath === '/servicios/leasing' || router.asPath === '/servicios/leaseback';
        break;
      case '/prensa':
        underline = router.asPath === '/prensa' || router.pathname === '/prensa/[slug]';
        break;
      case '/contacto':
        underline = router.asPath === '/contacto';
        break;
      default:
        underline = false;
        break;
    }
    return underline;
  };
  return (
    <>
      <header className={`${styles.header} shadow`}>
        <div className="container">
          <nav className={`navbar navbar-expand-lg navbar-light ${styles.nav}`}>
            <div className="container-fluid">
              <Link
                href="/"
                className={`navbar-brand ${styles.primaryNav}`}
              >
                <a href="!#" className={`navbar-brand ${styles.primaryNav}`}>
                  <Image
                    src="/cfc-logo.png"
                    alt="Cfc Capital Logo"
                    width={208}
                    height={41}
                  />
                </a>
              </Link>
              <button className={`d-lg-none hamburger hamburger--emphatic ${menuOpen ? 'is-active' : ''}`} type="button" onClick={() => setMenuOpen(!menuOpen)}>
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
              <div className={`collapse navbar-collapse text-center ${menuOpen ? 'show' : ''}`} id="navbarTogglerDemo02">
                <ul className="navbar-nav justify-content-center w-100 mb-2 mb-lg-0">
                  {navItems && navItems.length && navItems.map((item) => (
                    <li className="nav-item position-relative" key={item.label} onMouseEnter={() => handleMouseEnter(item.label)} onMouseLeave={() => setShowSubMenu(false)} style={{ minWidth: 92 }}>
                      <Link
                        href={item.path}
                      >
                        <a
                          href="!#"
                          className={`nav-link text-dark-blue ${itemActive(item.path) ? styles.underline : styles.navLink}`}
                        >
                          <p className="mb-0 display-font">
                            {item.label}
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
                            <li className="py-2" key={subItem.path}>
                              <a
                                href={subItem.path}
                                onClick={(e) => handleClick(e, subItem.label, subItem.path)}
                              >
                                {subItem.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </CSSTransition>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="ms-lg-auto text-center">
                  <a
                    className={`display-font btn btn-primary ${styles.access}`}
                    href="!#"
                    onClick={handleClickModal}
                  >
                    Acceso Clientes
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
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
