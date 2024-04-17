import ImageAndNameShelf from "@/components/ImageAndNameShelf";
import SkillsShelf from "@/components/SkillsShelf";
import CardShelf from "@/components/CardShelf";
import ImportantLinks from "@/components/ImportantLinks";
import StyleElement from "@/components/StyleElement";

export default function Home() {
  return (
    <main className="content">
      <StyleElement
        outerBox="style_outer_box top"
        innerBox="style_inner_box top "
      />
      <ImageAndNameShelf />
      <SkillsShelf />
      <CardShelf />
      <ImportantLinks />
      <StyleElement
        outerBox="style_outer_box bottom"
        innerBox="style_inner_box bottom"
      />
    </main>
  );
}
