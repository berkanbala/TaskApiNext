import styles from "./button.module.scss";

export const Button = (props: any) => {
  const { type, onClick, text } = props;

  return (
    <button type={type} onClick={onClick} className={styles.container}>
      {text}
    </button>
  );
};
