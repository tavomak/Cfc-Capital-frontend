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
  const [viewportWidth, setViewportWidth] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  const router = useRouter();
  const handleModal = () => {
    setModal(!modal);
  };

  const handleClick = (e, label, path) => {
    e.preventDefault();
    document.body.classList.remove('modal-active');
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
    let lastScrollTop = 0;
    let scrollTimeout;

    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      setIsScrollingDown(currentScrollTop > lastScrollTop);
      lastScrollTop = currentScrollTop;

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      scrollTimeout = setTimeout(() => {
        setIsScrollingDown(false);
      }, 500);
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

  const handleMenuOpen = (open) => {
    setMenuOpen(open);
    if (open) {
      document.body.classList.add('modal-active');
    } else {
      document.body.classList.remove('modal-active');
    }
  };

  return (
    <>
      <header
        className={`transition-all duration-500 ease-in-out sticky top-0 bg-white z-20 p-2 ${
          isScrollingDown ? '-translate-y-full' : ''
        }`}
      >
        {viewportWidth < 1024 ? (
          <MobileNavigation
            menuOpen={menuOpen}
            setMenuOpen={handleMenuOpen}
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
