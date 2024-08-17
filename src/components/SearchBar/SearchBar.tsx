import { Field, Form, Formik } from "formik";
import css from "./SearchBar.module.css";

type SearchBarProps = {
  onSearch: (newGallery: string) => void;
};

export default function SearchBar(props: SearchBarProps) {
  const { onSearch } = props;
  return (
    <Formik
      initialValues={{ image: "" }}
      onSubmit={(values, actions) => {
        onSearch(values.image);
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <Field
          className={css.input}
          type="text"
          name="image"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.searchBtn} type="submit">
          Search
        </button>
      </Form>
    </Formik>
  );
}
