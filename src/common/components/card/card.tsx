import Image from "next/image";
import styles from "./card.module.scss";
import { card } from "../card";
import Logo from "../../media/logo/Logo.png";
export default function Card() {
  return (
    <div className={styles.container}>
      {card.map((item: any, i: any) => (
        <div className={styles.card} key={i}>
          <div className={styles.image}>
            <Image src={Logo} alt="" width={75} height={75} />
          </div>
          <div className={styles.info}>
            <span>{item.name}</span>
            <span>{item.details}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
