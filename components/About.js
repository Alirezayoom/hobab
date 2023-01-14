import classes from "./About.module.css";
import Twitter from "./icons/Twitter";
import Telegram from "./icons/Telegram";
import Linkedin from "./icons/Linkedin";
import Link from "next/link";
import GithubIcon from "./icons/GithubIcon";

export default function About() {
  return (
    <div className={classes.about}>
      <div className={classes.aboutbox}>
        <div className={classes.box}>
          <div className={classes.title}>
            Hobab<sup className={classes.version}>v1.0</sup>
          </div>
          <div className={classes.line}></div>

          <div className={classes.socialMedias}>
            <div>
              <Link href="t.me/alirezayoom">
                <GithubIcon />
              </Link>
            </div>
            <div>
              <Link href="t.me/alirezayoom">
                <Telegram />
              </Link>
            </div>

            <div>
              <Link href="/">
                <Linkedin />
              </Link>
            </div>

            <div>
              <Link href="https://www.twitter.com/alirezayoom">
                <Twitter />
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
