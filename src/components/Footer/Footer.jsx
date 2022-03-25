import React from "react";
import useStyles from "./FooterStyles";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  const classes = useStyles();
  return (
    <section id="contact" className={classes.wrapper}>
      <ul className={classes.list}>
        <div className={classes.column}>
          <h4 className={classes.title}>Mail to</h4>
          <a className={classes.link} href="mailto:ofirefraim9@gmail.com">
            ofirefraim9@gmail.com
          </a>
        </div>
      </ul>
      <div className={classes.iconsContainer}>
        <div className={classes.company}>
          <p className={classes.slogan}>Making ideas come alive on the internet</p>
        </div>
        <div className={classes.socialContainer}>
          <a href="https://github.com/OfirEfraim" className={classes.icon}>
            <AiFillGithub size="3rem"></AiFillGithub>
          </a>
          <a href="https://www.linkedin.com/in/ofir-efraim/" className={classes.icon}>
            <AiFillLinkedin size="3rem"></AiFillLinkedin>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
