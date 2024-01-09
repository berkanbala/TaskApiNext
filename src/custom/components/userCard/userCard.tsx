import Link from "next/link";
import styles from "./userCard.module.scss";
import Image from "next/image";
import { IUser } from "@/common/models/userData/users";

export default function UserCard(props: IUser) {
  const {
    firstName,
    id,
    lastName,
    picture,
    title,
    // , image, text
  } = props;

  return (
    <Link href={`user/${id}`}>
      <div className={styles.container}>
        <div className={styles.card}>
          <Image src={picture} alt="user picture" width={125} height={125} />
          <div className={styles.info}>
            <span>
              {title} - {firstName} {lastName}
            </span>
          </div>
        </div>
        {/* <div className={styles.post}>
          {image && <Image src={image} alt="post" />}
          {text}
        </div> */}
      </div>
    </Link>
  );
}
