"use client";
import styles from "./postDetails.module.scss";
import { usePathname } from "next/navigation";
import { getPostById } from "@/common/services/postService";
import { IPostDetails } from "@/common/models/posts";
import { showNotification } from "@/common/configs/notification";
import { useEffect, useState } from "react";

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

  return <div className={styles.container}></div>;
}
