import React from "react";
import {Card, CardBody, Col, Container, Row} from "reactstrap";
import anastasia from "../assets/glavakis/anastasia.jpeg";
import Mourzinos from "../assets/glavakis/Mourzinos.jpeg";

const Team = () => {
  return (
    <React.Fragment>
      <section
        className="section bg-light"
        id="team"
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="text-center mb-5">
                <h3 className="mb-3 fw-semibold">
                  Η <span className="text-danger">Επιστημονική Ομάδα</span>
                </h3>
                <p className="text-muted mb-4 ff-secondary">
                  Οι επιστημονικοί μας συνεργάτες έχουν πολυετή εμπειρία στην
                  έρευνα, την καινοτομία και την ανάπτυξη φυσικών προϊόντων, με
                  ισχυρή παρουσία στην ακαδημαϊκή και βιομηχανική κοινότητα.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="gy-4">
            <Col lg={6}>
              <Card className="h-100 text-center">
                <CardBody className="p-4">
                  <h5 className="mb-3">Dr. Anastasia Kyriakoudi</h5>
                  <div className="avatar-xl mx-auto mb-4 position-relative">
                                    <img src={anastasia} alt="" className="img-fluid rounded-circle" />
                               </div>
                               <div className="pt-5">
                  <p className="text-muted mb-2 ff-secondary">
                    Χημικός, Μεταδιδακτορική Ερευνήτρια, Σχολή Γεωπονίας (ΑΠΘ)
                  </p>
                  <p
                    className="text-muted ff-secondary"
                    style={{fontSize: "14px"}}
                  >
                    Η Δρ. Κυριακούδη έχει εξειδίκευση στη χημεία τροφίμων και
                    την αξιοποίηση υποπροϊόντων της βιομηχανίας τροφίμων για την
                    παραγωγή φυσικών αντιοξειδωτικών και χρωστικών. Έχει
                    συμμετάσχει σε ελληνικά και ευρωπαϊκά ερευνητικά έργα και
                    έχει δημοσιεύσει σημαντικό αριθμό εργασιών (citations ~760,
                    h-index: 15).
                  </p>
                  <a
                    href="https://www.linkedin.com/in/anastasia-kyriakoudi-40514884/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-sm mt-2"
                  >
                    Προφίλ LinkedIn
                  </a>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card className="h-100 text-center">
                <CardBody className="p-4">
                  <h5 className="mb-3">Dr. Ioannis Mourtzinos</h5>
                  <div className="avatar-xl mx-auto mb-4 position-relative">
                    <img
                      src={Mourzinos}
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                  </div>
                  <div className="pt-5">
                    <p className="text-muted mb-2 ff-secondary">
                      Αναπλ. Καθηγητής, Τμήμα Γεωπονίας (ΑΠΘ)
                    </p>
                    <p
                      className="text-muted ff-secondary"
                      style={{fontSize: "14px"}}
                    >
                      Ο Δρ. Μουρτζινός έχει πολυετή εμπειρία στην έρευνα και την
                      ανάπτυξη φυσικών προσθέτων τροφίμων και καλλυντικών. Είναι
                      επικεφαλής της ερευνητικής ομάδας AGROFOODTEAM και έχει
                      διατελέσει συνεργάτης της βιομηχανίας και διεθνών
                      πανεπιστημίων. Έχει πάνω από 2600 αναφορές και h-index 26.
                    </p>
                    <a
                      href="https://www.linkedin.com/in/ioannis-mourtzinos-62374440/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary btn-sm mt-2"
                    >
                      Προφίλ LinkedIn
                    </a>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Team;
