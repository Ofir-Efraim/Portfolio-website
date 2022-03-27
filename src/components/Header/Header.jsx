import React from "react";
import useStyles from "./HeaderStyles";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.leftDiv}>
        <h1 className={classes.title}>Portfolio</h1>
      </div>
      <div className={classes.middleDiv}>
        <li style={{listStyleType: 'none'}}>
          <a href="#projects" className={classes.anchor}>
            Projects
          </a>
        </li>
        <li style={{listStyleType: 'none'}}>
          <a href="#skills" className={classes.anchor}>
            Skills
          </a>
        </li>
        <li style={{listStyleType: 'none'}}>
          <a href="#contact" className={classes.anchor}>
            Contact
          </a>
        </li>
      </div>
      <div className={classes.rightDiv}>
      <a href='https://github.com/Ofir-Efraim' className={classes.icon}>
        <AiFillGithub size="3rem"></AiFillGithub>
      </a>
      <a href='https://www.linkedin.com/in/ofir-efraim/' className={classes.icon}>
        <AiFillLinkedin size="3rem"></AiFillLinkedin>
      </a>
      </div>
    </div>
  );
};

export default Header;
