"use client";
import { useState } from "react";

import Door from "@/components/Door/door";
import Gift from "@/components/Gift/gift";
import DoorModel from "@/model/door";

export default function Home() {
  const [p1, setP1] = useState(new DoorModel(1));

  return (
    <div style={{ display: "flex" }}>
      <Door door={p1} />
    </div>
  );
}
