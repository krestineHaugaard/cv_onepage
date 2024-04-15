import Image from "next/image";

export default function ImageAndNameShelf() {
  return (
    <section className="image_and_name_shelf">
      <Image
        className="img"
        src="/images/pictureofcreator1.jpg"
        alt="Picture of Krestine Haugaard"
        width={917}
        height={1056}
      />
      <div>
        <h1>Krestine Haugaard</h1>
        <p>mail</p>
      </div>
    </section>
  );
}
