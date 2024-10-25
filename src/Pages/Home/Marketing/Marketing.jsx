import { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Marketing = () => {
  const [marketingData, setMarketingData] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    fetch("/Marketing.json")
      .then((response) => response.json())
      .then((data) => {
        setMarketingData(data);
        AOS.refresh();
      })
      .catch((error) => console.error("Error fetching marketing data:", error));
  }, []);

  if (!marketingData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="marketing-section">
      <div className="container">
        <div className="marketing-area">
          <h4
            className="fs-52-w text-center"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            {marketingData.heading.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br className={index === 0 ? "d-none d-md-block" : ""} />
              </span>
            ))}
          </h4>
          <p
            className="fs-18 market-text text-center"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            {marketingData.subheading.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br className={index === 0 ? "d-none d-lg-block" : ""} />
              </span>
            ))}
          </p>
          <div className="row">
            {marketingData.sections.map((section, index) => (
              <div
                key={index}
                data-aos="fade-in"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1300"
                data-aos-easing="ease-in-out"
                data-aos-once="false"
                className={`col-lg-${
                  index === 0 ? "5" : index === 1 ? "7" : "12"
                }`}
              >
                <div className={`section-${index + 1}`}>
                  {index === marketingData.sections.length - 1 ? (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "40px",
                        backgroundColor: "#F4EFFF", // Soft purple background
                        borderRadius: "20px", // Rounded corners
                        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)", // Subtle shadow
                        alignItems: "center",
                      }}
                    >
                      <div style={{ flex: "1", paddingRight: "20px" }}>
                        <h5
                          className="fs-32-w"
                          style={{
                            fontSize: "28px",
                            fontWeight: "bold",
                            marginBottom: "20px",
                          }}
                        >
                          {section.title}
                        </h5>
                        <p
                          className="fs-18-w"
                          style={{
                            fontSize: "18px",
                            lineHeight: "1.6",
                            color: "#4A4A4A",
                            marginBottom: "20px",
                          }}
                        >
                          {section.description}
                        </p>
                        <a
                          href={section.link}
                          className="simple"
                          style={{
                            fontSize: "16px",
                            color: "#6A0DAD", // Link color matching the theme
                            fontWeight: "bold",
                            display: "inline-flex",
                            alignItems: "center",
                          }}
                        >
                          Learn More{" "}
                          <FaLongArrowAltRight
                            style={{ marginLeft: "8px", fontSize: "18px" }}
                          />
                        </a>
                      </div>
                      <div style={{ flex: "0 0 300px", textAlign: "right" }}>
                        <img
                          className="img-fluid"
                          style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                            borderRadius: "10px", // Slightly rounded corners
                          }}
                          src={section.image}
                          alt="img"
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      <h5 className="fs-32-w">{section.title}</h5>
                      <p
                        className="fs-18-w"
                        style={{ padding: "12px 0 18px" }}
                      >
                        {section.description}
                      </p>
                      <a href={section.link} className="simple">
                        Learn More <FaLongArrowAltRight />
                      </a>
                      <div className="loading-img">
                        <img
                          className="img-fluid w-100"
                          style={{ paddingTop: index === 0 ? "38px" : "62px" }}
                          src={section.image}
                          alt="img"
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
