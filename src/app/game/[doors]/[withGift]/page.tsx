"use client";

import styles from "../../Game.module.css";
import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import Door from "@/components/Door/door";
import DoorModel from "@/model/door";
import { createDoor, updateDoors } from "@/functions/doors";

export default function Home() {
  const { doors: doorsParams, withGift: withGiftParams } = useParams();

  const [doors, setDoors] = useState<DoorModel[]>(
    createDoor(+doorsParams, +withGiftParams)
  );

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
      <div className={styles.doors}>{rederDoors()}</div>
      <div className={styles.buttons}>
        <Link href="/">
          <button>Restart game</button>
        </Link>
      </div>
    </div>
  );
}
