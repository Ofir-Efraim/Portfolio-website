import React from "react";
import useStyles from "./AboutStyles";
const About = ({Pdf}) => {
  const classes = useStyles();
  return (
    <section className={classes.main}>
      <div className={classes.aboutSection}>
        <h2 className={classes.aboutTitle}>
          Hi, <br />
          I'm Ofir, <br />
          Full-Stack Developer
        </h2>
        <p className={classes.aboutText}>
          I'm a Self-Taught Full-Stack Developer. I have a <br />
          great passion for web development. <br />
          <br />
          Fluent English speaker, well-organized person, <br /> quick learner, problem solver,
          independent employee <br /> with high attention to detail.
          Basketball fan, <br /> gym rat and stock market enthusiast.
          <br />
          <br />
          Interested in the entire Full-Stack specturm and working <br />
          on complex projects with positive people.
        </p>
      </div>
    </section>
  );
};

export default About;
