import Link from "next/link";
import styles from "./userCard.module.scss";
import Image from "next/image";
import type { IUser } from "@/common/models/users/users";
// import { Button } from "@/common/components/ui/button/button";
// import { useRouter } from "next/router";
// import { useRouter } from "next/navigation";

export default function UserCard({ user }: Props) {
  // const router = useRouter();
  // const { id } = router;

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
          {/* <Link href={`/edit/${user.id}`} className={styles.edit}>
          Edit
        </Link> */}
        </div>
      </div>
    </Link>
  );
}

interface Props {
  user: IUser;
}
