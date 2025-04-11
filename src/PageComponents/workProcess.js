import React from 'react';
import { Col, Container, Row } from 'reactstrap';

// Import Images
import processArrow from "../assets/images/process-arrow-img.png";

const WorkProcess = () => {
    return (
        <React.Fragment>
            <section className="section">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={8}>
                        <div className="text-center mb-5">
                            <h3 className="mb-3 fw-semibold">Η Διαδικασία Εξυπηρέτησης Πελατών</h3>
                            <p className="text-muted mb-4 ff-secondary">Στο φυτώριό μας, η διαδικασία απόκτησης φυτών είναι απλή και ευχάριστη. Από την αρχική σας επιλογή έως την παράδοση των φυτών στον κήπο σας, είμαστε δίπλα σας σε κάθε βήμα για να εξασφαλίσουμε την καλύτερη εμπειρία.</p>
                        </div>
                    </Col>
                </Row>

                <Row className="text-center">
                    <Col lg={4}>
                        <div className="process-card mt-4">
                            <div className="process-arrow-img d-none d-lg-block">
                                <img src={processArrow} alt="" className="img-fluid" />
                            </div>
                            <div className="avatar-sm icon-effect mx-auto mb-4">
                                <div className="avatar-title bg-transparent text-success rounded-circle h1">
                                    <i className="ri-leaf-line"></i>
                                </div>
                            </div>

                            <h5>Επιλέξτε τα Φυτά που Σας Ενδιαφέρουν</h5>
                            <p className="text-muted ff-secondary">Επιλέξτε από μια μεγάλη ποικιλία φυτών και δέντρων που ταιριάζουν στον κήπο ή το εσωτερικό σας. Ομάδα μας είναι έτοιμη να σας καθοδηγήσει στην επιλογή των κατάλληλων φυτών για τις ανάγκες σας.</p>
                        </div>
                    </Col>

                    <Col lg={4}>
                        <div className="process-card mt-4">
                            <div className="process-arrow-img d-none d-lg-block">
                                <img src={processArrow} alt="" className="img-fluid" />
                            </div>
                            <div className="avatar-sm icon-effect mx-auto mb-4">
                                <div className="avatar-title bg-transparent text-success rounded-circle h1">
                                    <i className="ri-price-tag-3-line"></i>
                                </div>
                            </div>

                            <h5>Λάβετε Δωρεάν Προσφορά</h5>
                            <p className="text-muted ff-secondary">Μετά την επιλογή σας, θα σας παρέχουμε δωρεάν προσφορά για την αγορά και την παράδοση των φυτών, καθώς και οποιαδήποτε επιπλέον υπηρεσία απαιτείται για τον κήπο σας.</p>
                        </div>
                    </Col>

                    <Col lg={4}>
                        <div className="process-card mt-4">
                            <div className="avatar-sm icon-effect mx-auto mb-4">
                                <div className="avatar-title bg-transparent text-success rounded-circle h1">
                                    <i className="ri-truck-line"></i>
                                </div>
                            </div>

                            <h5>Παράδοση Υψηλής Ποιότητας Φυτών</h5>
                            <p className="text-muted ff-secondary">Εξασφαλίζουμε την ασφαλή παράδοση των φυτών σας και παρέχουμε όλες τις πληροφορίες για τη φροντίδα τους, ώστε να αναπτυχθούν και να ευδοκιμήσουν στον χώρο σας.</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            </section>
        </React.Fragment>
    );
};

export default WorkProcess;