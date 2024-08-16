import Modal from "react-modal";
import css from "./ImageModal.module.css";

export default function ImageModal({ item, appRef, showModal, setShowModal }) {
  Modal.setAppElement(appRef.current);
  return (
    <Modal
      className={css.modal}
      isOpen={showModal}
      onRequestClose={() => setShowModal(false)}
    >
      <img className={css.img} src={item.urls.regular}></img>
    </Modal>
  );
}
