import React from 'react';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';
import { motion } from 'framer-motion';
import './Home.css'; // Custom CSS styles

const Home = () => {
    return (
        <React.Fragment>
            <section className="section pb-0 hero-section" id="Home">
                <div className="bg-overlay bg-overlay-pattern"></div>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={10} sm={12}>
                            <motion.div 
                                className="text-center mt-lg-5 pt-5"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h1 className="display-6 fw-bold mb-4 lh-base">
                                    Καλώς ήρθατε στο <span className="text-highlight">Εργαστήριο Χημείας & Βιοχημείας Τροφίμων</span> του ΑΠΘ
                                </h1>
                                <p className="lead text-muted mb-5">Το Εργαστήριο διαθέτει υποδομή για προηγμένες αναλύσεις και έρευνα στον χώρο της επιστήμης τροφίμων.</p>

                                <motion.div 
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <h3 className="section-heading mb-4">🧪 Τεχνολογίες & Δυνατότητες</h3>
                                    <ListGroup className="custom-list mb-5">
                                        {[
                                            ["Απομόνωση λειτουργικών συστατικών", "Από φυτικές και ζωικές πρώτες ύλες με σύγχρονες τεχνικές εκχύλισης"],
                                            ["Χαρακτηρισμός ενώσεων", "Μέσω φασματοσκοπίας RAMAN, FT-IR, FT-NIR και HPLC"],
                                            ["Ανάλυση θρεπτικών συστατικών", "Πρωτεΐνες, λιπαρά οξέα, αμινοξέα, οργανικά οξέα"],
                                            ["Οργανοληπτική αξιολόγηση", "Από εκπαιδευμένους δοκιμαστές σε ειδικά διαμορφωμένο χώρο"],
                                            ["Φυσικοχημική ανάλυση", "Χρώμα, υφή, ρεολογία, θερμικές ιδιότητες"],
                                            ["Σταθεροποίηση συστατικών", "Μέσω τεχνικών ενθυλάκωσης"],
                                        ].map(([title, desc], idx) => (
                                            <ListGroupItem key={idx} className="custom-list-item">
                                                <strong>{title}:</strong> {desc}
                                            </ListGroupItem>
                                        ))}
                                    </ListGroup>
                                </motion.div>

                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <h1 className="display-6 fw-bold mb-3 mt-5">🤝 Συνεργασία με Glavakis Trees & Herbs</h1>
                                    <p className="lead text-muted mb-4">Έρευνα & Ανάπτυξη νέων προϊόντων με βάση την ελληνική βιοποικιλότητα.</p>

                                    <h3 className="section-heading mt-4 mb-4">🌱 Αξίες & Προσφορές Glavakis</h3>
                                    <Row>
                                        {[
                                            ["Αφοσίωση", "Σε τοπικές κλωνικές επιλογές της ελληνικής χλωρίδας"],
                                            ["Υπευθυνότητα", "Βιοποικιλότητα και βιώσιμη ανάπτυξη"],
                                            ["Έρευνα & Ανάπτυξη", "Πολλαπλασιαστικό υλικό & φυτογενετικοί πόροι"],
                                            ["Συνεργασία", "Στο έργο Fig ID για γηγενείς ποικιλίες συκιάς"],
                                        ].map(([title, desc], idx) => (
                                            <Col md={6} key={idx}>
                                                <motion.div 
                                                    whileHover={{ scale: 1.05 }}
                                                    className="card custom-card mb-4 shadow"
                                                >
                                                    <div className="card-body">
                                                        <h5 className="card-title">{title}</h5>
                                                        <p className="card-text">{desc}</p>
                                                    </div>
                                                </motion.div>
                                            </Col>
                                        ))}
                                    </Row>
                                </motion.div>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
                <div style={{height:"200px"}}></div>
                <div className="position-absolute start-0 end-0 bottom-0 hero-shape-svg pt-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
                        <path d="M 0,118 C 288,98.6 1152,40.4 1440,21L1440 140L0 140z" fill="#f3f4f6"></path>
                    </svg>
                </div>
                
            </section>
        </React.Fragment>
    );
};

export default Home;
