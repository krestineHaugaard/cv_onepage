import CardForCardShelf from "./CardForCardShelf";

export default function CardShelf() {
  return (
    <section className="card_shelf_style">
      <CardForCardShelf
        title="This CV onepager"
        semester="Github repository"
        text="I wanted to include the repository for this website, because its not only a visible CV containing information about me, my projects and skills, it is also an example of working with next.js and react, two skills i hope to improve  much more in the future."
        link="https://github.com/krestineHaugaard/cv_onepage"
      />
      <CardForCardShelf
        title="To do list"
        semester="3. semester"
        text="A small project made at the start of 3. semester with focus on vanilla java script. Its very simple, but it works and you can change theme."
        link="https://krestinehaugaard.github.io/mmd_exercises_3_semester/to_do_list_2/index.html"
      />
      <CardForCardShelf
        title="Exam prototype 3"
        semester="2. semester"
        text="This is a prototype I made for my examination presentation, its based on the original exams project, but i made some changes with the 10 usability heuristics in mind."
        link="https://www.figma.com/proto/A6g7Yom8y6IAzezopE2QJI/Prototype-3?type=design&node-id=1-620&t=vYb1CHvo2aSaMy2f-1&scaling=min-zoom&page-id=0%3A1&mode=design "
      />
      <CardForCardShelf
        title="Examination website"
        semester="2. semester"
        text="2. semester examination project made with 2 others. Focus was to build a sustainable website solution matching the business principle of reselling and reuse. This project is build with Astro framework and Supabase."
        link="https://onebrick.netlify.app/"
      />
      <CardForCardShelf
        title="Case with CPH Light Festival"
        semester="2. semester"
        text="This is a redesign case made with 4 others. Our client asked for an optimized version of their original design, with focus on UI and UX. This project was our introduction to Astro framework."
        link="https://cphlf.netlify.app/"
      />
      <CardForCardShelf
        title="Portfolio examination website"
        semester="1. semester"
        text="This is a portfolie site containing 1. semester curriculum. I put it on here because i still really like the landingpage, but it sure needs a lot of optimizing. Links on the site don`t work anymore because of hosting changes."
        link="https://krestinehaugaard.github.io/Multimedie_1.semester_eksamen/"
      />
      <CardForCardShelf
        title="Animation theme"
        semester="1. semester"
        text="This was our first introduction to java script. Everything in this game is designed, drawn and coded by me. It could be optimized a lot, especially the java script code, but i still think is a pretty solid mini game for a 1. semester student. Also this game is 100% satire, its designed around the all scots and irishmen hate England joke."
        link="https://krestinehaugaard.github.io/animations_tema_1_semester_mmd/spil.html"
      />
    </section>
  );
}
