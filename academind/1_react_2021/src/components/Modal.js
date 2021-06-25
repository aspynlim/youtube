function Modal(props) {
  return (
    <div className="modal">
      <p>Are you Sure?</p>
      <button className="btn btn--alt" onClick={props.onCancel}>
        CANCEL
      </button>
      <button className="btn" onClick={props.onConfirm}>
        CONFIRM
      </button>
    </div>
  );
}

export default Modal;
