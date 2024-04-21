"use client";
import { useState, useRef, useEffect } from "react";
import styles from "../styles/Header.module.css";

export default function Header(props) {
  const [selectedOption, setSelectedOption] = useState("light dark");
  const selectedOptionRef = useRef("light dark");

  useEffect(() => {
    setSelectedOption(selectedOptionRef.current);
  }, []);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    selectedOptionRef.current = event.target.value;
  };
  return (
    <header className={styles.header}>
      <form className={styles.form}>
        <p>Theme:</p>
        <div>
          <label htmlFor="form_theme_system">Light/dark</label>
          <input
            id="form_theme_system"
            name="color-scheme"
            type="radio"
            value="light dark"
            checked={selectedOption === "light dark"}
            onChange={handleOptionChange}
          />
        </div>
        <div>
          <label htmlFor="form_theme_light">Light</label>
          <input
            id="form_theme_light"
            name="color-scheme"
            type="radio"
            value="light"
            checked={selectedOption === "light"}
            onChange={handleOptionChange}
          />
        </div>
        <div>
          <label htmlFor="form_theme_dark">Dark</label>
          <input
            id="form_theme_dark"
            name="color-scheme"
            type="radio"
            value="dark"
            checked={selectedOption === "dark"}
            onChange={props.handleOptionChange}
          />
        </div>
      </form>
    </header>
  );
}
