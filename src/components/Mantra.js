import React from "react";
import "./css/mantra.css";
import learning from "../assets/images/learning.png"
import comfort from "../assets/images/comfort-final.jpg"
import talk from "../assets/images/talk.png"
import family from "../assets/images/family.png"
import help from "../assets/images/help.jpg"

export default function Mantra() {
  return (
    <>
      <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div class="col-md-5 p-lg-5 mx-auto my-5">
          <h1 class="display-4 fw-normal">LIVE SPECIAL</h1>
          <p class="lead fw-normal">
            Here are the main mantras to live everyday special from the previous
            day.
          </p>
        </div>
        <hr class="featurette-divider"></hr>
        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">
              Do special and creative.{" "}
              <span class="text-muted">Innovative.</span>
            </h2>
            <p class="lead">
              Take your mindcaps on. Do something extraordinary, and special
              everyday. Make things. Do or make things to make other happy or to
              be happy.
            </p>
          </div>
          <div class="col-md-5">
            <img
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              src={learning}
              alt=""
            />

            <rect width="100%" height="100%" fill="#eee"></rect>
          </div>
        </div>
        <hr class="featurette-divider"></hr>
        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">
              Take Risks. <span class="text-muted">Be adventurous.</span>
            </h2>
            <p class="lead">
              Get out of your comfort zone. Take risks in your life and live
              special than the previous day. BE adventurous.
            </p>
          </div>
          <div class="col-md-5 order-md-1">
            <img
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              src={comfort}
              alt=""
            />
            <rect width="100%" height="100%" fill="#eee"></rect>
          </div>
        </div>
        <hr class="featurette-divider"></hr>
        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">
              Be Open Minded{" "}
              <span class="text-muted">Always be open to all.</span>
            </h2>
            <p class="lead">
              Listening to others' ideas can increase your brain power and can
              make you shrp. You will be able to learn wherever possible.
            </p>
          </div>
          <div class="col-md-5">
            <img
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              src={talk}
              alt=""
            />
            <rect width="100%" height="100%" fill="#eee"></rect>
          </div>
        </div>
        <hr class="featurette-divider"></hr>
        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">
              Show care to your loved ones <span class="text-muted">Love others.</span>
            </h2>
            <p class="lead">
              You should always care the people who care you and love you the most. Family and friends will always 
              appreciate your love and care. And also it'll always brighten a stranger's day to hear random compliment. So care others.
            </p>
          </div>
          <div class="col-md-5 order-md-1">
            <img
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              src={family}
              alt=""
            />
            <rect width="100%" height="100%" fill="#eee"></rect>
          </div>
        </div>
        <hr class="featurette-divider"></hr>
        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">
              Kind to others{" "}
              <span class="text-muted">Always be ready to help others.</span>
            </h2>
            <p class="lead">
              Everyday, you'll see that someone is needy. If you could you can help the person to your limit, but even a simple 
              smile and kind word can do a magic and can act as healing pill for the person.
            </p>
          </div>
          <div class="col-md-5">
            <img
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              src={help}
              alt=""
            />
            <rect width="100%" height="100%" fill="#eee"></rect>
          </div>
        </div>
        <div class="product-device shadow-sm d-none d-md-block"></div>
        <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
    </>
  );
}
