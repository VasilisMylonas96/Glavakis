import React from 'react';
import { Col, Container, Form, Row } from 'reactstrap';

const Contact = () => {
    return (
        <React.Fragment>
            <section className="section" id="contact">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={8}>
                        <div className="text-center mb-5">
                            <h3 className="mb-3 fw-semibold">Επικοινωνήστε Μαζί Μας</h3>
                            <p className="text-muted mb-4 ff-secondary">Είμαστε πάντα εδώ για να ακούσουμε τις ιδέες σας και να σας παρέχουμε τις καλύτερες λύσεις. Επικοινωνήστε μαζί μας για οποιαδήποτε απορία ή αίτημα.</p>
                        </div>
                    </Col>
                </Row>

                <Row className="gy-4">
                    <Col lg={4}>
                        <div>
                            <div className="mt-4">
                                <h5 className="fs-13 text-muted text-uppercase">Διεύθυνση Γραφείου 1:</h5>
                                <div className="ff-secondary fw-semibold">Αριδαία, Πέλλα, <br />Ελλάδα</div>
                            </div>
                            <div className="mt-4">
                                <h5 className="fs-13 text-muted text-uppercase">Διεύθυνση Γραφείου 2:</h5>
                                <div className="ff-secondary fw-semibold">?????????? <br />??????????</div>
                            </div>
                            <div className="mt-4">
                                <h5 className="fs-13 text-muted text-uppercase">Ώρες Λειτουργίας:</h5>
                                <div className="ff-secondary fw-semibold">9:00πμ - 6:00μμ</div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={8}>
                        <div>
                            <Form>
                                <Row>
                                    <Col lg={6}>
                                        <div className="mb-4">
                                            <label htmlFor="name" className="form-label fs-13">Όνομα</label>
                                            <input name="name" id="name" type="text"
                                                className="form-control bg-light border-light" placeholder="Το όνομά σας*" />
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className="mb-4">
                                            <label htmlFor="email" className="form-label fs-13">Email</label>
                                            <input name="email" id="email" type="email"
                                                className="form-control bg-light border-light" placeholder="Το email σας*" />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={12}>
                                        <div className="mb-4">
                                            <label htmlFor="subject" className="form-label fs-13">Θέμα</label>
                                            <input type="text" className="form-control bg-light border-light" id="subject"
                                                name="subject" placeholder="Θέμα..." />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={12}>
                                        <div className="mb-3">
                                            <label htmlFor="comments" className="form-label fs-13">Μήνυμα</label>
                                            <textarea name="comments" id="comments" rows="3"
                                                className="form-control bg-light border-light"
                                                placeholder="Το μήνυμά σας..."></textarea>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={12} className="text-end">
                                        <input type="submit" id="submit" name="send" className="submitBnt btn btn-primary"
                                            value="Αποστολή Μηνύματος" />
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>

            </section>
        </React.Fragment>
    );
};

export default Contact;