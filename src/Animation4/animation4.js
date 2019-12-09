import React from "react";
import { TweenMax, Tween, Timeline } from "react-gsap";

const Animation4 = props => (
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
      <Tween duration={0.05} to={{ y: "-25px" }} />
      <Tween duration={1.5} ease="Expo.easeIn" to={{ y: "450px" }} />
      <Tween duration={0.6} ease="Expo.easeOut" to={{ y: "300px" }} />
      <Tween duration={0.6} ease="Expo.easeIn" to={{ y: "500px" }} />
      <Tween duration={0.45} />
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
      <Tween duration={0.1} to={{ y: "-25px" }} />
      <Tween duration={1.5} ease="Expo.easeIn" to={{ y: "450px" }} />
      <Tween duration={0.6} ease="Expo.easeOut" to={{ y: "300px" }} />
      <Tween duration={0.6} ease="Expo.easeIn" to={{ y: "500px" }} />
      <Tween duration={0.4} />
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
      <Tween duration={0.15} to={{ y: "-25px" }} />
      <Tween duration={1.5} ease="Expo.easeIn" to={{ y: "450px" }} />
      <Tween duration={0.6} ease="Expo.easeOut" to={{ y: "300px" }} />
      <Tween duration={0.6} ease="Expo.easeIn" to={{ y: "500px" }} />
      <Tween duration={0.35} />
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
      <Tween duration={0.2} to={{ y: "-25px" }} />
      <Tween duration={1.5} ease="Expo.easeIn" to={{ y: "450px" }} />
      <Tween duration={0.6} ease="Expo.easeOut" to={{ y: "300px" }} />
      <Tween duration={0.6} ease="Expo.easeIn" to={{ y: "500px" }} />
      <Tween duration={0.3} />
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
            left: "43%"
          }}
        ></div>
      }
      repeat={-1}
    >
      <Tween duration={0.25} to={{ y: "-25px" }} />
      <Tween duration={1.5} ease="Expo.easeIn" to={{ y: "450px" }} />
      <Tween duration={0.6} ease="Expo.easeOut" to={{ y: "300px" }} />
      <Tween duration={0.6} ease="Expo.easeIn" to={{ y: "500px" }} />
      <Tween duration={0.25} />
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
            left: "53%"
          }}
        ></div>
      }
      repeat={-1}
    >
      <Tween duration={0.3} to={{ y: "-25px" }} />
      <Tween duration={1.5} ease="Expo.easeIn" to={{ y: "450px" }} />
      <Tween duration={0.6} ease="Expo.easeOut" to={{ y: "300px" }} />
      <Tween duration={0.6} ease="Expo.easeIn" to={{ y: "500px" }} />
      <Tween duration={0.2} />
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
            left: "63%"
          }}
        ></div>
      }
      repeat={-1}
    >
      <Tween duration={0.35} to={{ y: "-25px" }} />
      <Tween duration={1.5} ease="Expo.easeIn" to={{ y: "450px" }} />
      <Tween duration={0.6} ease="Expo.easeOut" to={{ y: "300px" }} />
      <Tween duration={0.6} ease="Expo.easeIn" to={{ y: "500px" }} />
      <Tween duration={0.15} />
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
            left: "73%"
          }}
        ></div>
      }
      repeat={-1}
    >
      <Tween duration={0.4} to={{ y: "-25px" }} />
      <Tween duration={1.5} ease="Expo.easeIn" to={{ y: "450px" }} />
      <Tween duration={0.6} ease="Expo.easeOut" to={{ y: "300px" }} />
      <Tween duration={0.6} ease="Expo.easeIn" to={{ y: "500px" }} />
      <Tween duration={0.1} />
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
            left: "83%"
          }}
        ></div>
      }
      repeat={-1}
    >
      <Tween duration={0.45} to={{ y: "-25px" }} />
      <Tween duration={1.5} ease="Expo.easeIn" to={{ y: "450px" }} />
      <Tween duration={0.6} ease="Expo.easeOut" to={{ y: "300px" }} />
      <Tween duration={0.6} ease="Expo.easeIn" to={{ y: "500px" }} />
      <Tween duration={0.05} />
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
            left: "93%"
          }}
        ></div>
      }
      repeat={-1}
    >
      <Tween duration={0.5} to={{ y: "-25px" }} />
      <Tween duration={1.5} ease="Expo.easeIn" to={{ y: "450px" }} />
      <Tween duration={0.6} ease="Expo.easeOut" to={{ y: "300px" }} />
      <Tween duration={0.6} ease="Expo.easeIn" to={{ y: "500px" }} />
    </Timeline>
  </div>
);

export default Animation4;
