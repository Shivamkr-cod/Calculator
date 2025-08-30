import styles from "./Btncontainer.module.css";
const Btncontainer = ({onButtonClick}) => {
  const btn = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.btncontainer}>
      {btn.map((button) => (
        <button className={styles.btn} onClick={()=>onButtonClick(button)}>{button}</button>
      ))}
    </div>
  );
};
export default Btncontainer;
