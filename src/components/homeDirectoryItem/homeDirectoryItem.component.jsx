import React from "react";
import "./homeDirectoryItem.style.scss";
import { Paper, Button } from "@material-ui/core";

const HomeDirectoryItem = ({ imageUrl, title }) => {
  return (
    <Paper>
      <div className="mySlide ">
        <div className="text">{title}</div>
        <img
          className="image"
          src={ imageUrl}
        />
      </div>
    </Paper>
  );
};
export default HomeDirectoryItem;
