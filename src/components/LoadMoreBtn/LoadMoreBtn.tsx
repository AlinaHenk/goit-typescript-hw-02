import css from "./LoadMoreBtn.module.css";

type LoadMoreBtnProps = {
  onClick: () => void;
};

export default function LoadMoreBtn(props: LoadMoreBtnProps) {
  const { onClick } = props;
  return (
    <button className={css.btn} onClick={onClick}>
      Load more
    </button>
  );
}
