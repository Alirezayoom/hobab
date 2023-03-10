import classes from "./Form.module.css";
import { useRef } from "react";
import Button from "./common/Button";

export default function Form({ onAdd }) {
  const nameRef = useRef();
  const postRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const firstDate = new Date();

    const day = firstDate.toLocaleString("en-US", { day: "2-digit" });
    const month = firstDate.toLocaleString("en-US", { month: "short" });
    const year = firstDate.getFullYear();

    const name = nameRef.current.value;
    const post = postRef.current.value;
    const date = `${day} ${month} ${year}`;

    console.log(name, post);

    fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({ name, post, date }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <div className={classes.form}>
      <div className={classes.formbox}>
        <div className={classes.title}>Hobab</div>
        <div className={classes.description}>
          <div>Write what in your mind is.</div>
          <div>A poem, quote or anything else.</div>
        </div>
        <form onSubmit={submitHandler}>
          <input
            className={classes.name}
            type="text"
            placeholder="Name"
            ref={nameRef}
          />
          <textarea
            className={classes.text}
            rows={10}
            cols={5}
            placeholder="Your text here (can be in Persian, English or any other language.)"
            ref={postRef}
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
