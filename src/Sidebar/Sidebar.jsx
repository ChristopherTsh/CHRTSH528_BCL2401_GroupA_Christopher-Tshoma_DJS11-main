import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
    return (
      <div className="sidebar">
        <h2>Your Library</h2>
        <button>Create playlist</button>
        <div>
          <h3>Let's find some podcasts to follow</h3>
          <button>Browse podcasts</button>
        </div>
      </div>
    );
  }
  
 