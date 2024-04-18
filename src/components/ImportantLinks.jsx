import styles from "../styles/ImportantLinks.module.css";
import Image from "next/image";

export default function ImportantLinks() {
  return (
    <ul className={styles.layout}>
      <li className={styles.link}>
        <Image
          src="/svgs/github.svg"
          alt="Github icon"
          width={16}
          height={16}
        />
        <a
          href="https://www.linkedin.com/in/krestine-haugaard-a80447264/"
          target="_blank"
        >
          hej
        </a>
      </li>
      <li className={styles.link}>
        <a href="https://github.com/krestineHaugaard" target="_blank">
          git
        </a>
      </li>
      <li className={styles.link}>
        <a href="mailto:krestinehaugaard@gmail.com">mail</a>
      </li>
      <li className={styles.link}>
        <a href="tel:+45.30.25.09.85">telefon</a>
      </li>
      <li></li>
    </ul>
  );
}
