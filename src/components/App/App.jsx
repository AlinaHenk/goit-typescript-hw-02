import { useEffect, useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "..//ImageGallery/ImageGallery";
import Loader from "..//Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import css from "./App.module.css";
import { fetchGallery } from "../../images-api";
import ImageModal from "..//ImageModal/ImageModal";

export default function App() {
  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [gallery, setGallery] = useState("");
  const [totalPages, setTotalPages] = useState(999);
  const [clickedItem, setClickedItem] = useState();
  const [showModal, setShowModal] = useState(false);
  const appRef = useRef();
  const galleryRef = useRef();

  const handleSearch = async (newGallery) => {
    if (newGallery === "") {
      toast.error("You need to fill in text for search images");
      return;
    }
    setGallery(newGallery);
    setPage(1);
    setGalleries([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  function onShowModal(item) {
    setClickedItem(item);
    setShowModal(true);
  }

  function handleImageLoaded(item) {
    item.loaded = true;
    const notLoadedItems = galleries.filter(
      (galleryItem) => !galleryItem.loaded
    );
    if (notLoadedItems.length == 0) {
      const elem = galleryRef.current;
      const rect = elem.getBoundingClientRect();
      window.scrollTo({ top: rect.height, behavior: "smooth" });
    }
  }

  useEffect(() => {
    if (gallery === "") {
      return;
    }

    async function getGallery() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchGallery(gallery, page);
        setTotalPages(data.data.total_pages);
        setGalleries((galleries) => {
          return [...galleries, ...data.data.results];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getGallery();
  }, [page, gallery]);

  return (
    <div className={css.container} ref={appRef}>
      <SearchBar onSearch={handleSearch} />
      <Toaster position="top-left" reverseOrder={false} />
      {error && <ErrorMessage />}
      {galleries.length > 0 && (
        <ImageGallery
          items={galleries}
          onItemClick={onShowModal}
          galleryRef={galleryRef}
          handleImageLoaded={handleImageLoaded}
        />
      )}
      {showModal && clickedItem && (
        <ImageModal
          item={clickedItem}
          appRef={appRef}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
      {loading && <Loader />}
      {galleries.length > 0 && !loading && page < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </div>
  );
}
