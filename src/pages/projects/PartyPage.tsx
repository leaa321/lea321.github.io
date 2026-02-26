import "../../style/projects/projects-page.scss"
import partyLandingPage from "../../assets/projects/party-landingpage.png"
import partyGamePage from "../../assets/projects/party-gamepage.png"
import partyAdminPageOne from "../../assets/projects/party-adminsitepageOne.png"
import partyAdminPageTwo from "../../assets/projects/party-adminsitepageTWO.png"
import partyQuestionsPage from "../../assets/projects/party-questionspage.png"
import partyGalleryPage from "../../assets/projects/party-gallerypage.png"

import { IoConstructOutline, IoImageOutline, IoPeopleOutline, IoSettingsOutline, IoShareSocialOutline, IoSparklesOutline } from "react-icons/io5";
import TechStack from "../../components/TechStack"

export function PartyPage() {
  const techKeys: string[] = ["react", "scss", "nodejs"] as const;

  return (
    <div className="project-page">
      <div className="title-section">
        <h2 className="project-title">
          <IoSparklesOutline className="project-title-icon" />
          Custom Party App</h2>
        <p className="description">A custom party app we built for my fathers 49th birthday.</p>
      </div>
      <div className="project-image-section">
        <img className="project-image-item" src={partyGamePage} alt="party game page" />
        <img className="project-image-item" src={partyLandingPage} alt="party game page" />
      </div>
      <div className="project-page-card project-page-box">
        <h2 className="project-card-title">
          What it is
        </h2>
        <p className="project-card-description">
          This app was designed for one event: guests open a single link and get access to interactive activities. The goal was to make the party feel personal and playful, and to get everyone involved. <br /> <br /> Also because everybody got a "random" partner, it encouraged people to talk to others they did not know well.
        </p>
      </div>
      <div className=" project-page-card">
        <h2 className="project-card-title">
          What it features
        </h2>
        <ul className="feature-list">
          <li className="feature-item">
            <IoConstructOutline className="feature-icon" />
            <span className="feature-item-text">
              Built in admin tool, where you can manage teams, games and gamestates.           </span>
          </li>
          <li className="feature-item">
            <IoPeopleOutline className="feature-icon" />
            <span className="feature-item-text">
              Guests solve clues and match with their assigned partner for the next activity.
            </span>
          </li>
          <li className="feature-item">
            <IoImageOutline className="feature-icon" />
            <span className="feature-item-text">
              Everyone can upload and browse party photos in one place.             </span>
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
          <img src={partyAdminPageOne} alt="party admin page" className="project-image-item" />
          <img src={partyAdminPageTwo} alt="party admin page" className="project-image-item" />
        </div>
        <p className="card-description">
          The app includes a password-protected admin dashboard for full game management.
          Admins can create and manage groups and players, edit individual attributes, and access each player’s QR code.
          <br /><br />
          A central control panel allows starting games, selecting active questions, and importing or exporting the full game state as JSON.
        </p>

      </div>
      <div className="project-page-card">
        <h2 className="project-card-title">
          <IoShareSocialOutline className="project-card-title-icon" />
          Sharing tool
        </h2>
        <div className="project-image-section">

          <img src={partyQuestionsPage} alt="party admin page" className="project-image-item" />
          <img src={partyGalleryPage} alt="party admin page" className="project-image-item" />

        </div>
        <p className="card-description">
          A shared gallery allows all guests to upload and download photos.
          A separate sharing view collects answers to fun questions, displaying each submission together with the group it came from, visible to everyone in real time.
        </p>
      </div>
    </div>);
}

// for tech stack add tech stack component
// add pics and text add mark of stuff with ipad or gif/video
