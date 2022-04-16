import React from "react";
import video from "../assets/videos/high.mp4";
import "./css/Home.css";
import Typical from "react-typical";
import idea from "../assets/images/idea.png"
import celebrate from "../assets/images/celebrate.png"
import sad from "../assets/images/sad.png"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="showcase">
        <video src={video} muted loop autoplay="autoplay"></video>
        <div className="overlay"></div>
        <div className="text">
          <h3  data-text="ASPIRATION IN HIGHTS">
            ASPIRATION IN HIGHTS
          </h3>
          <h5>Live Life To The Fullest</h5>
          <p>
            <span className="head-t" data-text="SpecialLife">
              SpecialLife
            </span>{" "}
            is the place in which you can get the full guide to live the life to
            the fullest. All the essential of life -{" "}
            <span className="essential">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={["GOALS", 2000, "HAPPINESS", 2000, "SADNESS", 2000]}
                />
              </h1>
            </span>{" "}
            is covered here.
            <br />
          </p>
          <br />
          <div className="check">
            <h6>MAIN MANTRA TO LIVE SPECIAL - </h6>
            <Link to="/mainmantra">Explore</Link>
          </div>
          
        </div>
        <div className="services">
          <div className="container py-4">
            <div className="p-5 mb-4 bg-light rounded-3">
              <div className="container-fluid py-5">
                <h1 className="move">HAPPINESS</h1>
                <img
                  src={celebrate}
                  className="bd-placeholder-img rounded-circle"
                  width="140"
                  height="140"
                  alt=""
                />
                <div className="check">
                  <Link to="/service/happy">Explore</Link>
                </div>
              </div>
            </div>

            <div className="row align-items-md-stretch">
              <div className="col-md-6">
                <div className="h-100 p-5 text-white bg-light rounded-3">
                  <h2 className="move">SADNESS</h2>
                  <img
                    src={sad}
                    className="bd-placeholder-img rounded-circle"
                    width="140"
                    height="140"
                    alt=""
                  />
                  <div className="check">
                    <Link to="/service/sad">Explore</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="h-100 p-5 bg-light border rounded-3">
                  <h2 className="move">GOALS</h2>
                  <img
                    src={idea}
                    className="bd-placeholder-img rounded-circle"
                    width="140"
                    height="140"
                    alt=""
                  />
                  <div className="check">
                    <Link to="/service/goals">Explore</Link>
                  </div>
                </div>
              </div>
            </div>

            <footer className="pt-3 mt-4 text-muted border-top"></footer>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
