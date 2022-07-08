import PropTypes from "prop-types";
import classes from "./TaskItem.module.css";

const TaskItem = ({ children }) => <li className={classes.task}>{children}</li>;

TaskItem.propTypes = {
  children: PropTypes.string.isRequired,
};

export default TaskItem;
