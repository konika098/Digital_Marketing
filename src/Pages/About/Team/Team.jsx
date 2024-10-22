import React from 'react';
import './Team.css'; // Assuming you'll place your CSS in this file

const Team = () => {
    return (
        <div className="team-section">
            <div className="container">
                <div className="top-content">
                    <h2 className="fs-52-c res-425"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-once="false">
                        Meet the team
                    </h2>
                    <p className="fs-18-s team-text"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-once="false">
                        Find a team of digital marketers you can rely on. Every day, we <br className="d-none d-md-block" />
                        build trust through communication, transparency, and results.
                    </p>
                </div>

                <div className="team-area team-area-one">
                    {teamMembers.slice(0, 3).map((member, index) => (
                        <div className="team-parent" key={index}>
                            <div className="team-child">
                                <div className="team-img">
                                    <img className="img-fluid" src={member.image} alt={member.name}
                                        data-aos="zoom-in"
                                        data-aos-offset="200"
                                        data-aos-delay={50 + index * 100} // staggered delay
                                        data-aos-duration="1000"
                                        data-aos-easing="ease-in-out"
                                        data-aos-once="false" />
                                </div>
                                <h3 className="fs-32-c">{member.name}</h3>
                                <p className="fs-24-s">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="team-area">
                    {teamMembers.slice(3).map((member, index) => (
                        <div className="team-parent" key={index + 3}>
                            <div className="team-child">
                                <div className="team-img">
                                    <img className="img-fluid" src={member.image} alt={member.name}
                                        data-aos="zoom-in"
                                        data-aos-offset="200"
                                        data-aos-delay={50 + (index + 3) * 100} // staggered delay
                                        data-aos-duration="1000"
                                        data-aos-easing="ease-in-out"
                                        data-aos-once="false" />
                                </div>
                                <h3 className="fs-32-c">{member.name}</h3>
                                <p className="fs-24-s">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="purple-btn-parent">
                    <button className="btn btn-success purple" type="button">View all team</button>
                </div>
            </div>
        </div>
    );
};

// Sample data for team members
const teamMembers = [
    { name: "Miranda Prime", role: "Co-Founder", image: "./assets/images/team-img-1.png" },
    { name: "Tonya Sparks", role: "Co-Founder & CEO", image: "./assets/images/team-img-2.png" },
    { name: "Jenny Gold", role: "Financial Expert", image: "./assets/images/team-img-3.png" },
    { name: "Miranda Prime", role: "SEO Engineer", image: "./assets/images/team-img-4.png" },
    { name: "Paul Doe", role: "SEO Engineer", image: "./assets/images/team-img-5.png" },
    { name: "Tom Banks", role: "SEO Engineer", image: "./assets/images/team-img-6.png" },
];

export default Team;
