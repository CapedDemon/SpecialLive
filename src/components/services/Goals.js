import React from "react";
import "../css/goals.css";
import goal1 from "../../assets/images/goal1.jpg"
import goal2 from "../../assets/images/goal2.jpg"
import goal3 from "../../assets/images/goal3.jpg";
import koalad from "../../assets/images/koala-dream.png"
import koalat from "../../assets/images/koala-think.png"
import koalado from "../../assets/images/koala-do.png"
import arr from "../../assets/images/right-arrow.png"
import koalapro from "../../assets/images/koala-pro.png"
import koalamed from "../../assets/images/koala-meditate.png"
import koalapas from "../../assets/images/koala-pas.png"

export default function Goals() {
  return (
    <>
      <body className="d-flex h-100 text-center text-white ">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={goal1} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>MOTIVATION</h5>
                  <p>Inner motivation is the key to success.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={goal2} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>WRITE IT</h5>
                  <p>Write your goals and do it in a systematic way.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={goal3} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>SUCCESS</h5>
                  <p>Success is at your doorstep.</p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <main className="px-3">
            <h1 className="my-4">GOALS</h1>
            <p className="lead">
              DO IT, JUST DO IT <br />
              <br />
              You must have goals to be achieved in your life. Without goals,
              the life is nothing. You should be always motivated to achieve
              your goals, and motivation can only come from being happy and not
              sad. Think about the people, for whom you want to do something.
              Think about them. Hunger can led you to do harwork. Finally,
              achieve your goals.
              <br />
              <br />
              The mantra to success is - <br />
              Dream, think and action. <br />
              <img
                src={koalad}
                alt=""
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
              />
              <img
                src={arr}
                alt=""
                className="bd-placeholder-img rounded-circle mx-2"
                width="40"
                height="40"
              />
              <img
                src={koalat}
                alt=""
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
              />
              <img
                src={arr}
                alt=""
                className="bd-placeholder-img rounded-circle mx-2"
                width="40"
                height="40"
              />
              <img
                src={koalado}
                alt=""
                className="bd-placeholder-img rounded-circle mx-2"
                width="140"
                height="140"
              />
            </p>
            <p className="lead">
              <hr className="featurette-divider"></hr>
              <div className="row featurette">
                <div className="col-md-7">
                  <h2 className="featurette-heading glow">
                    PROCASTINATION.{" "}
                    <span className="text-inv">Do not procastinate</span>
                  </h2>
                  <p className="lead">
                    When you start anything, you should complete it.
                    <br />
                    <br />
                    Procastination is one of the main reason why people fail in
                    their life. You should complete one task before going to
                    other, even the task is very hard. You must not run from
                    work, else, do the work so that success comes to you.
                  </p>
                </div>
                <div className="col-md-5">
                  <img
                    src={koalapro}
                    alt=""
                    className="bd-placeholder-img rounded-circle"
                    width="140"
                    height="140"
                  />
                </div>
              </div>
              <hr className="featurette-divider"></hr>
              <div className="row featurette">
                <div className="col-md-7">
                  <h2 className="featurette-heading glow">
                    MEDITATE.{" "}
                    <span className="text-inv">
                      Meditate to increase your focus
                    </span>
                  </h2>
                  <p className="lead">
                    Meditation is the key to increase at all of your levels.
                    <br />
                    <br />
                    Meditation gives you the inner peace, which keeps you calm,
                    you can always focus at what you are doing, increase your
                    logic building skills and many more. Do meditation to reach
                    the success. Meditation can helps you to organise your work
                    which can make you even faster to reach the goals.
                  </p>
                </div>
                <div className="col-md-5">
                  <img
                    src={koalamed}
                    alt=""
                    className="bd-placeholder-img rounded-circle"
                    width="140"
                    height="140"
                  />
                </div>
              </div>
              <hr className="featurette-divider"></hr>
              <div className="row featurette">
                <div className="col-md-7">
                  <h2 className="featurette-heading glow">
                    PASSION.{" "}
                    <span className="text-inv">Be passionate to your work</span>
                  </h2>
                  <p className="lead">
                    You should like the work you do it.
                    <br />
                    <br />
                    Being passionate to your work, can increase the want for it
                    and you wil be published in your life. If you are passionate
                    about something, then you are interested in it, which means
                    that you can do that task very eeasily. So, you should do
                    the work which most fits you.
                  </p>
                </div>
                <div className="col-md-5">
                  <img
                    src={koalapas}
                    alt=""
                    className="bd-placeholder-img rounded-circle"
                    width="140"
                    height="140"
                  />
                </div>
              </div>
              <hr class="featurette-divider"></hr>
              <p className="lead">
                <span className="thnku">Thank You.</span>
                <br />
                These are the main three tips to achieve your goals.
              </p>
            </p>
          </main>
        </div>
      </body>
    </>
  );
}
