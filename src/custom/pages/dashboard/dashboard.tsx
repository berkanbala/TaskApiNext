"use client";
import { useAppContext } from "@/common/context/appContext";
import styles from "./dashboard.module.scss";
import UserCard from "@/custom/components/userCard/userCard";
import { IUser } from "@/common/models/users/users";
import { useState } from "react";
import { useFilter } from "@/common/hooks/useFilter";

export default function Dashboard() {
  const { userList } = useAppContext();
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  return (
    <div className={styles.container}>
      <h1>Filter</h1>
      <input
        placeholder="Filter By User"
        type="text"
        value={search}
        onChange={handleChange}
      />

      <div className={styles.content}>
        {useFilter(userList.users, search).map((item: IUser) => (
          <UserCard user={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
