import React, { Component } from "react";
import "./assets/css/sidebar.css";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="instructions">
        <h2 className="header">Instructions</h2>
        <p>Follow the instructions below to get Your Google Drive file Link</p>
        <hr />
        <ol>
          <li>
            open
            <a href="https://drive.google.com">
              Google Drive
            </a>
          </li>
          <li>Right Click on a file</li>
          <li>Select get Link and click "CopyLink"</li>
          <li>Paste the Link here and Click "Generate Direct link" button </li>
        </ol>
      </div>
    );
  }
}
