import ImageAndNameShelf from "@/components/ImageAndNameShelf";
import SkillsShelf from "@/components/SkillsShelf";
import CardShelf from "@/components/CardShelf";
import ImportantLinks from "@/components/ImportantLinks";

export default function Home() {
  return (
    <main>
      <ImageAndNameShelf />
      <SkillsShelf />
      <CardShelf />
      <ImportantLinks />
    </main>
  );
}
