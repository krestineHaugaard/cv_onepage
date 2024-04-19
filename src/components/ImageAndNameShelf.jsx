import styles from "../styles/ImageAndNameShelf.module.css";
import Image from "next/image";

export default function ImageAndNameShelf() {
  return (
    <section className={`${styles.layout} full-width `}>
      <Image
        className={`${styles.img} ${styles.item1}`}
        src="/images/pictureofcreator1.jpg"
        alt="Picture of Krestine Haugaard"
        width={917}
        height={1056}
        priority={true}
      />
      <div className={`${styles.item2} flow`}>
        <h1>Krestine Haugaard</h1>
        <p className={styles.inline}>
          Studying multimedia design with elective in frontend
        </p>
      </div>
    </section>
  );
}
