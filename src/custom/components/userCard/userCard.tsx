import Link from "next/link";
import styles from "./userCard.module.scss";
import Image from "next/image";
import type { IUser } from "@/common/models/users/users";
import { Button } from "@/common/components/ui/button/button";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";

export default function UserCard({ user }: Props) {
  const router = useRouter();
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
          {/* <Link href={`/${user.id}/edit`}>
            <button onClick={() => router.push(`/${user.id}`)}>edit</button>
          </Link> */}
          <Link href={`/${user.id}/edit`} className={styles.edit}>
            <Button
              onClick={() => {
                router.push(`/${user.id}`);
              }}
              type="submit"
              text={"Edit post"}
            />
          </Link>
        </div>
      </div>
    </Link>
  );
}

interface Props {
  user: IUser;
}
