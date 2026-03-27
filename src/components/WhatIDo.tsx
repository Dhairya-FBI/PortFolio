import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>VIDEO EDITING</h3>
              <h4>Crafting Engaging Content</h4>
              <p>
                Professional video editing for social media, ads, and brand content.
                From raw footage to polished final cuts with cinematic storytelling.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Premiere Pro</div>
                <div className="what-tags">DaVinci Resolve</div>
                <div className="what-tags">CapCut</div>
                <div className="what-tags">Color Grading</div>
                <div className="what-tags">Beat Sync</div>
                <div className="what-tags">Transitions</div>
                <div className="what-tags">Sound Design</div>
                <div className="what-tags">Storytelling</div>
                <div className="what-tags">Keyframing</div>
                <div className="what-tags">Speed Ramping</div>
                <div className="what-tags">Multi-Cam Editing</div>
                <div className="what-tags">Audio Mixing</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>MOTION GRAPHICS & VFX</h3>
              <h4>Animation & Visual Effects</h4>
              <p>
                Creating stunning motion graphics, text animations, and visual effects.
                From green screen compositing to dynamic typography and brand visuals.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">After Effects</div>
                <div className="what-tags">Photoshop</div>
                <div className="what-tags">Blender</div>
                <div className="what-tags">Cinema 4D Lite</div>
                <div className="what-tags">Motion Graphics</div>
                <div className="what-tags">Text Animation</div>
                <div className="what-tags">Logo Animation</div>
                <div className="what-tags">Green Screen</div>
                <div className="what-tags">Color Keying</div>
                <div className="what-tags">Visual Effects</div>
                <div className="what-tags">Particle Effects</div>
                <div className="what-tags">3D Camera Tracking</div>
                <div className="what-tags">Rotoscoping</div>
                <div className="what-tags">Mocha Tracking</div>
                <div className="what-tags">Expressions</div>
                <div className="what-tags">Shape Layer Animation</div>
                <div className="what-tags">Kinetic Typography</div>
                <div className="what-tags">Lottie Animation</div>
                <div className="what-tags">Matte Painting</div>
                <div className="what-tags">Morphing</div>
                <div className="what-tags">AI Tools</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
