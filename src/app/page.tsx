import styles from "./page.module.css";

export default function Home({ children }: { children: React.ReactNode }) {
  console.log(styles);

  return (
    <div>
      <h1>Yacu Selva</h1>
      {children}
    </div>
  );
}
