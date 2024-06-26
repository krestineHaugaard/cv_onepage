"use client";

import { useState } from "react";
import StyleElement from "@/components/StyleElement";
import styles from "../styles/StyleElement.module.css";
import skillStyles from "../styles/SkillsShelf.module.css";

const codeingSkills = [
  "HTML",
  "CSS",
  "Java Script",
  "Astro",
  "Vite",
  "React",
  "Next",
  "Node",
  "CSS Modules",
  "Tailwind",
  "API",
];
const programsSkills = [
  "Visual studio code",
  "GitHub",
  "Supabase",
  "Netlify",
  "Vercel",
  "Filezilla",
  "Figma",
  "Illustrator",
];
const tecnicalsSkills = [
  "Optimizing code",
  "Components",
  "Design to code",
  "A11y",
  "Sustainability",
  "Design principles",
  "UX/UI",
  "NPM install",
  "Responsive web",
];

const onRefresh = codeingSkills.map((skill) => (
  <li className={skillStyles.li} key={skill}>
    {skill}
  </li>
));

export default function SkillsShelf() {
  const [mySkill, updateMySkill] = useState(onRefresh);

  const [activeBtn, updateNewActive] = useState(1);

  function onClick(props) {
    updateMySkill(
      props.map((skill) => (
        <li className={skillStyles.li} key={skill}>
          {skill}
        </li>
      ))
    );
  }

  function setActive(buttonNr) {
    updateNewActive(buttonNr);
  }

  return (
    <section>
      <h2 className="alignCenter">Hands on experience</h2>
      <div className={skillStyles.layout}>
        <button
          className={`${skillStyles.btn} ${
            activeBtn === 1 ? skillStyles.active : ""
          }`}
          onClick={() => {
            onClick(codeingSkills);
            setActive(1);
          }}
        >
          Coding
        </button>
        <button
          className={`${skillStyles.btn} ${
            activeBtn === 2 ? skillStyles.active : ""
          }`}
          onClick={() => {
            onClick(programsSkills);
            setActive(2);
          }}
        >
          Software
        </button>
        <button
          className={`${skillStyles.btn} ${
            activeBtn === 3 ? skillStyles.active : ""
          }`}
          onClick={() => {
            onClick(tecnicalsSkills);
            setActive(3);
          }}
        >
          Technical Methods
        </button>
      </div>
      <StyleElement
        outerBox={`${styles.outerBox} ${styles.topRight}`}
        innerBox={`${styles.innerBox} ${styles.topRight}`}
        layout={styles.layout}
      />
      <div className={skillStyles.container}>
        <ul className={skillStyles.ul}>{mySkill}</ul>
      </div>
      <StyleElement
        outerBox={`${styles.outerBox} ${styles.bottomLeft}`}
        innerBox={`${styles.innerBox} ${styles.bottomLeft}`}
        layout={styles.layout}
      />
    </section>
  );
}
