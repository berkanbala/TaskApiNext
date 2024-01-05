import styles from "./dashboard.module.scss";
import Card from "@/common/components/card/card";
export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Card />
    </div>
  );
}
