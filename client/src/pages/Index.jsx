import { Link } from "react-router-dom";
import "../styles/index.scss"; // Make sure to import the CSS file

const Index = () => {
  return (
    <div>
      <nav>
        <div className="nav__logo">
          <a href="#">SRMS</a>
        </div>
        <ul className="nav__links">
          <li className="link">
            <Link to="login" className="nav__btn">
              Login
            </Link>
          </li>
        </ul>
      </nav>
      <section className="container">
        <div className="content__container">
          <h1>
            Best Learning
            <br />
            <span className="heading__1">Education Platform</span>
            <br />
            <span className="heading__2">in The World</span>
          </h1>
          <p>
            Unlock your full learning potential with our intuitive education
            platform. Seamlessly blending technology and education, we provide
            an immersive learning environment that combines interactive lessons,
            virtual classrooms, and intelligent feedback.
          </p>
          {/* <form>
            <input type="text" placeholder="What do you want to learn" />
            <button type="submit">Search Course</button>
          </form> */}
        </div>
        <div className="image__container">
          <img src="/assets/header-1.jpg" alt="header" />
          <img src="/assets/header-2.jpg" alt="header" />
          <div className="image__content">
            <ul>
              <li>Get 30% off on every 1st month</li>
              <li>Expert teachers</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
