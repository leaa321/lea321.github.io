// first title, short sum
// small pic grid
// why i build this
// feat plus list
// tech stack
// explain of system with api and firebase
export function OurHomePage(){
    return ( 
    <div className="party-page">
      <div className="title-section">
    <h2 className="project-title">OurHome App</h2>
    <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis optio sit error numquam, ipsum voluptatem exercitationem at qui facilis eligendi commodi, tempore, quas dicta aperiam. Perspiciatis rem earum illo corporis?</p>
    </div>
    <div className="mid-section">
      <div className="image-section">

      </div>
      <div className="project-card">
        <h2 className="project-card-title">
          Why I build this
        </h2>
        <p className="project-card-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sapiente aut, voluptas quidem iure sunt, exercitationem ipsam facilis delectus eos recusandae pariatur, quia ipsa unde molestias. Nam voluptates obcaecati laudantium!
        </p>
      </div>
       <div className="project-card">
        <h2 className="project-card-title">
          What it features
        </h2>
        <p className="project-card-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sapiente aut, voluptas quidem iure sunt, exercitationem ipsam facilis delectus eos recusandae pariatur, quia ipsa unde molestias. Nam voluptates obcaecati laudantium!
        </p>
        <ul className="feature-list">
          <li className="feature-item"></li>
          <li className="feature-item"></li>
          <li className="feature-item"></li>
        </ul>
      </div>
        <div className="project-card-tech">
        <h2 className="project-card-title">
          Tech stack
        </h2>
        {/* <TechStack techKeys= {techKeys}></TechStack> */}
      </div>
    </div>
  </div>);
}
