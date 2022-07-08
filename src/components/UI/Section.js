import PropTypes from "prop-types";
import classes from "./Section.module.css";

const Section = ({ children }) => (
  <section className={classes.section}>{children}</section>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
