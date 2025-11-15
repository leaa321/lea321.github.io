import { useEffect, useRef } from "react";
import "../style/education.css";

function Education() {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    if (!cards || cards.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <section className="education-section">
      <h1>Education</h1>
      <div className="timeline">
        <div className="outer">
          <div className="card">
            <div className="info">
              <h3 className="title">2025</h3>
              <p>started my apprenticeship at HEC</p>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h3 className="title">2024</h3>
              <p>
                studied for one year at the university of public administration
                and did my police studies there
              </p>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h3 className="title">2024</h3>
              <p>finished my A-Levels at Gymnaisium Syke</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
