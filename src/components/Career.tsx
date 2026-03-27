import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Editor</h4>
                <h5>Prowe Solutions</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Created social media videos and branding content. Specialized
              in motion graphics, transitions, and color grading. Delivered
              content optimized for audience engagement.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Editor</h4>
                <h5>Tridhya Tech</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Produced reels, product videos, and promotional content.
              Worked with teams to create trend-based and engaging visuals
              for social media platforms.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Video Editor</h4>
                <h5>YP Digital Solution</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Editing high-performing reels, ads, and promotional content.
              Managing full editing workflow from raw footage to final output.
              Focused on storytelling and engagement-driven content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
