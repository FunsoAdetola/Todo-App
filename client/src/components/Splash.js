import React from "react";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";

export default function Splash() {
  return (
    <div className="splash-screen">
      <div className="splash-inner">
        <Logo />
      </div>
    </div>
  );
}
