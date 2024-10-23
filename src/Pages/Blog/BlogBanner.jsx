const BlogBanner = () => {
  return (
    <div className="blog-page-section">
      <div className="container">
        <div className="blog-page-area">
          <span className="fs-18 about-sub">Blog</span>
          <h3
            className="fs-52-c"
            style={{ marginTop: '24px' }}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            We Provide Awesome Digital
            <br className="d-none d-xl-block" />
            Marketing
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;
