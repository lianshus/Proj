/*
 * @Author: diana
 * @Date: 2023-06-03 01:20:11
 * @LastEditTime: 2023-06-03 01:20:18
 */
import React,  { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const LineFlow = () => {
  const [active, setActive] = useState(false);
  const animatedProps = useSpring({
    to: async (next, cancel) => {
      await next({ left: "100%", width: "0%", backgroundColor: "#f00" });
      await next({ left: "100%", width: "100%", backgroundColor: "#f00" });
      await next({ left: "-100%", width: "100%", backgroundColor: "#fff" });
    },
    from: { left: "-100%", width: "100%", backgroundColor: "#fff" },
    reset: true,
    reverse: active,
    config: { duration: 2000 }
  });

  return (
    <div className="container" onClick={() => setActive(!active)}>
      <animated.span className="line" style={animatedProps} />
    </div>
  );
};

export default LineFlow;