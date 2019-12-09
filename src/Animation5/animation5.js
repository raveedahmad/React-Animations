import React from "react";
import { TweenMax, Tween, Timeline } from "react-gsap";

const Animation5 = props => (
  <div
    style={{
      overflow: "hidden",
      width: "500px",
      top: "45px",
      left: "50px",
      position: "relative",
      height: "500px",
      backgroundColor: "grey"
    }}
  >
    <Timeline
      target={
        <div
          style={{
            position: "absolute",
            backgroundColor: "black",
            top: "-25px",
            height: "25px",
            width: "25px",
            borderRadius: "50%",
            left: "3%"
          }}
        ></div>
      }
      repeat={-1}
    >
      <Tween to={{ y: "-25px" }} />
      <Tween duration={1.2} ease="Expo.easeIn" to={{ y: "450px" }} />
      <Tween duration={0.6} ease="Expo.easeOut" to={{ y: "300px" }} />
      <Tween duration={0.6} ease="Expo.easeIn" to={{ y: "500px" }} />
      <Tween duration={3.6} />
    </Timeline>
    <Timeline
      target={
        <div
          style={{
            position: "absolute",
            backgroundColor: "black",
            top: "-25px",
            height: "25px",
            width: "25px",
            borderRadius: "50%",
            left: "13%",
            top: "-25px"
          }}
        ></div>
      }
      repeat={-1}
    >
      <Tween to={{ y: "-25px" }} />
      <Tween duration={1.2} ease="Expo.easeIn" to={{ y: "450px" }} />
      <Tween duration={1.2} />
      <Tween duration={0.6} ease="Expo.easeOut" to={{ y: "300px" }} />
      <Tween duration={0.6} ease="Expo.easeIn" to={{ y: "500px" }} />
      <Tween duration={2.4} />
    </Timeline>
    <Timeline
      target={
        <div
          style={{
            position: "absolute",
            backgroundColor: "black",
            top: "-25px",
            height: "25px",
            width: "25px",
            borderRadius: "50%",
            left: "23%"
          }}
        ></div>
      }
      repeat={-1}
    >
      <Tween to={{ y: "-25px" }} />
      <Tween duration={1.2} ease="Expo.easeIn" to={{ y: "450px" }} />
      <Tween duration={2.4} />
      <Tween duration={0.6} ease="Expo.easeOut" to={{ y: "300px" }} />
      <Tween duration={0.6} ease="Expo.easeIn" to={{ y: "500px" }} />
      <Tween duration={1.2} />
    </Timeline>
    <Timeline
      target={
        <div
          style={{
            position: "absolute",
            backgroundColor: "black",
            top: "-25px",
            height: "25px",
            width: "25px",
            borderRadius: "50%",
            left: "33%"
          }}
        ></div>
      }
      repeat={-1}
    >
      <Tween to={{ y: "-25px" }} />
      <Tween duration={1.2} ease="Expo.easeIn" to={{ y: "450px" }} />
      <Tween duration={3.6} />
      <Tween duration={0.6} ease="Expo.easeOut" to={{ y: "300px" }} />
      <Tween duration={0.6} ease="Expo.easeIn" to={{ y: "500px" }} />
    </Timeline>
  </div>
);

export default Animation5;
