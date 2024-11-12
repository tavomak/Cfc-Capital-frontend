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
      className="container md:px-4 flex mx-auto items-center justify-between"
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
                className={`block font-semibold text-neutral-600 ${itemActive(item.path) ? styles.underline : styles.navLink}`}
              >
                <p>{item.label}</p>
              </Link>
              {item.children?.length > 1 && (
                <AnimatePresence>
                  {item.label === showSubMenu && (
                    <motion.div
                      initial={{ opacity: 1, transform: 'translateY(-5px)' }}
                      animate={{
                        opacity: 1,
                        transform: 'translateY(15px)',
                      }}
                      exit={{ opacity: 0, transform: 'translateY(-5px)' }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                      className="absolute border left-0 w-screen mt-1 p-5 bg-white shadow-xl"
                    >
                      <ul className="container md:px-4 m-auto flex flex-row w-full">
                        {item.children.map((subItem) => (
                          <li key={subItem.path} className="w-1/4">
                            <a
                              href={subItem.path}
                              onClick={(e) =>
                                handleClick(e, subItem.label, subItem.path)
                              }
                              className="flex min-h-44 w-full h-full p-2 group"
                              onMouseEnter={() =>
                                setSubItemActive(
                                  subItem.label.replace(' ', '-').toLowerCase()
                                )
                              }
                              onMouseLeave={() => setSubItemActive(null)}
                            >
                              <Card
                                containerClassName="w-full h-full text-dark-blue group-hover:bg-white group-hover:text-white min-h-44"
                                cardClassName={`p-6 ${
                                  subItemActive ===
                                  subItem.label.replace(' ', '-').toLowerCase()
                                    ? `bg-${subItem.label.replace(' ', '-').toLowerCase()}`
                                    : ''
                                }`}
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
                                <p className="font-bold py-4">
                                  {subItem.label}
                                </p>
                                <p>
                                  <small>{subItem.text}</small>
                                </p>
                              </Card>
                            </a>
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
            className="btn btn-primary inline-block"
            onClick={handleClickModal}
          >
            Acceso Clientes
          </a>
        </li>
        <li>
          <a
            href="http://cfc.fapro.app/"
            target="_blank"
            className="btn btn-secondary inline-block"
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
