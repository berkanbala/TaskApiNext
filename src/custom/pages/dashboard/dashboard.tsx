import Header from "@/common/components/header/header";
import styles from "./dashboard.module.scss";
import Card from "@/common/components/card/card";
export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Header />
      <Card />
    </div>
  );
}
