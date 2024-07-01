"use client";
import styles from "./dashboard.module.scss";
import UserCard from "@/custom/components/userCard/userCard";
import { IUser } from "@/common/models/users/users";
import { Input } from "@/common/components/ui/input/input";
import { useState } from "react";
import { useFilter } from "@/common/hooks/useFilter";
import { useAppContext } from "@/common/context/appContext";

export default function Dashboard() {
  const { userList } = useAppContext();
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  return (
    <div className={styles.container}>
      <h1>Filter</h1>
      <Input
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
