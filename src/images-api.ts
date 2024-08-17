import axios, { AxiosResponse } from "axios";
axios.defaults.baseURL = `https://api.unsplash.com`;
import { ImageCardType } from "../src/ImageCard/ImageCard.types";

export const fetchGallery = async (gallery: string, currentPage: number) => {
  const res: AxiosResponse<SearchPhotoResponse> = await axios.get(
    "/search/photos",
    {
      params: {
        client_id: "R8lwp7CjG_S9-wqHdJzoO7Xnv1ep0Me-pe8fAs_RKKw",
        query: gallery,
        page: currentPage,
        per_page: 12,
      },
    }
  );

  return res;
};

export type SearchPhotoResponse = {
  results: ImageCardType[];
  total_pages: number;
};
