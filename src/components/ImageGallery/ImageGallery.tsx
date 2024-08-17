import ImageCard from "../../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { ImageCardType } from "../../ImageCard/ImageCard.types";
import { MutableRefObject } from "react";

type ImageGalleryProps = {
  items: ImageCardType[];
  onItemClick: (item: ImageCardType) => void;
  galleryRef: MutableRefObject<HTMLUListElement | null>;
  handleImageLoaded: (item: ImageCardType) => void;
};

export default function ImageGallery(props: ImageGalleryProps) {
  const { items, onItemClick, galleryRef, handleImageLoaded } = props;
  return (
    <ul className={css.galleryList} ref={galleryRef}>
      {items.map((item) => (
        <li key={item.id} className={css.galleryItem}>
          <ImageCard
            item={item}
            onItemClick={onItemClick}
            handleImageLoaded={handleImageLoaded}
          />
        </li>
      ))}
    </ul>
  );
}
