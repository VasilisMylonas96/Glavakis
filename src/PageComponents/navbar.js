import React, { useState, useEffect } from "react";
import { Collapse, Container, NavbarToggler, NavLink } from "reactstrap";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";

// Import Images
import logodark from "../assets/glavakis/glavakistrees-logo.png";


const Navbar = () => {
    const [isOpenMenu, setisOpenMenu] = useState(false);
    const [navClass, setnavClass] = useState("");

    const toggle = () => setisOpenMenu(!isOpenMenu);

    useEffect(() => {
        window.addEventListener("scroll", scrollNavigation, true);
    });

    const scrollNavigation = () => {
        var scrollup = document.documentElement.scrollTop;
        if (scrollup > 50) {
            setnavClass("is-sticky");
        } else {
            setnavClass("");
        }
    }

    const [activeLink, setActiveLink] = useState();
    useEffect(() => {
        const activation = (event) => {
            const target = event.target;
            if (target) {
                target.classList.add('active');
                setActiveLink(target);
                if (activeLink && activeLink !== target) {
                    activeLink.classList.remove('active');
                }
            }
        };
        const defaultLink = document.querySelector('.navbar li.a.active');
        if (defaultLink) {
            defaultLink?.classList.add("active")
            setActiveLink(defaultLink)
        }
        const links = document.querySelectorAll('.navbar a');
        links.forEach((link) => {
            link.addEventListener('click', activation);
        });
        return () => {
            links.forEach((link) => {
                link.removeEventListener('click', activation);
            });
        };
    }, [activeLink]);

    return (
        <React.Fragment>
            <nav className={"navbar navbar-expand-lg navbar-landing fixed-top " + navClass} id="navbar">
                <Container>
                    <Link className="navbar-brand" to="/index">
                        <img src={logodark} className="card-logo card-logo-dark" alt="logo dark" style={{
    filter: 'brightness(0) saturate(100%) invert(34%) sepia(73%) saturate(706%) hue-rotate(76deg) brightness(90%) contrast(87%)'
  }} height="60" />
                        <img src={logodark} className="card-logo card-logo-light" alt="logo light" style={{
    filter: 'brightness(0) saturate(100%) invert(34%) sepia(73%) saturate(706%) hue-rotate(76deg) brightness(90%) contrast(87%)'
  }} height="60" />
                    </Link>

                    <NavbarToggler className="navbar-toggler py-0 fs-20 text-body" onClick={toggle} type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <i className="mdi mdi-menu"></i>
                    </NavbarToggler>

                    <Collapse
                        isOpen={isOpenMenu}
                        className="navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <Scrollspy
                            offset={-18}
                            items={[
                                "Home",
                                "services",
                                "reviews",
                                "team",
                                "contact",
                            ]}
                            currentClassName="active"
                            className="navbar-nav mx-auto mt-2 mt-lg-0"
                            id="navbar-example"
                        >
                            <li className="nav-item">
                                <NavLink href="#Home">ΑΡΧΙΚΗ</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink href="#services">ΥΠΗΡΕΣΙΕΣ</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink href="#reviews">ΚΡΙΤΙΚΕΣ</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink href="#team">ΟΜΑΔΑ</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink href="#contact">ΕΠΙΚΟΙΝΩΝΙΑ</NavLink>
                            </li> */}
                        </Scrollspy>

                     
                    </Collapse>
                </Container>
            </nav>
        </React.Fragment>
    );
};

export default Navbar;