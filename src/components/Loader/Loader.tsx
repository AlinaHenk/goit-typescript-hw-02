import { MagnifyingGlass } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <MagnifyingGlass
      visible={true}
      height="30"
      width="30"
      ariaLabel="magnifying-glass-loading"
      wrapperStyle={{}}
      wrapperClass={css.finder}
      glassColor="#c0efff"
      color="#e15b64"
    />
  );
}
