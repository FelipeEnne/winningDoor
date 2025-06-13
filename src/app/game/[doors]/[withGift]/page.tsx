"use client";

import styles from "../../Game.module.css";
import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import Door from "@/components/Door/door";
import DoorModel from "@/model/door";
import { createDoor, updateDoors } from "@/functions/doors";

export default function Home() {
  const defaultDoorsParams = 3;
  const defaultWithGiftParams = 3;
  const { doors: getDoorsParams, withGift: getWithGiftParams } = useParams();

  const doorsParams =
    getDoorsParams && typeof +getDoorsParams == "number"
      ? +getDoorsParams
      : defaultDoorsParams;
  const withGiftParams =
    getWithGiftParams && typeof +getWithGiftParams == "number"
      ? +getWithGiftParams
      : defaultWithGiftParams;

  const [doors, setDoors] = useState<DoorModel[]>(
    createDoor(doorsParams, withGiftParams)
  );

  const qtdValidDoors = doorsParams >= 3 && doorsParams <= 100;
  const qtdValidGift = withGiftParams >= 1 && withGiftParams < doorsParams;
  const [valid] = useState(qtdValidDoors && qtdValidGift);

  function rederDoors() {
    return doors.map((door) => {
      return (
        <Door
          key={door.number}
          value={door}
          onChange={(newDoor) => setDoors(updateDoors(doors, newDoor))}
        />
      );
    });
  }

  return (
    <div id={styles.game}>
      <div className={styles.doors}>
        {valid ? rederDoors() : <h1>Invalid game</h1>}
      </div>
      <div className={styles.buttons}>
        <Link href="/">
          <button>Restart game</button>
        </Link>
      </div>
    </div>
  );
}
