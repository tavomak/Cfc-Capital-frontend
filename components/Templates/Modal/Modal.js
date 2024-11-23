import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Modal = ({ children, onClick, showModal, size, bgColor, noPadding }) => (
  <AnimatePresence>
    {showModal && (
      <motion.div
        initial={{ opacity: 0, transform: 'scale(1.1)' }}
        animate={{
          opacity: 1,
        }}
        exit={{ opacity: 0, transform: 'scale(1.1)' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 left-0 z-30 w-screen h-full pt-24 overflow-x-hidden overflow-y-auto bg-black bg-opacity-50"
      >
        <div
          className={`${size === 'sm' ? styles.sm : styles.md} ${size === 'lg' ? styles.lg : ''} ${size === 'xl' ? styles.xl : ''} ${bgColor ? `${bgColor}` : 'bg-white'} ${noPadding ? 'p-0' : 'p-3'} shadow m-auto border-0 position-relative overflow-auto px-6`}
          style={{ borderRadius: '16px' }}
        >
          <div className="flex justify-end">
            <button
              data-testid="printed-username"
              className={`p-0 ${styles.close}`}
              onClick={onClick}
              type="button"
            >
              <span
                aria-hidden="true"
                className={`p-0 text-3xl font-bold ${styles.closeIcon}`}
              >
                &times;
              </span>
            </button>
          </div>
          <div className={`modal-body ${noPadding ? 'p-0' : ''}`}>
            {children}
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

Modal.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  showModal: PropTypes.bool.isRequired,
  size: PropTypes.string,
  bgColor: PropTypes.string,
};

export default Modal;
