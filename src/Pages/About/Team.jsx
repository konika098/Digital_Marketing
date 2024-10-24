import { useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import teamMembers from "/public/Team.json";

const Team = () => {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Animation should happen only once
    });
  }, []);

  return (
    <div className="team-section">
      <div className="container">
        <div className="top-content">
          <h2
            className="fs-52-c res-425"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            Meet the team
          </h2>
          <p
            className="fs-18-s team-text"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            Find a team of digital marketers you can rely on. Every day, we
            <br className="d-none d-md-block" />
            build trust through communication, transparency, and results.
          </p>
        </div>

        <div className="team-area team-area-one">
          {teamMembers.slice(0, 3).map((member) => (
            <div className="team-parent" key={member.name}>
              <div
                className="team-child"
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <div className="team-img">
                  <img
                    className="img-fluid"
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                  />
                </div>
                <h3 className="fs-32-c">{member.name}</h3>
                <p className="fs-24-s">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="team-area">
          {teamMembers.slice(3).map((member) => (
            <div className="team-parent" key={member.name}>
              <div
                className="team-child"
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <div className="team-img">
                  <img
                    className="img-fluid"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                <h3 className="fs-32-c">{member.name}</h3>
                <p className="fs-24-s">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="purple-btn-parent">
          <button
            className="btn btn-success purple"
            type="button"
            onClick={() => alert("View all team functionality goes here!")}
          >
            View all team
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
