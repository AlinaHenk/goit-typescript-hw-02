import css from "./ImageCard.module.css";
import { ImageCardType } from "./ImageCard.types";

type ImageCardProps = {
  item: ImageCardType;
  onItemClick: (item: ImageCardType) => void;
  handleImageLoaded: (item: ImageCardType) => void;
};

export default function ImageCard(props: ImageCardProps) {
  const { item, onItemClick, handleImageLoaded } = props;
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
