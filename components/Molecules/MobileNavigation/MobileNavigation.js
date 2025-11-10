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
        <div className="flex flex-col h-full">
          <div className="h-14" />
          <div className="flex-1 px-8 overflow-y-auto">
            <ul className="flex flex-col gap-1">
              <div className="mt-12 sm:mt-0">
                {navItems
                  .filter((item) => item.label !== 'Factoring')
                  .map((item) => (
                    <li
                      className="text-base font-semibold display-font text-blue"
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
                              className="ml-4 text-sm font-medium primary-font"
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
                    <div className="block w-16 h-16">
                      <FactoringIcon />
                    </div>
                    <h1 className="font-semibold display-font">Factoring</h1>
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
                      <div className="block w-16 h-16">
                        <LeasingIcon />
                      </div>
                      <h1 className="font-semibold display-font">Leasing</h1>
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
                      <div className="block w-16 h-16">
                        <LeasebackIcon />
                      </div>
                      <h1 className="font-semibold display-font">Leaseback</h1>
                    </a>
                  </Card>
                </div>
              </div>

              <ul className="flex justify-between gap-2 xl:gap-4">
                <li>
                  <a
                    href="!#"
                    className="inline-block py-3 btn btn-primary"
                    onClick={(e) => handleClickModal(e, true)}
                  >
                    Acceso Clientes
                  </a>
                </li>
                <li>
                  <a
                    href="https://cfccapital.enrolador.cl/"
                    className="inline-block py-3 btn btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
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
