import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home-logo">
        <Logo />
      </div>

      <div className="home-inner">
        <Header />
        <div className="home-div">
          <p>Stay Organized and Plan your Day</p>

          <div>
            <div className="home-button">
              <span>No account?</span>

              <Link className="link" to="/user/sign-up">
                <button>SignUp</button>
              </Link>
            </div>
            <div className="home-button">
              <span>Have an account??</span>
              <Link className="link" to="/user/login">
                <button>Login</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
