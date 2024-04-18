import styles from "../styles/ImageAndNameShelf.module.css";
import Image from "next/image";

export default function ImageAndNameShelf() {
  return (
    <section className={styles.layout}>
      <Image
        className={styles.img}
        src="/images/pictureofcreator1.jpg"
        alt="Picture of Krestine Haugaard"
        width={917}
        height={1056}
        priority={true}
      />
      <div>
        <h1>Krestine Haugaard</h1>
        <p>mail</p>
      </div>
    </section>
  );
}
