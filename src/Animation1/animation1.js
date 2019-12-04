import React from "react";
import { Tween, Timeline } from "react-gsap";

const Animation1 = props => (
  <div>
    <Tween from={{ x: "-100%" }} to={{ x: "0%" }} duration={1} ease="easeOut">
      <div
        style={{
          backgroundImage: "linear-gradient(to bottom right, #ffe3ed, #fffdf9)",
          width: "100%",
          height: "500px",
          overflow: "hidden"
        }}
      >
        <Timeline
          target={
            <div
              style={{
                height: "0",
                position: "absolute",
                width: "0",
                backgroundSize: "100% auto",
                backgroundImage: `url(${require("./main1.jpg")})`,
                top: "50%",
                left: "50%",
                backgroundRepeat: "no-repeat",
                zIndex: 2,
                opacity: 1,
                backgroundPosition: "center"
              }}
            ></div>
          }
        >
          <Tween duration={2} />
          <Tween
            to={{
              width: "70%",
              height: "70%",
              left: "15%",
              top: "15%"
            }}
            duration={1}
          />
        </Timeline>
        <Timeline
          target={
            <div
              style={{
                position: "relative",
                height: "100%",
                width: "100%",
                backgroundImage:
                  "linear-gradient(to bottom right, #9be3de, #beebe9)",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            ></div>
          }
        >
          <Tween from={{ x: "200%" }} to={{ x: "100%" }} duration={1} />
          <Tween to={{ x: "0%" }} duration={1} ease="easeOut" />
          <Tween
            to={{ width: "80%", height: "80%", top: "10%" }}
            duration={1}
            ease="easeIN"
          />
        </Timeline>
      </div>
    </Tween>
  </div>
);

export default Animation1;
