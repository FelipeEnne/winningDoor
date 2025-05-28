"use client";

import styles from "./Page.module.css";
import Card from "@/components/Card/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.form}>
      <div className="">
        <Card bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card></Card>
      </div>
      <div className="">
        <Card></Card>
        <Card bgcolor="#29a085">
          <Link href={`/game/4/2`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  );
}
