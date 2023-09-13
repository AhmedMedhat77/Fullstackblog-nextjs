import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" width={50} height={50} alt="" />
          <h1 className={styles.logoText}>{"Ahmed's Blog"}</h1>
        </div>
        <p className={styles.description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque nam
          animi atque a ducimus omnis dolorem? Ipsa voluptatem iste voluptatum.
          Illum maiores eos nisi debitis tempore est pariatur repudiandae
          ratione.
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="facebook" width={18} height={18} />
          <Image src="/tiktok.png" alt="tiktok" width={18} height={18} />
          <Image src="/instagram.png" alt="instagram" width={18} height={18} />
          <Image src="/youtube.png" alt="youtube" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <Link href="/" className={styles.link}>
            Contact
          </Link>
          <Link href="/" className={styles.link}>
            About
          </Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <Link href="/" className={styles.link}>
            Contact
          </Link>
          <Link href="/" className={styles.link}>
            About
          </Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/" className={styles.link}>
            Facebook
          </Link>
          <Link href="/" className={styles.link}>
            Instigram
          </Link>
          <Link href="/" className={styles.link}>
            Tiktok
          </Link>
          <Link href="/" className={styles.link}>
            Youtube
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
