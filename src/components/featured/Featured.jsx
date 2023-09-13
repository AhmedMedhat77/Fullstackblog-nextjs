import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
const Featured = () => {
  return (
    <nav className={styles.container}>
      <h1 className={styles.title}>
        <b className={styles.bold}>Hey, Ahmed Medhat here!</b> Discover my stories
        and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="post" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptates, quam!
          </h1>
          <p className={styles.postDescription}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
            saepe minus delectus earum, quasi accusantium illo fugiat dolor
            rerum laboriosam magnam molestiae sed iusto. Nihil quos odio ea
            fugit dolores.
          </p>
          <button className={styles.postButton}>Read More</button>
        </div>
      </div>
    </nav>
  );
};

export default Featured;
