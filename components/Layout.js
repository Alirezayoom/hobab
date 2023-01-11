import classes from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={classes.layout}>
      <div className={classes.circle}></div>
      <div className={classes.circle2}></div>
      <div className={classes.circle3}></div>
      <div className={classes.circle4}></div>
      {children}
    </div>
  );
}
