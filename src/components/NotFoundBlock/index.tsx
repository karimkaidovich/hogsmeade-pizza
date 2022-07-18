import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFoundBlock.module.scss";

export default function NotFoundBlock() {
  return (
    <>
      <div className={styles["fourty-four"]}>404</div>
      <div className={styles["not-found"]}>Page is not found...</div>
      <Link to="/">
        <button className={styles.button}>{"<--"} Back to home page</button>
      </Link>
    </>
  );
}
