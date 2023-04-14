import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

function Design() {
  const navigate = useNavigate();
  const [sentHandle, setSentHandle] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleData(e) {
    e.preventDefault();

    navigate("/sent");
    await axios
      .post("https:///full-third-wandflower.glitch.me/designs", {
        name: name,
        email: email,
        message: message,
      })
      .then((res) => {
        console.log(res);
      });
  }
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <section className="section">
        <div className="container">
          <h1
            className="title"
            style={{ marginTop: "-2rem" }}
            data-aos="fade-up"
          >
            Drop Me a Line
          </h1>
          <form className="form-group" onSubmit={handleData} action="/">
            <div
              className="form-input-wrap"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <label className="form-input-label" for="name">
                Name
                <span className="required">*</span>
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                required
                name="name"
                className="form-input"
                placeholder="John Doe"
              />
            </div>
            <div
              className="form-input-wrap"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <label className="form-input-label" for="email">
                Email
                <span className="required">*</span>
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                name="email"
                className="form-input"
                required
                placeholder="johndoe@john.com"
              />
            </div>
            <div
              className="form-input-wrap form-textarea-wrap"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600"
            >
              <label className="form-input-label " for="description">
                Tell me a little about your project
                <span className="required">*</span>
              </label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                type="text"
                id="description"
                name="description"
                required
                className="form-input form-textarea"
                placeholder="What's on your mind?"
                rows="6"
              ></textarea>
            </div>
            <button
              className={sentHandle ? "button sent" : "button"}
              type="submit"
              onSubmit={(e) => setSentHandle(true)}
            >
              {sentHandle ? "Message sent!" : "Send message"}
              <i class="bx bx-right-arrow-alt button-icon"></i>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Design;
