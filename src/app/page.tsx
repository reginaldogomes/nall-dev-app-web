import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Blog Nall App</p>
      </div>
    </main>
  );
}
