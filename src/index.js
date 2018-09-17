import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    Route,
    NavLink,
    HashRouter,
} from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Row,
    Col,
} from 'reactstrap';
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import 'bootstrap/dist/css/bootstrap.min.css';


class Body extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
          collapsed: true
        };
    }
    
    toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
    }

    closeNavbar() {
        if (this.state.collapsed !== true) {
        this.toggleNavbar();
        }
    }

    render() {
        return (
            <HashRouter>
                <header>
                    <Row>
                    <Col sm="12" md="12" lg="12">
                        <Navbar className="navbar-inverse" toggleable> 
                        <NavbarToggler className="navbar-light" right onClick={this.toggleNavbar} />
                        <NavbarBrand href="/">
                            <NavLink exact to="/">Nikhil Mehta</NavLink>
                        </NavbarBrand>
                        <Collapse isOpen={!this.state.collapsed} navbar>
                            <Nav navbar>
                            <NavItem onClick={this.toggleNavbar}>
                                <NavLink exact to="/">About</NavLink>
                            </NavItem>
                            <NavItem onClick={this.toggleNavbar}>
                                <NavLink to="/projects">Projects</NavLink>
                            </NavItem>
                            <NavItem onClick={this.toggleNavbar}>
                                <NavLink to="/contact">Contact</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                        </Navbar>
                        <div className="content">
                            <Route exact path="/" component={About}/>
                            <Route path="/projects" component={Projects}/>
                            <Route path="/contact" component={Contact}/>
                        </div>

                    </Col>
                    </Row>
                </header>

            </HashRouter>
        );
    }
}

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-dark text-center">
                <footer>
                <p>
                    &copy; 2018 Nikhil Mehta 
                </p>
                </footer>
            </div>
        )
    }
}

// ========================================

ReactDOM.render(
    <div>
        <Body />
        <Footer />
    </div>,
    document.getElementById('root')
);

