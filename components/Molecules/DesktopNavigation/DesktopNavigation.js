import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import FactoringIcon from '@/components/Atoms/FactoringIcon';
import LeasebackIcon from '@/components/Atoms/LeasebackIcon';
import FactoringWebIcon from '@/components/Atoms/FactoringWebIcon';
import LeasingIcon from '@/components/Atoms/LeasingIcon';
import Link from 'next/link';
import Image from 'next/image';
import Card from '@/components/Atoms/Card';
import styles from './styles.module.css';

const DesktopNavigation = ({
  navItems,
  itemActive,
  showSubMenu,
  setShowSubMenu,
  handleClickModal,
  handleClick,
}) => {
  const [subItemActive, setSubItemActive] = useState(null);

  const iconsMapping = {
    factoring: <FactoringIcon />,
    leasing: <LeasingIcon />,
    'factoring-web': <FactoringWebIcon />,
    leaseback: <LeasebackIcon />,
  };

  return (
    <nav
      className="container flex items-center justify-between mx-auto md:px-4"
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
      <ul className="flex gap-4 xl:gap-8">
        {navItems &&
          navItems.length &&
          navItems.map((item) => (
            <li
              key={item.label}
              onMouseEnter={() => setShowSubMenu(item.label)}
              onMouseLeave={() => setShowSubMenu(null)}
            >
              <Link
                href={item.path}
                className={`block display-font font-semibold ${itemActive(item.path) ? styles.underline : styles.navLink}`}
              >
                <p>{item.label}</p>
              </Link>
              {item.children?.length > 1 && (
                <AnimatePresence>
                  {item.label === showSubMenu && (
                    <motion.div
                      initial={{ opacity: 1, transform: 'translateY(-5px)' }}
                      animate={{ opacity: 1, transform: 'translateY(15px)' }}
                      exit={{ opacity: 0, transform: 'translateY(-5px)' }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                      className="absolute left-0 w-screen p-5 mt-1 bg-white border shadow-xl"
                    >
                      <ul className="container flex w-full mx-auto item justify-evenly md:px-4">
                        {item.children.map((subItem) => (
                          <li key={subItem.path} className="w-1/4">
                            <Card
                              containerClassName="w-full h-full text-dark-blue min-h-44"
                              cardClassName={`p-4 ${
                                subItemActive ===
                                subItem.label.replace(' ', '-').toLowerCase()
                                  ? `bg-${subItem.label.replace(' ', '-').toLowerCase()}`
                                  : ''
                              } `}
                            >
                              <a
                                href={subItem.path}
                                onClick={(e) =>
                                  handleClick(e, subItem.label, subItem.path)
                                }
                                onMouseEnter={() =>
                                  setSubItemActive(
                                    subItem.label
                                      .replace(' ', '-')
                                      .toLowerCase()
                                  )
                                }
                                onMouseLeave={() => setSubItemActive(null)}
                                className="group"
                              >
                                <span
                                  className={`text-3xl text-${subItem.label.replace(' ', '-').toLowerCase()} group-hover:text-white w-12 h-12 block`}
                                  style={{
                                    transitionDuration:
                                      'var(--default-transition-duration)',
                                    transitionTimingFunction:
                                      'var(--default-transition-timing-function)',
                                    transitionProperty: 'all',
                                  }}
                                >
                                  {
                                    iconsMapping[
                                      subItem.label
                                        .replace(' ', '-')
                                        .toLowerCase()
                                    ]
                                  }
                                </span>
                                <p className="py-4 font-bold display-font group-hover:text-white">
                                  {subItem.label}
                                </p>
                                <p className="group-hover:text-white">
                                  <small>{subItem.text}</small>
                                </p>
                              </a>
                              {subItem.subnav && subItem.subnav.length > 0 && (
                                <div className="mt-2">
                                  {subItem.subnav.map((subnavItem) => (
                                    <a
                                      onClick={(e) =>
                                        handleClick(
                                          e,
                                          subnavItem.label,
                                          subnavItem.path
                                        )
                                      }
                                      href={subnavItem.path}
                                      key={subnavItem.path}
                                      className="block hover:underline underline-offset-2"
                                    >
                                      <p
                                        className={
                                          subItemActive ===
                                          subItem.label
                                            .replace(' ', '-')
                                            .toLowerCase()
                                            ? 'text-white'
                                            : ''
                                        }
                                      >
                                        {subnavItem.label}
                                      </p>
                                    </a>
                                  ))}
                                </div>
                              )}
                            </Card>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </li>
          ))}
      </ul>
      <ul className="flex gap-2 xl:gap-4">
        <li>
          <a
            href="!#"
            className="inline-block btn btn-primary"
            onClick={handleClickModal}
          >
            Acceso Clientes
          </a>
        </li>
        <li>
          <a
            href="http://cfc.fapro.app/"
            target="_blank"
            className="inline-block btn btn-secondary"
            rel="noreferrer"
          >
            Enrólate aquí
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNavigation;
