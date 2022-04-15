import React from "react";
import freinds from "../../assets/images/friends-min.jpg";
import laugh from "../../assets/images/laugh.jpg";
import adventure from "../../assets/images/adventure.jpg";
import koalas from "../../assets/images/koala-smile.png";
import koalar from "../../assets/images/koala-regret.png"
import koalag from "../../assets/images/koala-grateful.png"

export default function Happy() {
  return (
    <>
      <body className="d-flex h-100 text-center text-dark bg-light">
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
                <img src={freinds} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>FRIENDS</h5>
                  <p>Spend as much as time with your friends.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={laugh} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>LAUGH</h5>
                  <p>Laughing is the best medicine.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={adventure} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>ADVENTURE</h5>
                  <p>Go in adventure with your fellows.</p>
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
            <div className="heading-part">
              <h1 className="my-3">Happiness</h1>
              <p className="lead">
                Life is all about enjoyment.
                <br />
                When you are happy, you do not have any regrets.
                <br />
                <br />
                Now, the main question is how to become happy?
                <br />
                The answer to this question is very complex. Staying happy all
                the time is very hard. Everyone has hard time in their life. But
                the one who face thier hard times with smile is the one who
                really lives life with hapiness.
              </p>
            </div>

            <hr class="featurette-divider"></hr>
            <div class="row featurette">
              <div class="col-md-7">
                <h2 class="featurette-heading glow">
                  SMILE. <span class="text-muted">Keep Similing</span>
                </h2>
                <p class="lead">
                  Yes, just a simple smile can change your whole life.
                  <br />
                  <br />
                  Keeping a simple smile, can make you happy, even during your
                  hard times and seeing your beautiful smile, others also get
                  motivated and smile with ypu. But remember do not laugh on
                  others for some reason which demotivates them, instead smile
                  which will make the depressed person happy.
                </p>
              </div>
              <div class="col-md-5">
                <img
                  src={koalas}
                  alt=""
                  className="bd-placeholder-img rounded-circle"
                  width="140"
                  height="140"
                />
              </div>
            </div>
            <hr class="featurette-divider"></hr>
            <div class="row featurette">
              <div class="col-md-7">
                <h2 class="featurette-heading glow">
                  REGRET.{" "}
                  <span class="text-muted">Do not regret for anything</span>
                </h2>
                <p class="lead">
                  Do anything, give your best, so that you do not regret for it.
                  <br />
                  <br />
                  Regreting for something makes us sad. If we give the best of
                  us to do anything, we will not regret even if we fail in that
                  thing, as we have given the best of us. And at the end of the
                  day we will be happy.
                </p>
              </div>
              <div class="col-md-5">
                <img
                  src={koalar}
                  alt=""
                  className="bd-placeholder-img rounded-circle"
                  width="140"
                  height="140"
                />
              </div>
            </div>
            <hr class="featurette-divider"></hr>
            <div class="row featurette">
              <div class="col-md-7">
                <h2 class="featurette-heading glow">
                  GRATEFUL.{" "}
                  <span class="text-muted">Be grateful to others</span>
                </h2>
                <p class="lead">
                  Always be grateful to others in every moment of your life.
                  <br />
                  <br />
                  Being grateful not just means, thanking the person, it is
                  something which comes from inner. It is the sense of
                  brotherhood. Always be open to all. I would suggest at the end
                  of day, pick a diary and write the name of the person, whom
                  you are most grateful.
                </p>
              </div>
              <div class="col-md-5">
                <img
                  src={koalag}
                  alt=""
                  className="bd-placeholder-img rounded-circle"
                  width="140"
                  height="140"
                />
              </div>
            </div>
            <br />
            <hr class="featurette-divider"></hr>
            <p className="lead">
              <span className="thnku">Thank You.</span>
              <br />
              These are the main three tips to be happy throughout your life.
            </p>
          </main>
        </div>
      </body>
    </>
  );
}
