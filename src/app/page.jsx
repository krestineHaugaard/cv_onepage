import ImageAndNameShelf from "@/components/ImageAndNameShelf";
import SkillsShelf from "@/components/SkillsShelf";
import CardShelf from "@/components/CardShelf";
import ImportantLinks from "@/components/ImportantLinks";
import StyleElement from "@/components/StyleElement";
import styles from "../styles/StyleElement.module.css";

export default function Home() {
  return (
    <main className="content">
      <StyleElement
        outerBox={`${styles.outerBox} ${styles.top}`}
        innerBox={`${styles.innerBox} ${styles.top}`}
      />
      <ImageAndNameShelf />
      <SkillsShelf />
      <CardShelf />
      <ImportantLinks />
      <StyleElement
        outerBox={`${styles.outerBox} ${styles.bottom}`}
        innerBox={`${styles.innerBox} ${styles.bottom}`}
        layout={styles.layout}
      />
    </main>
  );
}
