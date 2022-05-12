import React, { useState } from 'react';
import { Nav, Navbar, Image, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import '../../assets/styles/style.css';

const styles = {
  nav: {
    paddingLeft: '20px',
  },
  logo: {
    height: '60px',
  },
};

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <Navbar
        expanded={expanded}
        expand="lg"
        bg="white"
        variant="light"
        className="sticky-top"
      >
        <Container>
          <Link to={`/Home`}>
            <Navbar.Brand>
              <Image style={styles.logo} src={Logo}></Image>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle
            onClick={() => setExpanded(expanded ? false : 'expanded')}
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="justify-content-end mx-md-0">
              <Link
                onClick={() => setExpanded(false)}
                style={styles.nav}
                className="nav-link hover"
                to="/home"
              >
                Home
              </Link>
              <Link
                onClick={() => setExpanded(false)}
                style={styles.nav}
                className="nav-link hover"
                to="/newpatient"
              >
                New Patient
              </Link>
              <Link
                onClick={() => setExpanded(false)}
                style={styles.nav}
                className="nav-link hover"
                to="/existingpatient"
              >
                Existing Patients
              </Link>
              <Link
                onClick={() => setExpanded(false)}
                style={styles.nav}
                className="nav-link hover"
                to="/maps"
              >
                Maps
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
