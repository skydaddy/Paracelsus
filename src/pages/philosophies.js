import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function () {
  const props = useSpring({ opacity:1, from: { opacity: 0 } });
  return (
    <div className="content" id="wow">
      <animated.div style={props}>
      <p>Let us discover a new world within the reflections of those who lived before us.</p>
      <p>Never give up my friend, no matter what</p>
      </animated.div>
    </div>
  )
}