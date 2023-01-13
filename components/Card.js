import classes from "./Card.module.css";

export default function Hobab() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.box}>
          <div className={classes.blur}></div>
          <div className={classes.number}>#11</div>
          <div className={classes.text}>
            It is important to note that JavaScript has almost nothing to do
            with the programming language named Java. The similar name was
            inspired by marketing considerations rather than good judgment. When
            JavaScript was being introduced, the Java language was being heavily
            marketed and was gaining popularity. Someone thought it was a good
            idea to try to ride along on this success.
          </div>
          <div className={classes.line}></div>
          <div className={classes.dateAuthor}>
            <div className={classes.date}>11 Jan 2023</div>
            <div className={classes.author}>Alireza Karimi</div>
          </div>
        </div>
      </div>
    </>
  );
}
