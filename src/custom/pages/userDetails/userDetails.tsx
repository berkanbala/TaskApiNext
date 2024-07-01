"use client";
import styles from "./userDetails.module.scss";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getUserById } from "@/common/services/userService";
import { IUserDetails } from "@/common/models/users/userDetails";
import { showNotification } from "@/common/configs/notification";
import { useEffect, useState } from "react";

export default function UserDetails() {
  const [user, setUser] = useState<IUserDetails>({} as any);
  const pathname = usePathname();
  const id = pathname.split("/")[2];

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await getUserById(id);
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
      <div className={styles.card}>
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
          <span>COUNTRY: {user?.location?.country}</span>
          <span>CITY: {user?.location?.city}</span>
          <span>STATE: {user?.location?.state}</span>
          <span>E-Mail: {user.email}</span>
        </div>
      </div>
    </div>
  );
}
