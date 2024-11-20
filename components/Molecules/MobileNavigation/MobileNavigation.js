import Image from 'next/image';
import Link from 'next/link';
import Hamburger from '@/components/Molecules/Hamburger';

const MobileNavigation = ({
  menuOpen = false,
  setMenuOpen,
  navItems,
  handleClick,
  handleClickModal,
}) => {
  return (
    <nav
      className="relative container md:px-4 flex mx-auto items-center justify-between"
      aria-label="Global"
    >
      <Link href="/">
        <Image
          src="/logo-cfc.svg"
          alt="Cfc Capital Logo"
          width={220}
          height={41}
          style={{
            width: '220px',
            height: 'auto',
          }}
          priority
        />
      </Link>
      <Hamburger open={menuOpen} setOpen={setMenuOpen} />
      <ul
        className={`ps-8 flex flex-col gap-1 justify-center fixed w-screen h-screen left-0 top-0 transition-all bg-gray-200 bg-opacity-95 ${menuOpen ? 'top-0' : 'top-[-120%]'}`}
      >
        {navItems
          .filter((item) => item.label !== 'Factoring')
          .map((item) => (
            <li className="font-bold text-xl text-dark-blue" key={item.label}>
              {item.children?.length > 1 ? (
                <>
                  {item.children.map((subItem) => (
                    <a
                      key={subItem.path}
                      href={subItem.path}
                      onClick={(e) => {
                        setMenuOpen(false);
                        handleClick(e, subItem.label, subItem.path);
                      }}
                    >
                      <p className="mb-1">{subItem.label}</p>
                    </a>
                  ))}
                </>
              ) : (
                <Link href={item.path}>
                  <p className="mb-1">{item.label}</p>
                </Link>
              )}
            </li>
          ))}
        <li>
          <a
            onClick={(e) => {
              setMenuOpen(false);
              handleClickModal(e);
            }}
            className=" font-bold text-xl text-dark-blue"
            href="!#"
          >
            Acceso Clientes
          </a>
        </li>
        <li>
          <a
            href="http://cfc.fapro.app/"
            target="_blank"
            className=" font-bold text-xl text-dark-blue"
            rel="noreferrer"
          >
            Enrólate aquí
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavigation;
