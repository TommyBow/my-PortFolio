import Link from 'next/link';

// Styling for the links in the navigation bar

const linkStyle = {
  marginRight: '20px', 
  color: 'white', 
  textDecoration: 'none', 
  fontSize: '16px', 
  fontFamily: 'Arial, sans-serif',
  fontWeight: 'bold', 
};

const navStyle = {
  marginTop:'0px',
  display: 'flex', 
  justifyContent: 'center',
  padding: '20px',
  backgroundColor: '#2C2C2C',
};

const Header = () => {
  return (
    <nav style={navStyle}>
      <Link href="/" passHref>
        <span style={linkStyle}>Home</span>
      </Link>
      <Link href="/about" passHref>
        <span style={linkStyle}>About</span>
      </Link>
      <Link href="/projects" passHref>
        <span style={linkStyle}>Projects</span>
      </Link>
      <Link href="/contact" passHref>
        <span style={linkStyle}>Contact</span>
      </Link>
    </nav>
  );
};

export default Header;
