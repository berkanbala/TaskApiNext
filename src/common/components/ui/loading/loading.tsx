import styles from "./loading.module.scss";
import classNames from "classnames";
export const Loading = ({ className }: Props) => {
  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.loadingIcon} />
    </div>
  );
};

interface Props {
  className?: string;
}
