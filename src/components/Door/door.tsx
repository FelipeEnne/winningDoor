import DoorModel from "@/model/door";
import styles from "./Door.module.css";
import Gift from "../Gift/gift";

interface DoorProps {
  value: DoorModel;
  onChange: (newDoor: DoorModel) => void;
}

export default function Door(props: DoorProps) {
  const door = props.value;
  const selected = door.withGift && !door.open ? styles.selected : "";

  const changeSelection = (e) => props.onChange(door.toggleSelection());
  const open = (e) => {
    e.stopPropagation();
    props.onChange(door.openDoor());
  };

  function renderDoor() {
    return (
      <div className={styles.door}>
        <div className={styles.number}>{door.number}</div>
        <div className={styles.knob} onClick={open}></div>
      </div>
    );
  }

  return (
    <div className={styles.area} onClick={changeSelection}>
      <div className={`${styles.frame} ${selected}`}>
        {door.closed ? renderDoor() : door.gift ? <Gift /> : false}
      </div>
      <div className={styles.floor}></div>
    </div>
  );
}
