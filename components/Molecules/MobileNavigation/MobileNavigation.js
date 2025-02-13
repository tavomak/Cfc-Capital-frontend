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
}) => {
  const handleClose = () => {
    document.body.classList.remove('modal-active');
    setMenuOpen(false);
  };

  return (
    <nav
      className="container relative flex items-center justify-between mx-auto md:px-4"
      aria-label="Global"
    >
      <Link href="/" className="z-40">
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

      <div
        className={`fixed inset-0 bg-white transition-all  duration-300 ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="h-14" />
          <div className="flex-1 overflow-y-auto px-8">
            <ul className="flex flex-col gap-1">
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
                          <Link href={item.path} onClick={handleClose}>
                            <p className="mb-1 text-left">{item.label}</p>
                          </Link>
                          {item.children.map((subItem) => (
                            <div
                              key={subItem.path}
                              className="ml-4 primary-font font-medium text-sm"
                            >
                              <a
                                href={subItem.path}
                                onClick={(e) => {
                                  handleClose();
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
                                        handleClose();
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
                        <Link href={item.path} onClick={handleClose}>
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
                      handleClose();
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
                        handleClose();
                        handleClick(e, 'Leasing', '/servicios/leasing');
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
                        handleClose();
                        handleClick(e, 'Leaseback', '/servicios/leaseback');
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

              <Link
                href="/canal-de-denuncias"
                className="my-4"
                onClick={handleClose}
              >
                <p className="text-base display-font text-blue">
                  Canal de denuncias
                </p>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavigation;
