import React, { useRef } from "react";
import styled from "@emotion/styled";

const StyledLogoContainer = styled.div`
  position: absolute;
  bottom: 40px;
  left: 40px;
  width: 140px;
  svg {
    fill: #fff;
  }
`;

const Logo = () => {
  const SVGRef = useRef();
  const parentRectRef = useRef();
  const rect1Ref = useRef();
  const rect2Ref = useRef();
  const rect3Ref = useRef();
  const rect4Ref = useRef();
  const rect5Ref = useRef();
  const rect6Ref = useRef();
  const rect7Ref = useRef();
  const rect8Ref = useRef();
  const rect9Ref = useRef();
  const rect10Ref = useRef();
  const circle1Ref = useRef();
  const circle2Ref = useRef();
  return (
    <StyledLogoContainer>
      <svg
        ref={SVGRef}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 590 110"
      >
        <g className="slashSVG" ref={parentRectRef}>
          <rect
            ref={rect1Ref}
            fill="#fff"
            y="2.6"
            width="13.1"
            height="104.8"
          />
          <rect
            ref={rect2Ref}
            fill="#fff"
            x="34.4"
            y="2.6"
            width="13.2"
            height="104.8"
          />
          <rect
            ref={rect3Ref}
            fill="#fff"
            x="69"
            y="2.6"
            width="13.1"
            height="104.8"
          />
          <rect
            ref={rect4Ref}
            fill="#fff"
            x="227.4"
            y="2.6"
            width="13.1"
            height="104.8"
          />
          <rect
            ref={rect5Ref}
            fill="#fff"
            x="264.3"
            y="2.6"
            width="13.1"
            height="104.8"
          />
          <rect
            ref={rect6Ref}
            fill="#fff"
            x="301.2"
            y="2.6"
            width="13.1"
            height="104.8"
          />
          <rect
            ref={rect7Ref}
            fill="#fff"
            x="338"
            y="2.6"
            width="13.1"
            height="104.8"
          />
          <rect
            ref={rect8Ref}
            fill="#fff"
            x="374.9"
            y="2.6"
            width="13.1"
            height="104.8"
          />
          <rect
            ref={rect9Ref}
            fill="#fff"
            x="411.8"
            y="2.6"
            width="13.1"
            height="104.8"
          />
          <rect
            ref={rect10Ref}
            fill="#fff"
            x="448.7"
            y="2.6"
            width="13.1"
            height="104.8"
          />
        </g>
        <circle
          ref={circle1Ref}
          fill="none"
          stroke="#fff"
          strokeWidth="12.2249"
          strokeMiterlimit="10"
          cx="534.9"
          cy="55"
          r="47.8"
        />
        <circle
          ref={circle2Ref}
          stroke="#fff"
          fill="none"
          strokeWidth="12.2249"
          strokeMiterlimit="10"
          cx="152.2"
          cy="55"
          r="47.8"
        />
      </svg>
    </StyledLogoContainer>
  );
};

export default Logo;
