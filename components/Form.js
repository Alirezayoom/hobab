import classes from "./Form.module.css";
import Button from "./Button";

export default function Form({ onAdd }) {
  return (
    <div className={classes.form}>
      <div className={classes.formbox}>
        <form>
          <input className={classes.name} type="text" placeholder="Name" />
          <textarea
            className={classes.text}
            rows={10}
            cols={5}
            placeholder="Your text..."
          ></textarea>
          <div className={classes.buttons}>
            <Button>Sumbit</Button>
            <Button onClick={onAdd}>Cancel</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
