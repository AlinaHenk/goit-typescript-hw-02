import axios from "axios";
axios.defaults.baseURL = `https://api.unsplash.com`;

export const fetchGallery = async (gallery, currentPage) => {
  const res = await axios.get("/search/photos", {
    params: {
      client_id: "R8lwp7CjG_S9-wqHdJzoO7Xnv1ep0Me-pe8fAs_RKKw",
      query: gallery,
      page: currentPage,
      per_page: 12,
    },
  });

  return res;
};
