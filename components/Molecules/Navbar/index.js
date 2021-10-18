import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Modal from 'components/Templates/Modal'
import FormAccess from 'components/Molecules/FromAccess'
import styles from './styles.module.scss'

const Navbar = () => {
  const links = [
    {
      name: 'Home',
      route: '/',
    },
    {
      name: 'CFC',
      route: '/cfc',
    },
    {
      name: 'Servicios',
      route: '/servicios',
    },
    {
      name: 'Prensa',
      route: '/prensa',
    },
    {
      name: 'Contacto',
      route: '/contacto',
    },
  ];
  const [modal, setModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setModal(true);
  };
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
                  <li className="nav-item" key={item.name}>
                    <Link href={item.route}>
                      <a className="nav-link text-uppercase text-dark-blue" href={item.route}>
                        <p className="mb-0 display-font">
                          <b>
                            {item.name}
                          </b>
                        </p>
                      </a>
                    </Link>
                  </li>
                ))}
                <li className="nav-item">
                  <a
                    className="nav-link text-uppercase btn btn-primary text-white display-font"
                    href="!#"
                    onClick={handleClick}
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
