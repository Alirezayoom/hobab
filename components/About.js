import classes from "./About.module.css";
import Twitter from "./icons/Twitter";
import Telegram from "./icons/Telegram";
import Linkedin from "./icons/Linkedin";
import Link from "next/link";

export default function About() {
  return (
    <div className={classes.about}>
      <div className={classes.aboutbox}>
        <div className={classes.box}>
          <div className={classes.socialMedias}>
            <div>
              <Link href="https://www.twitter.com/alirezayoom">
                <Twitter />
              </Link>
            </div>
            <div>
              <Link href="/">
                <Linkedin />
              </Link>
            </div>
            <div>
              <Link href="t.me/alirezayoom">
                <Telegram />
              </Link>
            </div>
          </div>
          <div className={classes.triangle}></div>

          <div className={classes.line}></div>
          <div className={classes.love}>Made with ❤️ in Herat</div>
        </div>
      </div>
    </div>
  );
}
