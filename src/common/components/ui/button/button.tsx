import clsx from "clsx";
import styles from "./button.module.scss";

export const Button = (props: any) => {
  const { type, onClick, text, className, disabled } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        styles.container,
        className,
        disabled ? styles.disabled : ""
      )}
    >
      {text}
    </button>
  );
};
