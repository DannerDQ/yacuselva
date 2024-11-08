import SearchIcon from "../../icons/search";
import styles from "./styles.module.css"

export default function SearchBar() {
  return (
    <form className={styles.search_bar}>
      <input type="search" name="search" placeholder="Busca un producto..." />
      <button type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}
