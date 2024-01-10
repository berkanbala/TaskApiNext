"use client";
import styles from "./dashboard.module.scss";
import UserCard from "@/custom/components/userCard/userCard";
import { useAppContext } from "@/common/context/appContext";
import { IUser } from "@/common/models/users/users";
import { useState } from "react";
import { useFilter } from "@/common/hooks/useFilter";
import { Input } from "@/common/components/ui/input/input";

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
