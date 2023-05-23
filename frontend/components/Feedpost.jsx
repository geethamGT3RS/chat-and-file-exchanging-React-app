import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../feature/userSlice";
import "./css/Feedpost.css";

function Feedpost() {
  const user = useSelector(selectUser);
  return (
    <div className="quoraBox">
      <div className="quoraBox__info">
        <Avatar src={user?.photo} />
      </div>
      <div className="quoraBox__quora">
        <h5>What is your question or link?</h5>
      </div>
    </div>
  );
}

export default Feedpost;