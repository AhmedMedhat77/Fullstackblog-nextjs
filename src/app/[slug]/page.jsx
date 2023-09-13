import React from "react";
import styles from "./singleblogpage.module.css";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import Comments from "@/components/Comments/Comments";
const SingleBlogPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userText}>
              <span className={styles.username}>Jhon Doe</span>
              <span className={styles.date}>10.03.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa,
              quasi quae id eum architecto dicta tempora, distinctio minus in
              saepe dignissimos eaque, consectetur corrupti consequuntur
              corporis amet repellat quaerat odit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Expedita, numquam aut! Illum quos minima distinctio. Reprehenderit
              inventore aspernatur veritatis eaque eligendi ipsa, sint eos ipsum
              rerum. A expedita ipsum pariatur.
            </p>
            <h2>Lorem, ipsum.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In aut
              amet consequatur distinctio, atque, sed quia doloribus harum dicta
              provident maiores accusamus! Sapiente quibusdam commodi expedita
              fugiat veniam maxime tempora?
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
