import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";
const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=styles"
        className={`${styles.categoryItem} ${styles.styles} `}
      >
        Styles
      </Link>
      <Link
        href="/blog?cat=fashion"
        className={`${styles.categoryItem} ${styles.fashion} `}
      >
        Fashion
      </Link>
      <Link
        href="/blog?cat=coding"
        className={`${styles.categoryItem} ${styles.coding} `}
      >
        Coding
      </Link>
      <Link
        href="/blog?cat=food"
        className={`${styles.categoryItem} ${styles.food} `}
      >
        Food
      </Link>
    </div>
  );
};

export default MenuCategories;
