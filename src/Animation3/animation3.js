import React from "react";
import { TweenMax, Tween, Timeline } from "react-gsap";

const Animation3 = props => (
  <div
    style={{
      overflow: "hidden",
      width: "500px",
      top: "45px",
      left: "50px",
      position: "relative",
      height: "200px",
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
        marginTop: "-30px"
      }}
    >
      <Timeline
        target={
          <div
            style={{
              position: "absolute",
              backgroundColor: "black",
              height: "25px",
              width: "25px",
              borderRadius: "50%",
              marginTop: "-9px",
              left: "50%",
              marginLeft: "-9px"
            }}
          ></div>
        }
        repeat={-1}
      >
        <Tween duration={1.3} ease="easeOUT" to={{ y: "50px" }} />
        <Tween duration={0.2} ease="linear" to={{ y: "0px" }} />
        <Tween duration={0.5} />
        <Tween duration={1.3} ease="easeOUT" to={{ y: "-50px" }} />
        <Tween duration={0.2} ease="linear" to={{ y: "0px" }} />
        <Tween duration={0.5} />
      </Timeline>
      <Timeline
        target={
          <div
            style={{
              position: "absolute",
              backgroundColor: "black",
              height: "25px",
              width: "25px",
              borderRadius: "50%",
              marginTop: "-9px",
              left: "50%",
              marginLeft: "-9px"
            }}
          ></div>
        }
        repeat={-1}
      >
        <Tween duration={1.3} ease="easeOUT" to={{ y: "-50px" }} />
        <Tween duration={0.2} ease="linear" to={{ y: "0px" }} />
        <Tween duration={0.5} />
        <Tween duration={1.3} ease="easeOUT" to={{ y: "50px" }} />
        <Tween duration={0.2} ease="linear" to={{ y: "0px" }} />
        <Tween duration={0.5} />
      </Timeline>
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
        <Tween duration={0.75} ease="linear" to={{ y: "-50px", x: "113px" }} />
        <Tween duration={0.75} ease="linear" to={{ y: "0px", x: "240px" }} />
        <Tween duration={0.5} />
        <Tween duration={0.75} ease="linear" to={{ y: "50px", x: "113px" }} />
        <Tween duration={0.75} ease="linear" to={{ y: "0", x: "0" }} />
        <Tween duration={0.5} />
      </Timeline>
      <Timeline
        target={
          <div
            style={{
              backgroundColor: "black",
              height: "25px",
              width: "25px",
              borderRadius: "50%",
              marginTop: "-25px",
              left: "475px"
            }}
          ></div>
        }
        repeat={-1}
      >
        <Tween duration={0.0} ease="linear" to={{ x: "475px" }} />
        <Tween duration={0.75} ease="linear" to={{ y: "50px", x: "365px" }} />
        <Tween duration={0.75} ease="linear" to={{ y: "0px", x: "240px" }} />
        <Tween duration={0.5} />
        <Tween duration={0.75} ease="linear" to={{ y: "-50px", x: "365px" }} />
        <Tween duration={0.75} ease="linear" to={{ y: "0px", x: "475px" }} />
        <Tween duration={0.5} />
      </Timeline>
    </div>
  </div>
);

export default Animation3;
