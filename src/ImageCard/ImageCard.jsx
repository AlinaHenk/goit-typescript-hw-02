import css from "./ImageCard.module.css";

export default function ImageCard({ item, onItemClick, handleImageLoaded }) {
  return (
    <img
      className={css.image}
      id={item.id}
      onClick={() => onItemClick(item)}
      src={item.urls.small}
      alt={item.urls.alt_description}
      onLoad={() => {
        handleImageLoaded(item);
      }}
    />
  );
}
