"use client";
import { useAppContext } from "@/common/context/appContext";
import styles from "./dashboard.module.scss";
import UserCard from "@/custom/components/userCard/userCard";
import { IUser } from "@/common/models/userData/users";
import PostCard from "@/custom/components/postCard/postCard";
import { IPost } from "@/common/models/postData/post";
export default function Dashboard() {
  const { userList, postList } = useAppContext();

  return (
    <div className={styles.container}>
      {userList.users.map((item: IUser) => (
        <UserCard
          firstName={item.firstName}
          lastName={item.lastName}
          picture={item.picture}
          id={item.id}
          title={item.title}
          key={item.id}
          // image={item.image}
          // text={item.text}
        />
      ))}
      {postList.post.map((item: IPost) => (
        <PostCard
          image={item.image}
          text={item.text}
          key={item.id}
          id={item.id}
        />
      ))}
    </div>
  );
}
