"use client";

import styles from "./Page.module.css";
import Card from "@/components/Card/card";
import NumberInput from "@/components/NumberInput/NumberInput";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [numberDoors, setNumberDoors] = useState(3);
  const [withGift, setWithGift] = useState(1);

  return (
    <div className={styles.form}>
      <div className="">
        <Card bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumberInput
            text="Doors"
            value={numberDoors}
            onChange={(c) => setNumberDoors(c)}
          />
        </Card>
      </div>
      <div className="">
        <Card>
          <NumberInput
            text="With gift?"
            value={withGift}
            onChange={(c) => setWithGift(c)}
          />
        </Card>
        <Card bgcolor="#29a085">
          <Link href={`/game/${numberDoors}/${withGift}`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  );
}
