import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row>
          {/* About Column */}
          <Col md={4} className="mb-4">
            <h5 className="text-uppercase fw-bold mb-3">Glavakis</h5>
            <p className="small">
              Η ιστορία των Φυτωρίων Γκλαβάκη ξεκινά το 1928, όταν ο Γεώργιος Γκλαβάκης παράγει φυτά αμπέλου. 
              Σήμερα συνεχίζει με την τρίτη γενιά, τον Γιώργο και τον Βαγγέλη Γκλαβάκη. 
              Στόχος μας: να προσφέρουμε υγιή, ποιοτικά φυτά και να παρακολουθούμε τις παγκόσμιες τάσεις για το όφελος του Έλληνα αγρότη.
            </p>
          </Col>

          {/* Navigation Links */}
          <Col md={4} className="mb-4">
            <h5 className="text-uppercase fw-bold mb-3">Πληροφορίες</h5>
            <ul className="list-unstyled small">
              <li><a href="#Home" className="text-light text-decoration-none">ΑΡΧΙΚΗ</a></li>
              <li><a href="#services" className="text-light text-decoration-none">ΥΠΗΡΕΣΙΕΣ</a></li>
              <li><a href="#reviews" className="text-light text-decoration-none">ΚΡΙΤΙΚΕΣ</a></li>
              <li><a href="#team" className="text-light text-decoration-none">ΟΜΑΔΑ</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">ΕΠΙΚΟΙΝΩΝΙΑ</a></li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={4}>
            <h5 className="text-uppercase fw-bold mb-3">Επικοινωνία</h5>
            <address className="small">
              <strong>ΔΙΕΥΘΥΝΣΗ:</strong><br />
              Πιπεριά Πέλλας<br />
              ΤΚ: 58400, Αριδαία<br /><br />

              <strong>ΤΗΛΕΦΩΝΟ:</strong><br />
              Τηλ & FAX: <a href="tel:+302384501140" className="text-light text-decoration-none">+30 2384 501140</a><br /><br />

              <strong>E-MAIL:</strong><br />
              <a href="mailto:info@glavakistrees.gr" className="text-light text-decoration-none">info@glavakistrees.gr</a>
            </address>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="pt-4 mt-4 border-top border-secondary text-center">
          <Col>
            <small className="d-block">
              &copy; {new Date().getFullYear()} Glavakis Trees. Όλα τα δικαιώματα διατηρούνται.
            </small>
            <small className="text-muted">
              Designed by Vasilis Mylonas.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
