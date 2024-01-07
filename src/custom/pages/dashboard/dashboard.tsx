"use client";
import { useAppContext } from "@/common/context/appContext";
import styles from "./dashboard.module.scss";
import UserCard from "@/custom/components/userCard/userCard";
import { IUser } from "@/common/models/users";
export default function Dashboard() {
  const { userList } = useAppContext();

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
        />
      ))}
    </div>
  );
}
