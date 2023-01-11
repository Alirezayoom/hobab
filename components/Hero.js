import { useState } from "react";
import classes from "./Hero.module.css";

import Form from "./Form";
import PlusIcon from "./icons/PlusIcon";

export default function Hero() {
  const [add, setAdd] = useState(false);
  return (
    <>
      <div className={classes.hero}>
        <div className={classes.title}>Hobab</div>
        <div className={classes.description}>
          <div>Write what in your mind is.</div>
          <div>A sentence, poute, quote or anything else.</div>
        </div>
        <button className={classes.button} onClick={() => setAdd(!add)}>
          <span className={classes.plus}>
            <PlusIcon />
          </span>
          Add
        </button>
      </div>

      {add && <Form onAdd={() => setAdd(!add)} />}
    </>
  );
}
