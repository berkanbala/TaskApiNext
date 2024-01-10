"use client";
import styles from "./posts.module.scss";
import PostCard from "@/custom/components/postCard/postCard";
import { useEffect, useState } from "react";
import { showNotification } from "@/common/configs/notification";
import { getPosts } from "@/common/services/postService";
import { postFilter } from "../../../common/hooks/postFilter";
import { IPost } from "@/common/models/posts/posts";
import { Input } from "@/common/components/ui/input/input";

export default function Posts() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

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
      <h1>Filter</h1>
      <Input
        placeholder="Filter By Post"
        type="text"
        value={search}
        onChange={handleChange}
      />
      <div className={styles.content}>
        {postFilter(posts, search)?.map((item: IPost) => (
          <PostCard post={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
