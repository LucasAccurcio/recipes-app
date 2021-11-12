import PropTypes from 'prop-types';
import React from 'react';

const Modal = (props) => {
  const { modal } = props;
  if (!modal) {
    return null;
  }
  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="modal-text">
          <p>Link copiado!</p>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  modal: PropTypes.bool.isRequired,
};

export default Modal;
