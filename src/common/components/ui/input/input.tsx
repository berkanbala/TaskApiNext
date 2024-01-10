import styles from "./input.module.scss";

export const Input = (props: any) => {
  const { type, onClick, text, placeholder, name, onChange, value, disabled } =
    props;

  return (
    <input
      disabled={disabled}
      onChange={onChange}
      value={value}
      name={name}
      placeholder={placeholder}
      type={type}
      onClick={onClick}
      className={styles.container}
    >
      {text}
    </input>
  );
};
