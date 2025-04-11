import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import CountUp from "react-countup";

const Counter = () => {
    return (
        <React.Fragment>
            <section className="py-5 position-relative bg-light">
                <Container>
                    <Row className="text-center gy-4">
                        <Col lg={3} className="col-6">
                            <div>
                                <h2 className="mb-2"><span className="counter-value" data-target="500">
                                    <CountUp
                                        start={0}
                                        end={2000}
                                        duration={3}
                                    />
                                </span>
                                    +
                                </h2>
                                <div className="text-muted">Φυτά και Δέντρα Πουλήθηκαν</div>
                            </div>
                        </Col>

                        <Col lg={3} className="col-6">
                            <div>
                                <h2 className="mb-2"><span className="counter-value" data-target="15">
                                    <CountUp
                                        start={0}
                                        end={15}
                                        duration={3}
                                    />
                                </span>
                                </h2>
                                <div className="text-muted">Βραβεία Και Διακρίσεις</div>
                            </div>
                        </Col>

                        <Col lg={3} className="col-6">
                            <div>
                                <h2 className="mb-2"><span className="counter-value" data-target="3.2">
                                    <CountUp
                                        start={0}
                                        end={5.2}
                                        duration={3}
                                        decimal={1}
                                    />
                                </span>
                                    k
                                </h2>
                                <div className="text-muted">Ικανοποιημένοι Πελάτες</div>
                            </div>
                        </Col>

                        <Col lg={3} className="col-6">
                            <div>
                                <h2 className="mb-2"><span className="counter-value" data-target="20">
                                    <CountUp
                                        start={0}
                                        end={20}
                                        duration={3}
                                    />
                                </span>
                                </h2>
                                <div className="text-muted">Εργαζόμενοι</div>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>
        </React.Fragment>
    );
};

export default Counter;