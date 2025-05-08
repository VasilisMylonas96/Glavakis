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
                        <h1 className="display-5 fw-bold mb-4 lh-base text-gradient">
                            ΕΘΝΙΚΟ ΚΕΝΤΡΟ ΕΡΕΥΝΑΣ ΚΑΙ ΤΕΧΝΟΛΟΓΙΚΗΣ ΑΝΑΠΤΥΞΗΣ <span className="text-highlight">(CERTH)</span>
                        </h1>
                        <p className="lead text-muted mb-5">
                            Το ΕΚΕΤΑ είναι ένα από τα σημαντικότερα ερευνητικά κέντρα στην Ελλάδα και την Ευρώπη, στην πρώτη γραμμή καινοτόμου, βασικής & εφαρμοσμένης έρευνας για λύσεις στις σύγχρονες προκλήσεις.
                        </p>

                        <motion.div 
                            whileHover={{ scale: 1.02 }} 
                            className="bg-light p-4 rounded shadow mb-5 text-start"
                        >
                            <h3 className="mb-3">Ινστιτούτο Βιο-Οικονομίας και Αγρο-Τεχνολογίας (iBO)</h3>
                            <p className="text-muted">
                                Το iBO είναι ένα από τα 5 Ινστιτούτα του ΕΚΕΤΑ και επικεντρώνεται στην αγροτεχνολογία και τα βιο-συστήματα. Ενσωματώνει την κυκλική οικονομία και βιωσιμότητα με στόχο την περιβαλλοντική διαχείριση και καινοτομία.
                            </p>
                        </motion.div>

                        <motion.div 
                            whileHover={{ scale: 1.02 }} 
                            className="bg-light p-4 rounded shadow mb-5 text-start"
                        >
                            <h3 className="mb-3">Εργαστήριο Περιβαλλοντικής Μηχανικής & Αειφορίας (EnvES Lab)</h3>
                            <p className="text-muted">
                                Το EnvES επικεντρώνεται στις διασυνδέσεις μεταξύ περιβάλλοντος, ενέργειας και ποιότητας ζωής. Χρησιμοποιεί τεχνολογίες περιβαλλοντικής πληροφορικής και εργαλεία αξιολόγησης για βιώσιμες λύσεις, στο πλαίσιο της Κυκλικής Οικονομίας.
                            </p>
                        </motion.div>

                        <Row className="mt-4">
                            <Col md={6}>
                                <motion.ul 
                                    className="list-unstyled text-start"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    {[
                                        "🔁 Κυκλική Βιο-οικονομία & Διαχείριση βιο-αποβλήτων",
                                        "🌱 Βιώσιμη παραγωγή & ποιότητα αέρα",
                                        "🧪 Ανάπτυξη εργαλείων αειφορικής αξιολόγησης",
                                        "🛰️ Ψηφιοποίηση πράσινων αλυσίδων αξίας",
                                        "🌍 Αποδοτικότητα πόρων & χαμηλό οικολογικό αποτύπωμα"
                                    ].map((item, i) => (
                                        <motion.li 
                                            key={i} 
                                            className="mb-2 list-hover"
                                            whileHover={{ x: 10, color: "#28a745" }}
                                        >
                                            {item}
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </Col>

                            <Col md={6}>
                                <motion.div 
                                    className="bg-white p-4 rounded shadow link-box"
                                    whileHover={{ scale: 1.01 }}
                                >
                                    <h5 className="fw-bold mb-3">🔗 Χρήσιμοι Σύνδεσμοι:</h5>
                                    <ul className="list-unstyled">
                                        {[
                                            { text: "CERTH Website", url: "https://www.certh.gr/root.en.aspx" },
                                            { text: "iBO Website", url: "https://ibo.certh.gr/" },
                                            { text: "CERTH LinkedIn", url: "https://www.linkedin.com/company/certh/posts/" },
                                            { text: "iBO LinkedIn", url: "https://www.linkedin.com/company/institute-for-bio-economy-and-agri-technology/" },
                                            { text: "EnvES LinkedIn", url: "https://www.linkedin.com/company/environmental-engineering-and-sustainability-lab-enves/" },
                                            { text: "CERTH Facebook", url: "https://www.facebook.com/CERTHellas/" },
                                            { text: "iBO Facebook", url: "https://www.facebook.com/ibocerthofficial/" }
                                        ].map((link, i) => (
                                            <li key={i}>
                                                <a 
                                                    href={link.url} 
                                                    target="_blank" 
                                                    rel="noreferrer" 
                                                    className="link-hover"
                                                >
                                                    {link.text}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </Col>
                        </Row>
                    </motion.div>
                </Col>
            </Row>

            <style jsx>{`
                .text-highlight {
                    background: linear-gradient(90deg, #18b0a7, #2f81f7);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .text-gradient {
                    background: linear-gradient(90deg, #1f2937, #4b5563);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .link-hover {
                    color: #007bff;
                    transition: all 0.3s ease;
                    text-decoration: none;
                }
                .link-hover:hover {
                    color: #0056b3;
                    text-decoration: underline;
                }
                .list-hover {
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                .link-box {
                    border-left: 4px solid #2f81f7;
                }
            `}</style>
        </Container>
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
                                    <span className="text-highlight">Εργαστήριο Χημείας & Βιοχημείας Τροφίμων</span> του ΑΠΘ
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
                                    <h1 className="display-6 fw-bold mb-3 mt-5">🤝 Glavakis Trees & Herbs</h1>
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
