"use client";
import React from "react";
import Image from "next/image";
import img1 from "../public/tacos.jpg";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const moveOn = () => {
    router.push("message");
  };
  const moveOn2 = () => {
    router.push("subscribe");
  };

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <h1 className={styles.title}>TacosdeCrema</h1>

        <button onClick={moveOn2} className={styles.btn}>
          Subscribe
        </button>
      </div>

      <div className={styles.imageContainer}>
        <Image className={styles.img} src={img1} alt="Tacos" />
        <h1 className={styles.center}>Welcome to taco Decrema</h1>
        <button onClick={moveOn} className={styles.bottomLeftBtn}>
          Alert Me
        </button>
      </div>
    </div>
  );
};

export default Page;
