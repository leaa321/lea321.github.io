import "../../style/projects/projects-page.scss"
import partyLandingPage from "../../assets/projects/party-landingpage.png"
import partyGamePage from "../../assets/projects/party-gamepage.png"
import partyAdminPageOne from "../../assets/projects/party-adminsitepageOne.png"
import partyAdminPageTwo from "../../assets/projects/party-adminsitepageTWO.png"
import partyQuestionsPage from "../../assets/projects/party-questionspage.png"
import partyGalleryPage from "../../assets/projects/party-gallerypage.png"
import { useTranslation } from "react-i18next";
import "../../i18n"
import { IoConstructOutline, IoImageOutline, IoPeopleOutline, IoSettingsOutline, IoShareSocialOutline, IoSparklesOutline } from "react-icons/io5";
import TechStack from "../../components/TechStack"

export function PartyPage() {
  const techKeys: string[] = ["react", "scss", "nodejs"] as const;
  const { t } = useTranslation();

  return (
    <div className="project-page">
      <div className="title-section">
        <h2 className="project-title">
          <IoSparklesOutline className="project-title-icon" />
          {t("partyPage.title")}</h2>
        <p className="description">{t("partyPage.description")}</p>
      </div>
      <div className="project-image-section">
        <img className="project-image-item double" loading="lazy" src={partyGamePage} alt="party game page" />
        <img className="project-image-item double" loading="lazy" src={partyLandingPage} alt="party game page" />
      </div>
      <div className="project-page-card project-page-box">
        <h2 className="project-card-title">
          {t("partyPage.whatItIs.title")}
        </h2>
        <p className="project-card-description">
          {t("partyPage.whatItIs.descriptionOne")}
          <br /> <br />
          {t("partyPage.whatItIs.descriptionTwo")}
        </p>
      </div>
      <div className=" project-page-card">
        <h2 className="project-card-title">
          {t("partyPage.whatItFeatures.title")}
        </h2>
        <ul className="feature-list">
          <li className="feature-item">
            <IoConstructOutline className="feature-icon" />
            <span className="feature-item-text">
              {t("partyPage.whatItFeatures.features.featureOne")}
            </span>
          </li>
          <li className="feature-item">
            <IoPeopleOutline className="feature-icon" />
            <span className="feature-item-text">
              {t("partyPage.whatItFeatures.features.featureTwo")}
            </span>
          </li>
          <li className="feature-item">
            <IoImageOutline className="feature-icon" />
            <span className="feature-item-text">
              {t("partyPage.whatItFeatures.features.featureThree")}
            </span>
          </li>
        </ul>
      </div>
      <div className="project-card-tech">
        <TechStack techKeys={techKeys} ></TechStack>
      </div>
      <div className="project-page-card ">
        <h2 className="project-card-title">
          <IoSettingsOutline className="project-card-title-icon" />
          Admin tool
        </h2>
        <div className="project-image-section">
          <img src={partyAdminPageOne} loading="lazy" alt="party admin page" className="project-image-item double" />
          <img src={partyAdminPageTwo} loading="lazy" alt="party admin page" className="project-image-item double" />
        </div>
        <p className="card-description">
          {t("partyPage.admin.textOne")}
          <br /><br />
          {t("partyPage.admin.textTwo")}
        </p>

      </div>
      <div className="project-page-card">
        <h2 className="project-card-title">
          <IoShareSocialOutline className="project-card-title-icon" />
          {t("partyPage.sharing.title")}
        </h2>
        <div className="project-image-section">

          <img src={partyQuestionsPage} loading="lazy" alt="party admin page" className="project-image-item double" />
          <img src={partyGalleryPage} loading="lazy" alt="party admin page" className="project-image-item double" />

        </div>
        <p className="card-description">
          {t("partyPage.sharing.description")}
        </p>
      </div>
    </div>);
}