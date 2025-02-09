import Image from 'next/image';
import Link from 'next/link';
import Hamburger from '@/components/Molecules/Hamburger';
import Card from '@/components/Atoms/Card';
import FactoringIcon from '@/components/Atoms/FactoringIcon';
import LeasingIcon from '@/components/Atoms/LeasingIcon';
import LeasebackIcon from '@/components/Atoms/LeasebackIcon';

const MobileNavigation = ({
  menuOpen = false,
  setMenuOpen,
  navItems,
  handleClick,
  handleClickModal,
}) => (
  <nav
    className="container relative flex items-center justify-between mx-auto md:px-4"
    aria-label="Global"
  >
    <Link href="/" className="z-30">
      <Image
        src="/logo-cfc.svg"
        alt="Cfc Capital Logo"
        width={190}
        height={41}
        style={{
          width: '190px',
          height: 'auto',
        }}
        priority
      />
    </Link>
    <Hamburger open={menuOpen} setOpen={setMenuOpen} />
    <ul
      className={`px-8 flex flex-col gap-1 justify-center fixed w-screen h-screen left-0 top-0 transition-all bg-white ${menuOpen ? 'top-0' : 'top-[-120%]'}`}
    >
      <div className="mt-12 sm:mt-0">
        {navItems
          .filter((item) => item.label !== 'Factoring')
          .map((item) => (
            <li
              className="text-base display-font font-semibold text-blue"
              key={item.label}
            >
              {item.children?.length > 1 ? (
                <>
                  <Link href={item.path}>
                    <p className="mb-1">{item.label}</p>
                  </Link>
                  {item.children.map((subItem) => (
                    <div
                      key={subItem.path}
                      className="ml-4 primary-font font-medium text-sm"
                    >
                      <a
                        href={subItem.path}
                        onClick={(e) => {
                          setMenuOpen(false);
                          handleClick(e, subItem.label, subItem.path);
                        }}
                      >
                        <p className="mb-1">{subItem.label}</p>
                      </a>
                      {subItem.subnav && subItem.subnav.length > 0 && (
                        <div>
                          {subItem.subnav.map((subnavItem) => (
                            <a
                              key={subnavItem.path}
                              href={subnavItem.path}
                              onClick={(e) => {
                                setMenuOpen(false);
                                handleClick(
                                  e,
                                  subnavItem.label,
                                  subnavItem.path
                                );
                              }}
                            >
                              <p className="mb-1">{subnavItem.label}</p>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </>
              ) : (
                <Link href={item.path}>
                  <p className="mb-1">{item.label}</p>
                </Link>
              )}
            </li>
          ))}
      </div>

      <div className="my-6">
        <Card
          cardClassName="rounded-xl shadow-lg py-2 px-8"
          containerClassName="w-full mb-4"
        >
          <a
            href="!#"
            className="text-medium-blue"
            onClick={(e) => {
              setMenuOpen(false);
              handleClick(e, 'Factoring', '/servicios/factoring');
            }}
          >
            <div className="w-16 h-16 block">
              <FactoringIcon />
            </div>
            <h1 className="display-font font-semibold">Factoring</h1>
          </a>
        </Card>
        <div className="flex gap-12">
          <Card
            cardClassName="rounded-xl shadow-lg p-6"
            containerClassName="w-full"
          >
            <a
              href="!#"
              className="text-soft-blue"
              onClick={(e) => {
                setMenuOpen(false);
                handleClick(e, 'Factoring', '/servicios/leasing');
              }}
            >
              <div className="w-16 h-16 block">
                <LeasingIcon />
              </div>
              <h1 className="display-font font-semibold">Leasing</h1>
            </a>
          </Card>
          <Card
            cardClassName="rounded-xl shadow-lg p-6"
            containerClassName="w-full"
          >
            <a
              href="!#"
              className="text-medium-purple"
              onClick={(e) => {
                setMenuOpen(false);
                handleClick(e, 'Factoring', '/servicios/leaseback');
              }}
            >
              <div className="w-16 h-16 block">
                <LeasebackIcon />
              </div>
              <h1 className="display-font font-semibold">Leaseback</h1>
            </a>
          </Card>
        </div>
      </div>

      <ul className="flex gap-2 justify-between xl:gap-4">
        <li>
          <a
            href="!#"
            className="py-3 inline-block btn btn-primary"
            onClick={handleClickModal}
          >
            Acceso Clientes
          </a>
        </li>
        <li>
          <a
            href="http://cfc.fapro.app/"
            target="_blank"
            className="py-3 inline-block btn btn-secondary"
            rel="noreferrer"
          >
            Enrólate aquí
          </a>
        </li>
      </ul>

      <Link href="/canal-de-denuncias" className="my-4">
        <p className="text-base display-font text-blue">Canal de denuncias</p>
      </Link>

      <button
        type="button"
        className="h-14 w-14 z-20 mx-auto"
        aria-label="Close"
        onClick={() => setMenuOpen(false)}
      >
        <div className="relative">
          <span className="absolute top-1/2 left-1/2 h-1 w-8 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-medium-purple" />
          <span className="absolute top-1/2 left-1/2 h-1 w-8 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-medium-purple" />
        </div>
      </button>
    </ul>
  </nav>
);

export default MobileNavigation;
