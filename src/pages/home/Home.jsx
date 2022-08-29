import React from "react";

import "./Home.css";

import { Rightbar } from "../../components/rightbar/Rightbar";
import { TimeLine } from "../../components/timeline/TimeLine";
import { Topbar } from "../../components/topbar/Topbar";
import { Sidebar } from "../../components/sidebar/Sidebar";

export const Home = () => {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <TimeLine />
        <Rightbar />
      </div>
    </>
  );
};
