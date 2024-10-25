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
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <h5 className="fs-32-w">{section.title}</h5>
                        <p
                          className="text-[#260058]"
                          style={{ padding: "12px 0 18px" }}
                        >
                          {section.description}
                        </p>
                        <a
                          href={section.link}
                          className="simple"
                          style={{ marginRight: "10px" }}
                        >
                          Learn More <FaLongArrowAltRight />
                        </a>
                      </div>
                      <div style={{ width: "618px" }}>
                        <img
                          className="img-fluid w-100"
                          style={{ width: "100px", marginTop:"20px" }}
                          src={section.image}
                          alt="img"
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      <h5 className="fs-32-w">{section.title}</h5>
                      <p className="text-[#260058]" style={{ padding: "12px 0 18px" }}>
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
