import Link from 'next/link';
import DownIcon from '../../icons/down';
import styles from './styles.module.css';

type DropDownProps = {
  title: string;
  options: Array<{
    path: string;
    slug: string;
  }>;
};

export default function DropDown({ title, options }: DropDownProps) {
  return (
    <div className={styles.info}>
      <input
        type="checkbox"
        id={`trigger-${title}`}
        className={styles.trigger}
      />
      <div>
        <label htmlFor={`trigger-${title}`}>
          <h4>{title}</h4>
          <span>
            <DownIcon />
          </span>
        </label>
      </div>
      <ul>
        {options.map(({ path, slug }) => {
          return (
            <li key={path}>
              <Link href={path}>{slug}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
