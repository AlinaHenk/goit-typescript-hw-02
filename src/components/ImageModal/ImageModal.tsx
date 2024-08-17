import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { ImageCardType } from "../../ImageCard/ImageCard.types";
import { MutableRefObject } from "react";

type ImageModalProps = {
  item: ImageCardType;
  appRef: MutableRefObject<HTMLDivElement | null>;
  showModal: boolean;
  setShowModal: (isModal: boolean) => void;
};

export default function ImageModal(props: ImageModalProps) {
  const { item, appRef, showModal, setShowModal } = props;
  Modal.setAppElement(appRef.current as HTMLElement);
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
