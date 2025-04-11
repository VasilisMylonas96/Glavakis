import React from 'react';
import { Col, Container, Row } from 'reactstrap';

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Reviews = () => {
    return (
        <React.Fragment>
            <section className="section bg-primary" id="reviews">
                <div className="bg-overlay bg-overlay-pattern"></div>
                <Container>
                    <Row className="justify-content-center">
                    <Col lg={10}>
    <div className="text-center">
        <div>
            <i className="ri-double-quotes-l text-success display-3"></i>
        </div>
        <h4 className="text-white mb-5"><span className="text-success">5k</span>+ Ικανοποιημένοι Πελάτες</h4>

        <Swiper modules={[Navigation, Pagination, Autoplay]} pagination={{ clickable: true }} navigation={true} loop={true} autoplay={{ delay: 2500, disableOnInteraction: false }} className="mySwiper swiper client-review-swiper rounded">
            <div className="swiper-wrapper">
                <SwiperSlide>
                    <div className="row justify-content-center">
                        <div className="col-10">
                            <div className="text-white-50">
                                <p className="fs-20 ff-secondary mb-4">"Αγοράσαμε φυτά για τον κήπο μας και είμαστε ενθουσιασμένοι! Τα φυτά είναι υγιή και φροντισμένα, και ο κήπος μας δείχνει καταπληκτικά. Σας ευχαριστούμε για την εξαιρετική εξυπηρέτηση!"</p>

                                <div>
                                    <h5 className="text-white">Γιώργος Παπαδόπουλος</h5>
                                    <p>- Ιδιοκτήτης Κήπου</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="row justify-content-center">
                        <div className="col-10">
                            <div className="text-white-50">
                                <p className="fs-20 ff-secondary mb-4">"Πολύ ευχαριστημένοι με τις συμβουλές και την εξυπηρέτηση! Ο κηπουρός μας καθοδήγησε στην επιλογή των κατάλληλων φυτών και η διαδικασία ήταν εξαιρετικά εύκολη. Σίγουρα θα ξαναγοράσουμε!"</p>

                                <div>
                                    <h5 className="text-white">Μαρία Κωνσταντίνου</h5>
                                    <p>- Πελάτης Κήπου</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="row justify-content-center">
                        <div className="col-10">
                            <div className="text-white-50">
                                <p className="fs-20 ff-secondary mb-4">"Εξαιρετικά φυτά και πολύ καλές τιμές! Έχω αγοράσει φυτά για τον κήπο μου και το σπίτι μου και όλα είναι πανέμορφα και υγιή. Σίγουρα θα επισκεφθώ το φυτώριο ξανά."</p>

                                <div>
                                    <h5 className="text-white">Αντώνης Σταμάτης</h5>
                                    <p>- Ιδιοκτήτης Κήπου και Εσωτερικού Χώρου</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </div>
            <div className="swiper-button-next bg-white rounded-circle"></div>
            <div className="swiper-button-prev bg-white rounded-circle"></div>
            <div className="swiper-pagination position-relative mt-4"></div>
        </Swiper>
    </div>
</Col>

                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Reviews;