import { useEffect } from "react";
import "../style/education.scss";
import { useTranslation } from "react-i18next";
import "../i18n"

function Education() {
  const { t } = useTranslation();
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
      <h1>{t("education.title")}</h1>
      <div className="timeline">
        <div className="outer">
          <div className="card">
            <div className="info">
              <h3 className="title">2025</h3>
              <p> {t("education.text.hec")}</p>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h3 className="title">2024</h3>
              <p>
                {t("education.text.police")}
              </p>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h3 className="title">2024</h3>
              <p>{t("education.text.school")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
