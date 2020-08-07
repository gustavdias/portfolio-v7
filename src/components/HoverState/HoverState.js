import React from "react";
import { useSpring, animated } from "react-spring";

import "./HoverState.css";

function HoverState() {
  const [{ y, color }, set] = useSpring(() => ({ y: 100, color: "#eaded0" }));
  return (
    <div >
      <button
        onMouseEnter={() => set({ y: 0, color: "#000" })}
        onMouseLeave={() => set({ y: 100, color: "#0f0a10" })}
      >
        <animated.span style={{ color }}>
          react-spring is way easy
        </animated.span>
        <animated.div
          style={{ transform: y.interpolate(v => `translateY(${v}%`) }}
          className="glance"
        />
      </button>
    </div>
  );
}

export default HoverState;
