import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from "../styles/navbar.module.css"; 



class NavBar extends React.Component {
  render() {
    return (
      // Combine react-bootstrap classes with CSS module classes
      // Added expand="lg" which is common for controlling collapse behavior
      <Navbar
        fixed="top"
        // Combine the module class with bootstrap class. Order might matter for specificity.
        className={`${styles.navbar} bg-body-tertiary`}
        expand="lg" 
        variant="dark" // Setting variant="dark" often helps with react-bootstrap's default link colors on dark backgrounds
      >
        <Container>
          {/* Apply the module class to the Brand */}
          <Navbar.Brand href="#" className={styles.brand}>
            Nirali Pandey
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* Apply module classes to Nav.Link */}
              {/* Added mainNavLink class for specific media query targeting */}
              <Nav.Link href="#intro" className={`${styles.navLink} ${styles.mainNavLink}`}>Home</Nav.Link>
              <Nav.Link href="#about" className={`${styles.navLink} ${styles.mainNavLink}`}>About</Nav.Link>
              <Nav.Link href="#experience" className={`${styles.navLink} ${styles.mainNavLink}`}>Experience</Nav.Link>
              <Nav.Link href="#projects" className={`${styles.navLink} ${styles.mainNavLink}`}>Projects</Nav.Link>
            </Nav>
           
            <Nav className="ms-auto">
              <Nav.Link href="#" className={styles.navLink} aria-label="Email">
                <EmailRoundedIcon style={{ fontSize: 20 }} />
              </Nav.Link>
              <Nav.Link href="#" target="_blank" rel="noopener noreferrer" className={styles.navLink} aria-label="GitHub">
                <GitHubIcon style={{ fontSize: 19 }} />
              </Nav.Link>
              <Nav.Link href="#" target="_blank" rel="noopener noreferrer" className={styles.navLink} aria-label="LinkedIn">
                <LinkedInIcon style={{ fontSize: 21 }} />
              </Nav.Link>
              <Nav.Link href="#" target="_blank" rel="noopener noreferrer" className={styles.navLink} aria-label="Medium Blog">
                <BorderColorIcon style={{ fontSize: 20 }} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;