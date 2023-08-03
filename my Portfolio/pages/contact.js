import Header from '../components/Header';

const Contact = () => {
  return (
    <div>
       {/*Included the header component */}
      <Header />
      <div className='content'>
         {/* Section with me contact details*/}
        <h1>Contact Me</h1>
        <p>
          If you're interested in collaborating or have any inquiries, feel free
          to reach out to me via email or phone.
        </p>
        <p>Email: thomascane9@gmail.com</p>
        <p>Phone: (071) 372 3106</p>
      </div>
       {/* Styling */}
      <style jsx>{`
    
        .content {
          text-align: center;
          margin-top: 20px;
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

        /* Add styles to keep the Header at the top */
        .page-container > :global(header) {
          order: 1;
        }

        .page-container > :global(.content) {
          order: 2;
        }
      `}</style>
    </div>
  );
};

export default Contact;