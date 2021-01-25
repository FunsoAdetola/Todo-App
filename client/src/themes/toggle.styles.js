import React from "react";
import styled from "styled-components";

export const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  display: flex;
  font-size: 0.5rem;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 50px;
  height: 50px;
 
  }
  @media (max-width: 768px) {
      width: 5rem;
      height:30px;
  }
  svg {
    height: 90%;
    width: 90%;
    transition: all 0.3s linear;
    fill: #f4f4f4;

    // sun icon
    ${
      "" /* &:first-child {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateY(0)" : "translateY(100px)"};
    } */
    }

    // moon icon
    ${
      "" /* &:nth-child(2) {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateY(-100px)" : "translateY(0)"};
    } */
    }
  }
`;
