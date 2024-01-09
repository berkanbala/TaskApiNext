import Link from "next/link";
import styles from "./userCard.module.scss";
import Image from "next/image";
import type { IUser } from "@/common/models/users/users";

export default function UserCard({ user }: Props) {
  return (
    <Link href={`user/${user.id}`}>
      <div className={styles.container}>
        <div className={styles.card}>
          <Image
            src={user.picture}
            alt="user picture"
            width={125}
            height={125}
          />
          <div className={styles.info}>
            <span>
              {user.title} - {user.firstName} {user.lastName}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

interface Props {
  user: IUser;
}
