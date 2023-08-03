import Header from '../components/Header';

{/* Styling */}

const Home = () => {
  return (
    <div>
      {/* Included the header component */}
      <Header />
      <div className='content'>
      <h1 >Welcome to My Developer Portfolio</h1>
      <p>Explore my work, skills, and passion as a developer.</p>
      </div>
      {/* Styling */}
      <style jsx>{`

      .content{
        text-align: center;
      }

        h1 {
          color: #000000;
          font-size: 36px;
          margin-top: 40vh;
          margin-bottom: 20px;
          font-weight: bold;
          text-align: centre;
        }

        p {
          color: #333333;
          font-size: 18px;
        }

      `}</style>
    </div>
  );
};

export default Home;
