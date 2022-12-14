import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BackIcon from "../icons/BackIcon/BackIcon";
import styles from "./BackLink.module.scss";

const CONSTANT_BACK_TITLE = "Back";

const BackLink = ({ location, alternativePath }) => {
  return (
    <Link
      to={location?.state?.from || alternativePath}
      className={styles.link}
      title={CONSTANT_BACK_TITLE}
    >
      <BackIcon />
      <span>{CONSTANT_BACK_TITLE}</span>
    </Link>
  );
};

export default BackLink;

BackLink.propTypes = {
  location: PropTypes.object.isRequired,
  alternativePath: PropTypes.string.isRequired,
};
