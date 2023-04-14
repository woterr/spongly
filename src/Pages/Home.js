import { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import fade from "../Images/fading-lines.png";
function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section>
        <div className="container home">
          <div className="flex2" data-aos="fade-right" data-aos-duration="800">
            <p>I'm a 15-year-old Nepalese IT enthusiast.</p>
            <span className="line"></span>
          </div>
          <div className="flex2" data-aos="fade-up" data-aos-duration="800">
            <span className="dot"></span>
            <p>
              {" "}
              I've always been interested in technology, and I'm constantly keen
              to learn new things and develop myself.{" "}
            </p>
            <span className="line"></span>
          </div>
          <div className="flex2" data-aos="fade-left" data-aos-duration="800">
            <div className="arrow">
              <span className="line"></span>
              <i className="bx bx-chevron-right arrow-syb"></i>
            </div>
            <p>
              I adore web programming, gaming, and playing with electronics, and
              I'm always looking for new ways to improve my abilities and
              knowledge in these areas.
            </p>
          </div>
          <div className="iaa" data-aos="fade-up" data-aos-duration="800">
            <h1 className="title">
              Interests <br /> and <br /> Abilities
            </h1>
            <img src={fade} alt="" className="fade" />
            <div className="iaa-div">
              <span>Web programming</span>
              <span>Tech and Hardware</span>
              <span>Gaming</span>
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
