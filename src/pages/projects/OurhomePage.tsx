import ourHomeRewardPage from "../../assets/projects/ourhome-rewardpage.png";
import ourHomeTaskPage from "../../assets/projects/ourhome-taskpage.png";
import ourHomeSettingsPage from "../../assets/projects/ourhome-settingspage.png";
import ourHomeTaskSettingsPage from "../../assets/projects/ourhome-settingspageTasks.png";
import { IoCheckboxOutline, IoFilterOutline, IoGiftOutline, IoLogoFirebase, IoServerOutline, IoSettingsOutline, IoStarOutline, IoTimeOutline } from "react-icons/io5";
import TechStack from "../../components/TechStack";
import { SiSpring } from "react-icons/si";
import { useTranslation } from "react-i18next";
import "../../i18n"

export function OurHomePage() {
  const techKeys: string[] = ["react", "scss", "springboot", "firebase"] as const;
  const { t } = useTranslation();

  return (
    <div className="project-page">
      <div className="title-section">
        <h2 className="project-title">
          <IoCheckboxOutline className="project-title-icon" />
          OurHome App</h2>
        <p className="description">{t("ourHomePage.start.description")}</p>
      </div>
      <div className="project-image-section">
        <img className="project-image-item double" loading="lazy" src={ourHomeRewardPage} alt="party game page" />
        <img className="project-image-item double" loading="lazy" src={ourHomeTaskPage} alt="party game page" />
      </div>
      <div className="project-page-card project-page-box">
        <h2 className="project-card-title">
          {t("ourHomePage.whatItIs.title")}
        </h2>
        <p className="project-card-description">
          {t("ourHomePage.whatItIs.descriptionOne")}
          <br /> <br /> {t("ourHomePage.whatItIs.descriptionTwo")} <br /> <br />{t("ourHomePage.whatItIs.descriptionThree")}      </p>
      </div>
      <div className=" project-page-card">
        <h2 className="project-card-title">
          {t("ourHomePage.whatItFeatures.title")}
        </h2>
        <ul className="feature-list">
          <li className="feature-item">
            <IoCheckboxOutline className="feature-icon" />
            <span className="feature-item-text">
              {t("ourHomePage.whatItFeatures.features.featureOne")}
            </span>
          </li>
          <li className="feature-item">
            <IoGiftOutline className="feature-icon" />
            <span className="feature-item-text">
              {t("ourHomePage.whatItFeatures.features.featureTwo")}
            </span>
          </li>
          <li className="feature-item">
            <IoStarOutline className="feature-icon" />
            <span className="feature-item-text">
              {t("ourHomePage.whatItFeatures.features.featureThree")}
            </span>
          </li>
          <li className="feature-item">
            <IoSettingsOutline className="feature-icon" />
            <span className="feature-item-text">
              {t("ourHomePage.whatItFeatures.features.featureFour")}
            </span>
          </li>
          <li className="feature-item">
            <IoTimeOutline className="feature-icon" />
            <span className="feature-item-text">
              {t("ourHomePage.whatItFeatures.features.featureFive")}
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
          {t("ourHomePage.settings.title")}
        </h2>
        <div className="project-image-section">
          <img src={ourHomeSettingsPage} loading="lazy" alt="ourHome settings page" className="project-image-item double" />
          <img src={ourHomeTaskSettingsPage} loading="lazy" alt="ourHome task settings page" className="project-image-item double" />
        </div>
        <p className="card-description">
          {t("ourHomePage.settings.description")}
        </p>

      </div>
      <div className="project-page-card ">
        <h2 className="project-card-title">
          <IoFilterOutline className="project-card-title-icon" />
          {t("ourHomePage.sorting.title")}
        </h2>
        <div className="project-image-text-section">
          <img className="project-image-item" loading="lazy" src={ourHomeTaskPage} alt="ourHome task page" />
          {/* ADD GIF HERE for categories*/}
          <p className="card-description ">
            <br /> <br />
            {t("ourHomePage.sorting.descriptionOne")} <br /> <br /> {t("ourHomePage.sorting.descriptionTwo")}
          </p>
        </div>
      </div>
      <div className="project-page-card ">
        <h2 className="project-card-title">
          <IoServerOutline className="project-card-title-icon" />
          {t("ourHomePage.backend.title")}
        </h2>
        <div className="project-page-card project-page-box">
          <h2 className="project-card-title"><SiSpring className="project-card-title-icon" />
            {t("ourHomePage.backend.springBoot.title")}
          </h2>
          <p className="description">
            {t("ourHomePage.backend.springBoot.description")}
          </p></div>
        <div className="project-page-card project-page-box">

          <h2 className="project-card-title">
            <IoLogoFirebase className="project-card-title-icon" />
            {t("ourHomePage.backend.firebase.title")}
          </h2>
          <p className="description">
            {t("ourHomePage.backend.firebase.description")}
          </p></div>
      </div>
      <div className="project-page-card">
        <h2 className="project-card-title">
          {t("ourHomePage.extra")}
        </h2>
      </div>
    </div>);
}
