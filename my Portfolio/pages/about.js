import Header from '../components/Header';

const About = () => {
  return (
    <div>
      {/*Included the header component */}
      <Header />
      <div className='content'>
        <h1>About Me</h1>
        <img src="/static/IMG-7768.jpg" alt="IMAGE OF ME" className="profile-image" />
        <div className='paragraph'>
          {/* Paragraph about me */}
        <p>
        Hi! I'm Thomas,
<br />
<br />
I am currently a full-stack development student, studying at HyperionDev. I want to expand my skills and knowledge in the exciting world of web and software development.
<br />
<br />
I have taken on a diverse range of projects, from building interactive websites with HTML, CSS, and JavaScript to creating powerful and dynamic applications using frameworks like React and Next.js.
<br />
<br />
I am also passionate about health and fitness. I currently work as a fitness coach, helping others achieve their wellness goals and maintain a healthy lifestyle. I believe that a strong mind and body go hand in hand.
<br />
<br />
I am eager to take on new challenges, collaborate with like-minded individuals, and contribute to innovative projects that make a positive impact on the world. If you'd like to connect, discuss ideas, or work together on an exciting venture, feel free to reach out.
        </p>
        </div>
      </div>
      {/* Styling */}
      <style jsx>{`
        .content {
          text-align: center;
        }

        h1 {
          color: #000000;
          font-size: 36px;
          margin-bottom: 20px;
          font-weight: bold;
          text-align: center;
        }

        .profile-image {
          height: 500px;
          margin: 10px;
        }

        .paragraph{
          background-color: #CCCCCC;
          margin-bottom: 20px;
          margin-top: 20px;
        }

        p {
          color: #242424;
          font-size: 18px;
          margin-right:200px;
          margin-left:200px;
        }
      `}</style>
    </div>
  );
};

export default About;
