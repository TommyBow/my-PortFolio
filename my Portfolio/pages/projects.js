import Header from '../components/Header';
import Link from 'next/link';

const Projects = () => {
  return (
    <div>
       {/*Included the header component */}
      <Header />
      <div className='content'>
        {/* Heading */}
        <h1>My Projects</h1>
        {/* Project description */}
        <p>Below you will find some projects I have done throughout my coding bootcamp</p>
        {/* List of projects */}
        <ul className="projects-list">
          <li>
            {/* Project 1 - Hangman Game */}
            <Link href="https://github.com/TommyBow/HangMan" passHref>
              <button className="link">Project 1 - Hangman Game</button>
            </Link>
          </li>
          <li>
            {/* Project 2 - Itunes App */}
            <Link href="https://github.com/TommyBow/Itunes-App/tree/master" passHref>
              <button className="link">Project 2 - Itunes App</button>
            </Link>
          </li>
          <li>
            {/* Project 3 - Redux */}
            <Link href="https://github.com/TommyBow/redux-Task15" passHref>
              <button className="link">Project 3 - Redux</button>
            </Link>
          </li>
        </ul>
        <p>
          {/* Capstone Project */}
          You can also check out my previous Capstone Project deployed on Netlify:
          <Link href="https://main--beamish-druid-978030.netlify.app/" passHref>
            <button className="link">Link to Capstone Project</button>
          </Link>
        </p>
      </div>
      {/* Styling */}
      <style jsx>{`
        .content {
          text-align: center; /* Center the content in the page */
        }

        h1 {
          color: #000000; 
          font-size: 36px;
          margin-bottom: 20px;
          font-weight: bold;
        }

        p {
          color: #333333; 
          font-size: 18px;
        }

        /* Center the links */
        .projects-list {
          list-style: none; 
          padding: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .projects-list li {
          margin-bottom: 10px; 
        }

        .projects-list li:last-child {
          margin-bottom: 0; 
        }

        /* Style the links */
        .link {
          color: #fff; 
          background-color: #000000; 
          padding: 10px 20px; 
          text-decoration: none; 
          border: none; 
          border-radius: 5px; 
          cursor: pointer; 
          transition: background-color 0.2s ease-in-out; 
        }

        /* Hover effect for the links */
        .link:hover {
          background-color: #0056b3; 
        }
      `}</style>
    </div>
  );
};

export default Projects;
