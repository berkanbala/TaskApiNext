"use client";
import styles from "./postDetails.module.scss";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { showNotification } from "@/common/configs/notification";
import { getPostById } from "@/common/services/postService";
import { IPostDetails } from "@/common/models/posts";

export default function PostDetails() {
  const [user, setUser] = useState<IPostDetails>({} as any);
  const pathname = usePathname();
  const id = pathname.split("/")[2];

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await getPostById(id);
        console.log(response);
        setUser({ ...response });
      } catch (error: any) {
        showNotification("error", error);
      }
    };

    getUserData();
  }, [id]);

  return (
    <div className={styles.container}>
      {/* <div className={styles.card}>
        <div className={styles.name}>
          Name: {user.title} {user.firstName} {user.lastName}
        </div>
        {user.picture && (
          <Image
            src={user.picture}
            alt="user picture"
            width={75}
            height={75}
            className={styles.image}
          />
        )}
        <div className={styles.info}>
          E-Mail: {user.email} <br />
          CITY: {user?.location?.city} <br />
          COUNTRY: {user?.location?.country} <br />
          STATE: {user?.location?.state} <br />
        </div>
      </div> */}
    </div>
  );
}
