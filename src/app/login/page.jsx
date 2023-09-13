import React from "react";
import styles from "./login.module.css";
const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton}>Singin with Google</div>

        <div className={styles.socialButton}>Singin with GitHub</div>

        <div className={styles.socialButton}>Singin with Facebook</div>
      </div>
    </div>
  );
};

export default Login;
