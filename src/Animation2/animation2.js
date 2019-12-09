import React from "react";
import { Tween, Timeline } from "react-gsap";
import { relative } from "path";

const Animation2 = props => (
  <div
    style={{
      overflow: "hidden",
      width: "500px",
      top: "45px",
      left: "50px",
      position: "relative",
      height: "100px",
      backgroundColor: "grey"
    }}
  >
    <div
      style={{
        backgroundImage: "linear-gradient(to bottom right, #ffe3ed, #111111)",
        position: "absolute",
        width: "100%",
        height: "6px",
        borderRadius: "5px",
        top: "50%",
        marginTop: "-25px"
      }}
    >
      <Timeline
        target={
          <div
            style={{
              backgroundColor: "black",
              height: "25px",
              width: "25px",
              borderRadius: "50%",
              marginTop: "-9px"
            }}
          ></div>
        }
        repeat={-1}
      >
        <Tween duration={2} ease="linear" to={{ x: "475px" }} />
        <Tween duration={2} ease="linear" to={{ x: "0px" }} />
      </Timeline>
    </div>
  </div>
);

export default Animation2;
