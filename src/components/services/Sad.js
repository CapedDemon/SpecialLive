import React from "react";
import sad1 from "../../assets/images/sad1.jpg"
import sad2 from "../../assets/images/sad2.jpg"
import sad3 from "../../assets/images/sad3.jpg";
import koalacry from "../../assets/images/koala-cry.png"
import koalalone from "../../assets/images/koala-alone.png"
import koalanx from "../../assets/images/koala-anx.png"

export default function Sad() {
  return (
    <>
      <body className="d-flex h-100 text-center text-white bg-dark ">
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
                <img src={sad1} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>DEPRESSION</h5>
                  <p>Many people due to depression and loneliness.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={sad2} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>PEER PRESSURE</h5>
                  <p>Peer Pressure is also one of the main reason of sadness.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={sad3} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>ANXIETY</h5>
                  <p>Anxiety is the root evil of breaking of relationship.</p>
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
            <h1 className="my-4">SADNESS</h1>
            <p className="lead">
              YOU ALL HAVE HARD TIMES, BUT YOU NEED TO CROSS IT WITH SMILES IN OUR FACE.<br />
              <br />
              We all are sad due to some reason. The reason may be many thing, like anxiety, peer pressure, 
              depression due to something bad and many more. See, bad times are the times, when the life takes 
              test from ourself. Always remember that after every bad time, there comes good time and happiness. 
              It doesn't mean that we will not face the bad time. We need to be self motivated to get throught this time. 
            </p>
            <p className="lead">
              <hr className="featurette-divider"></hr>
              <div className="row featurette">
                <div className="col-md-7">
                  <h2 className="featurette-heading glow">
                    PEER PRESSURE AND DEPRESSION.{" "}
                    <span className="text-inv">Main reason for being sad</span>
                  </h2>
                  <p className="lead">
                    Peer Pressure is something in which you are not as much as good, due to which 
                    your friends may make fun or the pressure is from your family. Peer pressure can lead you 
                    to depression. You should always be self-motivated and happy to tackle it. If you are bad at something then try to improve
                    it from today and show others that you are the best or show them that yes you are not good at it but you are good at other thing.

                  </p>
                </div>
                <div className="col-md-5">
                  <img
                    src={koalacry}
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
                    ANXIETY.{" "}
                    <span className="text-inv">
                      Always be calm and not angry.
                    </span>
                  </h2>
                  <p className="lead">
                    Being angry due to small reason can lead to very many bad situations. Anxiety is one of the reason for breaking of relationship.
                    To not to be angry, the main thing to follow is doing meditation. Meditation can make your mind calm and focused. 
                    But id you are angry now, then do a simple thing - take deep breathes and close your eyes.
                  </p>
                </div>
                <div className="col-md-5">
                  <img
                    src={koalanx}
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
                    LONELINESS.{" "}
                    <span className="text-inv">Being lonely always can make you depressed</span>
                  </h2>
                  <p className="lead">
                      Always be open to all. Sometimes, you need to be alone and be introvert to achieve something. 
                      But you should be extrovert even being introvert. You can do that, by not being dumb and quiet, 
                      instead interact with other people to get ideas and also by being open to all, you can light your heart. 
                      You can tell your beloved ones about your bad feeling and can lighten your heart.
                  </p>
                </div>
                <div className="col-md-5">
                  <img
                    src={koalalone}
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
                These are the main three tips to not to be sad.
              </p>
            </p>
          </main>
        </div>
      </body>
    </>
  );
}
