"use client";
import React from "react";
import styles from "./write.module.css";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
const Write = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} />

      <div className={styles.editor}>
        <button
          className={styles.button}
          onClick={() => setOpen((old) => !old)}
        >
          <Image src="/plus.png" width={16} height={16} alt="" />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src="/image.png" width={16} height={16} alt="" />
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" width={16} height={16} alt="" />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" width={16} height={16} alt="" />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell Your Story"
        />
      </div>
      <button className={styles.publish}>
        Publish
      </button>
    </div>
  );
};

export default Write;
