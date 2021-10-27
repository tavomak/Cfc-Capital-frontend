import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Modal = ({
  children, onClick, showModal, size, bgColor,
}) => (
  <CSSTransition
    in={showModal}
    timeout={300}
    classNames="alert"
    unmountOnExit
  >
    <div className={`${styles.modal}`} >
      <div
        className={`${size === 'sm' ? styles.sm : styles.md} ${size === 'lg' ? styles.lg : ''} ${size === 'xl' ? styles.xl : ''} ${bgColor ? `${bgColor} text-white` : 'bg-white'} shadow m-auto p-3 border-0 position-relative`}
        style={{ borderRadius: '16px' }}
      >
        <a href="!#" data-testid="printed-username" className={`p-0 ${styles.close}`} onClick={onClick}>
          <span aria-hidden="true" className={`p-0 ${styles.closeIcon}`}>
            &times;
          </span>
        </a>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  </CSSTransition>
);

Modal.defaultProps = {
  children: null,
  size: '',
  onClick: undefined,
  bgColor: '',
};

Modal.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  showModal: PropTypes.bool.isRequired,
  size: PropTypes.string,
  bgColor: PropTypes.string,
};

export default Modal;
