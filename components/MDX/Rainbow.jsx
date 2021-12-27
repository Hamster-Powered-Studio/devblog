import styles from "./Rainbow.module.css";

const Rainbow = ({ children }) => {
  return <strong className={styles.rainbow}>{children}</strong>;
};

export default Rainbow;
