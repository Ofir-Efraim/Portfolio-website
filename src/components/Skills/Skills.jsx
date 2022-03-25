import React from "react";
import useStyles from "./SkillsStyles";
import { DiFirebase, DiReact, DiCode, DiCisco, DiNodejsSmall  } from "react-icons/di";

const Skills = () => {
  const classes = useStyles();
  return (
    <section id="skills" className={classes.skillsSection}>
      <div className={classes.divider} />
      <br />
      <h2 className={classes.skillsTitle}>Technologies and Skills</h2>
      <p className={classes.skillsText}>
        {/* Write here a summary of Technologies and Skills */}
      </p>
      <ul className={classes.list}>
        <li className={classes.item}>
          <DiReact size="2rem" style={{color:'white'}} />
          <div className={classes.container}>
            <h4 className={classes.itemTitle}>Front-End</h4>
            <p className={classes.paragraph}>
              Experience with <br />
              HTML CSS JavaScript React.js Next.js JQuery Bootstrap
            </p>
          </div>
        </li>
        <li className={classes.item}>
          <DiNodejsSmall size="2rem" style={{color:'white'}} />
          <div className={classes.container}>
            <h4 className={classes.itemTitle}>Back-End</h4>
            <p className={classes.paragraph}>
              Experience with <br />
              Node.js Express Flask
            </p>
          </div>
        </li>
        <li className={classes.item}>
          <DiFirebase size="2rem" style={{color:'white'}} />
          <div className={classes.container}>
            <h4 className={classes.itemTitle}>Data Bases</h4>
            <p className={classes.paragraph}>
              Experience with <br />
              Mongo SQL MySQL
            </p>
          </div>
        </li>
        <li className={classes.item}>
          <DiCode size="2rem" style={{color:'white'}} />
          <div className={classes.container}>
            <h4 className={classes.itemTitle}>Other <br /> Programming <br />Skills</h4>
            <p className={classes.paragraph}>
              Experience with <br />
              Python Java C# XML Assembly
            </p>
          </div>
        </li>
        <li className={classes.item}>
          <DiCisco size="2rem" style={{color:'white'}} />
          <div className={classes.container}>
            <h4 className={classes.itemTitle}>Networking Skills</h4>
            <p className={classes.paragraph}>
              Experience with <br />
              VMware DNS Cisco Juniper
              Active Directory FW CheckPoint CA Spectrum
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
