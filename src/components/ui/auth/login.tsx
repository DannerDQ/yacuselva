import Link from "next/link";
import styles from "./login.module.css"
import UserIcon from '../../icons/user';

export default function LogInButton() {
  return (
    <Link href={'/api/auth/login'}>
      <div className={styles.login}>
        <UserIcon />
      </div>
    </Link>
  );
}
