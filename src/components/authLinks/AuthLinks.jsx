"use client";
import React from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
const AuthLinks = () => {
  const [open, setOpen] = React.useState(false);
  const { status } = useSession();
  return (
    <>
      {status !== "authenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link} onClick={() => signOut()}>
            logout
          </span>
        </>
      )}

      <div className={styles.burger} onClick={() => setOpen((old) => !old)}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="#">Home</Link>
          <Link href="#">Contact</Link>
          <Link href="#">About</Link>
          {satatus === "notAuthunticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link}>logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
