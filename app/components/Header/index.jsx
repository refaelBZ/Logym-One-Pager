"use client";
import { useState, useEffect } from "react";
import styles from "./style.module.scss";
import Button from "../Button"; // ייבוא רכיב הכפתור החדש

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>Logym</div>
      <nav className={styles.nav}>
        <Button href="#" className={styles.headerButton}>
          להתחיל באפליקציה
        </Button>
      </nav>
    </header>
  );
} 