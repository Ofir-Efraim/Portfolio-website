import React from "react";
import useStyles from "./ProjectsStyles";
import {projects} from "../../constants/projects";
const Projects = () => {
    const classes = useStyles();
    return (
      <section id="projects" className={classes.main}>
        <div className={classes.divider}/>
        <h2 className={classes.projectsTitle}>Projects</h2>
        <section className={classes.projcetsSection}>
        {projects.map(({id, image, title, description, tags, source, visit}) => (
          <div key={id} className={classes.card}>
            <img src={image} alt="projectPicture" className={classes.image}/>
            <div className={classes.titleContent}>
              <h3 className={classes.headerStyled}>{title}</h3>
              <hr className={classes.styledHr}/>
            </div>
            <p className={classes.description}>{description}</p>
            <div>
              <div className={classes.titleContent}>Stack</div>
              <ul className={classes.list}>
              {tags.map((tag, i) => (
                <li className={classes.item} key={i}>{tag}</li>
              ))}
              </ul>
            </div>
            <ul className={classes.utility}>
              <a className={classes.exLinks} href={visit}>Code</a>
              {id<2 ? <a className={classes.exLinks} href={source}>Live Version</a> :null}
            </ul>
            </div>
        ))}
        </section>
      </section>
    )
  };
  
  export default Projects;
  