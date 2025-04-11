import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const Services = () => {
    return (
        <React.Fragment>
            <section className="section mt-5" id="services">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="text-center mb-5">
                                <h1 className="mb-3 ff-secondary fw-semibold lh-base">
                                    Φυτώρια Γκλαβάκη: Παράδοση, Καινοτομία, Ποιότητα
                                </h1>
                                <p className="text-muted">
                                    Από το 1928 έως σήμερα, τα Φυτώρια Γκλαβάκη πρωτοπορούν στον χώρο του πολλαπλασιαστικού υλικού, ενισχύοντας την ελληνική γεωργία με γνώση, αφοσίωση και αγάπη για τη γη.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="g-4">
                        <Col lg={6}>
                            <div className="d-flex p-3 bg-light rounded shadow-sm h-100">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm icon-effect">
                                        <div className="avatar-title bg-transparent text-success rounded-circle">
                                            <i className="ri-history-line fs-36"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-18">Η Ιστορία Μας</h5>
                                    <p className="text-muted my-2 ff-secondary">
                                        Ξεκινώντας το 1928 από τον Γεώργιο Γκλαβάκη, συνεχίζοντας με τον Ιωάννη Γκλαβάκη και φτάνοντας στη σημερινή τρίτη γενιά, Γιώργο και Βαγγέλη, η εταιρεία μας έχει ταυτιστεί με την αξιοπιστία και την πρωτοπορία.
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="d-flex p-3 bg-light rounded shadow-sm h-100">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm icon-effect">
                                        <div className="avatar-title bg-transparent text-success rounded-circle">
                                            <i className="ri-leaf-line fs-36"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-18">Οπωροφόρα Φυτά</h5>
                                    <p className="text-muted my-2 ff-secondary">
                                        Τα Οπωροφόρα Φυτά Γκλαβάκη αποτελούν την εξειδικευμένη μας μονάδα, αφιερωμένη στην παραγωγή δενδρυλλίων κορυφαίας ποιότητας για τον σύγχρονο Έλληνα δενδροκόμο.
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="d-flex p-3 bg-light rounded shadow-sm h-100">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm icon-effect">
                                        <div className="avatar-title bg-transparent text-success rounded-circle">
                                            <i className="ri-flask-line fs-36"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-18">Έρευνα & Ανάπτυξη</h5>
                                    <p className="text-muted my-2 ff-secondary">
                                        Το τμήμα R+D+i οδηγεί την καινοτομία, αναπτύσσοντας κλωνικές επιλογές και μελετώντας φυτά με δυναμική για βιομηχανίες όπως φαρμακευτική, ενέργεια και αγροδιατροφή.
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="d-flex p-3 bg-light rounded shadow-sm h-100">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm icon-effect">
                                        <div className="avatar-title bg-transparent text-success rounded-circle">
                                            <i className="ri-microscope-line fs-36"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-18">Συμμετοχή σε Έρευνες</h5>
                                    <p className="text-muted my-2 ff-secondary">
                                        Συμμετέχουμε ενεργά σε έργα όπως το GrEatFruit και το Fig ID, με στόχο την ανάδειξη σημαντικών ελληνικών ποικιλιών και την υποστήριξη του πρωτογενούς τομέα με επιστημονική τεκμηρίωση.
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={12}>
                            <div className="text-center mt-4">
                                <p className="text-muted ff-secondary fst-italic">
                                    «Η δέσμευσή μας είναι να προσφέρουμε φυτικό υλικό κορυφαίας ποιότητας και να στηρίζουμε τον σύγχρονο αγρότη με γνώσεις, τεχνικές και νέες καλλιέργειες.»
                                </p>
                                <h6 className="mt-3 text-success">Βαγγέλης Γκλαβάκης</h6>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Services;
