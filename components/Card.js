import classes from "./Card.module.css";

export default function Hobab({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <div key={post.id} className={classes.container}>
          <div className={classes.box}>
            <div className={classes.blur}></div>
            <div className={classes.number}>{post.id}</div>
            <div className={classes.text}>{post.post}</div>
            <div className={classes.line}></div>
            <div className={classes.dateAuthor}>
              <div className={classes.date}>{post.date}</div>
              <div className={classes.name}>{post.name}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
