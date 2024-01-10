"use client";
import { useEffect, useState } from "react";
import styles from "./userDetails.module.scss";
import { IUserDetails } from "@/common/models/users/userDetails";
import { usePathname } from "next/navigation";
import { showNotification } from "@/common/configs/notification";
import { getUserById } from "@/common/services/userService";
import Image from "next/image";

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