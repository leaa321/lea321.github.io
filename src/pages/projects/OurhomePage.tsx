import ourHomeRewardPage from "../../assets/projects/ourhome-rewardpage.png";
import ourHomeTaskPage from "../../assets/projects/ourhome-taskpage.png";
import ourHomeSettingsPage from "../../assets/projects/ourhome-settingspage.png";
import ourHomeTaskSettingsPage from "../../assets/projects/ourhome-settingspageTasks.png";
import { IoCheckboxOutline, IoFilterOutline, IoGiftOutline, IoLogoFirebase, IoServerOutline, IoSettingsOutline, IoStarOutline, IoTimeOutline } from "react-icons/io5";
import TechStack from "../../components/TechStack";
import { SiSpring } from "react-icons/si";

export function OurHomePage() {
  const techKeys: string[] = ["react", "scss", "springboot", "firebase"] as const;

  return (
    <div className="project-page">
      <div className="title-section">
        <h2 className="project-title">
          <IoCheckboxOutline className="project-title-icon" />
          OurHome App</h2>
        <p className="description">I’m still working on OurHome, an Angular task app built for two people. You create tasks, assign them to you or your partner, and earn points when they’re completed.</p>
      </div>
      <div className="project-image-section">
        <img className="project-image-item double" loading="lazy" src={ourHomeRewardPage} alt="party game page" />
        <img className="project-image-item double" loading="lazy" src={ourHomeTaskPage} alt="party game page" />
      </div>
      <div className="project-page-card project-page-box">
        <h2 className="project-card-title">
          What it is
        </h2>
        <p className="project-card-description">
          I’m currently building OurHome as a way to learn Angular while solving a very real problem: managing a shared household. Keeping track of chores, responsibilities, and fairness between partners or roommates can quickly become messy and, honestly, not very fun. <br /> <br /> With OurHome, I want to turn that friction into something more motivating by adding light competition and rewards. Tasks earn points, points unlock personal rewards, and everyday household work becomes more engaging instead of a constant source of discussion. <br /> <br /> The goal is to make sharing a home clearer, fairer, and a bit more fun through a simple, game-like system.        </p>
      </div>
      <div className=" project-page-card">
        <h2 className="project-card-title">
          What it features
        </h2>
        <ul className="feature-list">
          <li className="feature-item">
            <IoCheckboxOutline className="feature-icon" />
            <span className="feature-item-text">
              See your active tasks and a history of completed ones.
            </span>
          </li>
          <li className="feature-item">
            <IoGiftOutline className="feature-icon" />
            <span className="feature-item-text">
              Manage available rewards and view rewards you’ve already collected.
            </span>
          </li>
          <li className="feature-item">
            <IoStarOutline className="feature-icon" />
            <span className="feature-item-text">
              Earn points for completed tasks to unlock rewards.
            </span>
          </li>
          <li className="feature-item">
            <IoSettingsOutline className="feature-icon" />
            <span className="feature-item-text">
              General settings plus the ability to add your own tasks, rewards, and categories.          </span>
          </li>
          <li className="feature-item">
            <IoTimeOutline className="feature-icon" />
            <span className="feature-item-text">
              A time system that tracks tasks that repeat daily, weekly, or monthly.          </span>
          </li>
        </ul>
      </div>
      <div className="project-card-tech">
        <TechStack techKeys={techKeys} ></TechStack>
      </div>
      <div className="project-page-card ">
        <h2 className="project-card-title">
          <IoSettingsOutline className="project-card-title-icon" />
          Settings
        </h2>
        <div className="project-image-section">
          <img src={ourHomeSettingsPage} loading="lazy" alt="ourHome settings page" className="project-image-item double" />
          <img src={ourHomeTaskSettingsPage} loading="lazy" alt="ourHome task settings page" className="project-image-item double" />
        </div>
        <p className="card-description">
          The settings area includes general and account settings, partner management, and full customization options, allowing you to create and manage your own tasks, rewards, and categories in one place.
        </p>

      </div>
      <div className="project-page-card ">
        <h2 className="project-card-title">
          <IoFilterOutline className="project-card-title-icon" />
          Sorting of tasks
        </h2>
        <div className="project-image-text-section">
          <img className="project-image-item" loading="lazy" src={ourHomeTaskPage} alt="ourHome task page" />
          {/* ADD GIF HERE for categories*/}
          <p className="card-description ">
            Tasks can be sorted by categories to keep things clear and structured. The app comes with a few default categories, but you can create your own and assign a color to each one for easy recognition. Tasks can also be grouped by how often they repeat: daily, weekly, or monthly. <br /> <br /> When a recurring task is completed, it’s marked as done and removed from the active list until its next due time, so a weekly task like vacuuming only shows up again the following week.
          </p>
        </div>
      </div>
      <div className="project-page-card ">
        <h2 className="project-card-title">
          <IoServerOutline className="project-card-title-icon" />
          Backend logic
        </h2>
        <div className="project-page-card project-page-box">
          <h2 className="project-card-title"><SiSpring className="project-card-title-icon" />
            Spring Boot API</h2>
          <p className="description">
            The backend is a Java Spring Boot REST API that manages tasks, recurring schedules, points, rewards, and categories. It exposes clean endpoints the Angular frontend uses to create, update, and track everything.
          </p></div>
        <div className="project-page-card project-page-box">

          <h2 className="project-card-title">
            <IoLogoFirebase className="project-card-title-icon" />
            Firebase Authentication</h2>
          <p className="description">
            The account system is based on Firebase Authentication, which handles sign-up, login, and user identity. Since this is my first time working with Firebase, I’m currently learning and integrating the authentication step by step.          </p></div>
      </div>
      <div className="project-page-card">
        <h2 className="project-card-title">
          More stuff coming soon...
        </h2>
      </div>
    </div>);
}
