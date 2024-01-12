import React from "react";
import { KeyboardArrowUp } from "@mui/icons-material";
import PropTypes from "prop-types";
import "../styles/topStudent.scss";

const TopStudent = ({ title, isMoney, link, icon, amount, diff }) => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{title}</span>
        <span className="counter">
          {isMoney && "$"} {amount}
        </span>
        <span className="link">{link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUp />
          {diff} %
        </div>
        {icon}
      </div>
    </div>
  );
};

TopStudent.propTypes = {
  title: PropTypes.string.isRequired,
  isMoney: PropTypes.bool.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  amount: PropTypes.number.isRequired,
  diff: PropTypes.string.isRequired,
};

export default TopStudent;
