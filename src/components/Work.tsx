import "./styles/Work.css";
import { MdOpenInNew } from "react-icons/md";

const DRIVE_LINK =
  "https://drive.google.com/drive/folders/1LquyY8uXH8dUwWpGUsrlrbaQzfXAppQ9?usp=sharing";

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-drive-box">
          <p className="work-drive-text">
            Explore my complete portfolio of video editing projects — brand
            films, reels, advertisements, and more.
          </p>
          <a
            href={DRIVE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="work-drive-link"
            data-cursor="disable"
          >
            <MdOpenInNew className="work-drive-icon" />
            <span>View My Work on Google Drive</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
