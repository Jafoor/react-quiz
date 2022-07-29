import React from 'react';
import styles from "../styles/Layout.module.css";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
    </div>
  );
}