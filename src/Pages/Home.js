import { useEffect, useState } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import fade from "../Images/fading-lines.png";

function Home() {
  const time = new Date().toLocaleTimeString("en-US", {
    timeZone: "Asia/Katmandu",
  });

  const date = new Date().toLocaleDateString("en-US", {
    timeZone: "Asia/Katmandu",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const [currentTime, setCurrentTime] = useState(time);

  const updateTime = () => {
    let time = new Date().toLocaleTimeString("en-US", {
      timeZone: "Asia/Katmandu",
    });
    setCurrentTime(time);
  };
  setInterval(updateTime, 1000);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section>
        <div className="container home">
          <div
            className="main-home"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div>
              <h1 className="title-name">Spongly</h1>
              <p>
                15-year-old <span>IT enthusiast</span> and Technological
                aspirant from Nepal
              </p>
              <div className="time">
                <i className="bx bx-time-five"></i>
                <span>
                  {date} • {currentTime}
                </span>
              </div>
            </div>
            <div
              class="socials aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600"
            >
              <a href="https://github.com/Spongly">
                <i className="bx bxl-github"></i>
              </a>
              <a href="https://discordapp.com/users/600242679380574228">
                <i className="bx bxl-discord-alt"></i>
              </a>
              <a href="https://www.youtube.com/channel/UClnAAH0LnfrX6qXzhqN4p7w">
                <i className="bx bxl-youtube"></i>
              </a>
            </div>
          </div>
          <div className="iaa" data-aos="fade-up" data-aos-duration="800">
            <h1 className="title">
              Interests <br /> and <br /> Abilities
            </h1>
            <img src={fade} alt="" className="fade" />
            <div className="iaa-div">
              <span>Technology</span>
              <span>Hardware</span>
              <span>Gaming</span>
              <span>Cars</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h1 className="title">
              Projects <br /> and <br /> Work
            </h1>
            <span className="line"></span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
