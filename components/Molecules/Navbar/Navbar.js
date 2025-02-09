import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { navItems } from '@/utils';
import Modal from '@/components/Templates/Modal';
import FormAccess from '@/components/Molecules/Forms/FromAccess';
import MobileNavigation from '../MobileNavigation';
import DesktopNavigation from '../DesktopNavigation';

const Navbar = () => {
  const [modal, setModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);

  const router = useRouter();
  const handleModal = () => {
    setModal(!modal);
  };
  const handleClick = (e, label, path) => {
    e.preventDefault();
    if (path === '/servicios/factoring-web' || label === 'Factoring web') {
      window.open('/cfc_paso_a_paso.pdf', '_ blank');
    } else {
      router.push(`${path}`);
    }
  };
  const handleClickModal = (e) => {
    e.preventDefault();
    setModal(true);
    setMenuOpen(false);
  };

  const itemActive = (path) => {
    if (path === '/servicios') {
      return (
        router.asPath.startsWith('/servicios') &&
        router.asPath !== '/servicios/factoring'
      );
    }
    if (path === '/prensa')
      return (
        router.asPath === '/prensa' || router.pathname.startsWith('/prensa/')
      );

    return router.asPath === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    if (viewportWidth === 0) handleResize();

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [viewportWidth]);
  return (
    <>
      <header
        className={`transition relative z-20 p-2 ${scrollTop > 150 ? 'bg-white sticky top-0 shadow-xl' : ''}`}
      >
        {viewportWidth < 1024 ? (
          <MobileNavigation
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            navItems={navItems}
            itemActive={itemActive}
            handleClick={handleClick}
            handleClickModal={handleClickModal}
          />
        ) : (
          <DesktopNavigation
            navItems={navItems}
            itemActive={itemActive}
            showSubMenu={showSubMenu}
            setShowSubMenu={setShowSubMenu}
            handleClick={handleClick}
            handleClickModal={handleClickModal}
          />
        )}
      </header>
      <Modal showModal={modal} onClick={handleModal}>
        <FormAccess />
      </Modal>
    </>
  );
};

export default Navbar;
