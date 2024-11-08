import Image from "next/image";
import AuthState from "../auth";
import SearchBar from "../search-bar";
import styles from "./styles.module.css"
import Link from 'next/link';
import Cart from '../cart';

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo_wrapper}>
        <Link href={'/'}>
          <Image
            src={'/logo.webp'}
            width={48}
            height={48}
            alt="Logo Yacu Selva "
          />
        </Link>
      </div>
      <div>
        <SearchBar />
      </div>

      <div className={styles.manage_area}>
        <AuthState />
        <Cart />
      </div>
    </div>
  );
}