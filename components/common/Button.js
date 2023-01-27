import classes from "./Button.module.css";

export default function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className={classes.button}>
      {children}
    </button>
  );
}
