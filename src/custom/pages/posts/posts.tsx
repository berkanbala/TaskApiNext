"use client";
import { useEffect, useState } from "react";
import styles from "./posts.module.scss";
import { showNotification } from "@/common/configs/notification";
import PostCard from "@/custom/components/postCard/postCard";
import { IPost } from "@/common/models/posts";
import { getPosts } from "@/common/services/postService";

export default function Posts() {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const getAllPost = async () => {
      try {
        const response = await getPosts();
        setPosts([...response]);
        console.log(response);
      } catch (error: any) {
        showNotification("error", error);
      }
    };
    getAllPost();
  }, []);

  return (
    <div className={styles.container}>
      {posts?.map((item: IPost) => (
        <PostCard post={item} key={item.id} />
      ))}
    </div>
  );
}
