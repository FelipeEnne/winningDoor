"use client";
import { useState } from "react";

import Door from "@/components/Door/door";
import Gift from "@/components/Gift/gift";
import DoorModel from "@/model/door";
import { createDoor, updateDoors } from "@/functions/doors";

export default function Home() {
  const [doors, setDoors] = useState(createDoor(3, 2));

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

  return <div style={{ display: "flex" }}>{rederDoors()}</div>;
}
