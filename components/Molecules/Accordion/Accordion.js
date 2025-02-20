import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './styles.module.css';

const Accordion = ({ containerClassName, itemClassName, list }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const colorsMapping = {
    1: 'soft-blue',
    2: 'dark-blue',
    3: 'medium-purple',
  };

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <ul className={`${styles.listContainer} ${containerClassName}`}>
      {list?.map((item, key) => {
        const isExpanded = expandedIndex === key;

        return (
          <li
            key={item.title}
            className={`${styles.item} ${itemClassName} overflow-hidden rounded-lg`}
            style={{ background: `var(--${colorsMapping[key + 1]})` }}
          >
            <button
              type="button"
              onClick={() => toggleAccordion(key)}
              className="items-center justify-between w-full px-4 py-4 text-left md:py-8 lg:flex"
            >
              <span className="text-base font-semibold display-font md:text-2xl">
                {item.title}
              </span>
              <motion.span
                // animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="block text-sm font-medium lg:inline"
              >
                Saber más...
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: 'auto',
                    opacity: 1,
                    transition: {
                      height: {
                        duration: 0.3,
                      },
                      opacity: {
                        duration: 0.3,
                        delay: 0.1,
                      },
                    },
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: {
                        duration: 0.3,
                      },
                      opacity: {
                        duration: 0.2,
                      },
                    },
                  }}
                >
                  <div className="pb-4 lg:px-4">
                    <p className="font-normal">{item.text}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
};

export default Accordion;
