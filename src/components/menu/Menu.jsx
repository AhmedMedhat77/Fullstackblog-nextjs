import React from "react";
import styles from "./menu.module.css";
import MenuPosts from "../MenuPosts/MenuPosts";
import MenuCategories from "../MenuCategories/MenuCategories";
const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What is hot"}</h2>
      <h1 className={styles.title}>{"Most Popular"}</h1>
      <MenuPosts />
      <h2 className={styles.subtitle}>{"Discover by Topic"}</h2>

      <h1 className={styles.title}>{"Categories"}</h1>
      <h2 className={styles.subtitle}>{"Choosen by editor"}</h2>
      <MenuCategories />

      <h1 className={styles.title}>{"Editors Pick"}</h1>

      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
