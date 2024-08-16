import ImageCard from "../../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({
  items,
  onItemClick,
  galleryRef,
  handleImageLoaded,
}) {
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
