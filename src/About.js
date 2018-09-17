import React, { Component } from "react";
import {
    Jumbotron,
    Container,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Row,
    Col,
} from 'reactstrap';
import {Image} from 'react-bootstrap';
import photo from './photo.jpeg';

class About extends Component {
    render() {
        return (
            <div>
                <Row className="padding-t1">
                    <Col className="text-center" sm={6} md={4} lg={2}>
                            <Image src={photo} circle responsive className="rounded-circle"/>
                    </Col>
                    <Col sm={6} md={8} lg={10}>
                        <h1 className="display-3 font-light">Intro</h1>
                        <p className="lead font-light">
                            I am a Computer Science Graduate student at Stony Brook University.<br />
                            Besides having done my Bachelor's from Savitribai Phule Pune University, India, I also have 2 years of work experience.<br />
                            Exploring JS frameworks, coding, reading books is what I do in my free time.<br />
                            I am interested in Systems, AI and Web Development.
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col className="right-pad-0">
                    <Jumbotron className="intro-jumbo-dark" fluid>
                        <Container fluid>
                        <h1 className="display-3">Academics</h1>
                        <Card outline color="success" className="card-light">
                            <CardBody>
                                <CardTitle>Stony Brook University</CardTitle>
                                <CardSubtitle className="padding-b1">GPA: 3.63/4.0</CardSubtitle>
                                <Row>
                                    <Col>
                                        <strong>Teaching Assistant: CSE305 - Principles of Database Systems</strong>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <strong>Office Hours: Tue 10:30 am - 11:30 am</strong>
                                    </Col>
                                </Row>
                                <Row className="padding-b1">
                                    <Col>
                                        <strong>Location: 2217 in Old Computer Science Building</strong>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <strong>Relevant Courses:</strong>
                                        <ul>
                                            <li>CSE548 - Analysis of Algorithms</li>
                                            <li>CSE537 - Artificial Intelligence</li>
                                            <li>CSE549 - Computational Biology</li>
                                            <li>CSE506 - Operating Systems</li>
                                            <li>CSE519 - Data Science Fundamentals</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <Card className="card-light">
                            <CardBody>
                                <CardTitle>Savitribai Phule Pune University</CardTitle>
                                <CardSubtitle className="padding-b1">Grade: First Class with Distinction</CardSubtitle>
                                <Row>
                                    <Col>
                                        <strong>Relevant Courses:</strong>
                                        <ul>
                                            <li>Distributed  Operating Systems</li>
                                            <li>Computer Networks</li>
                                            <li>Principles of Compiler Design</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        </Container>
                    </Jumbotron>
                    </Col>
                    <Col className="left-pad-0">
                    <Jumbotron className="intro-jumbo-dark" fluid>
                        <Container fluid>
                        <h1 className="display-3">Work Experience</h1>
                        <p className="lead">
                        <Card className="card-light">
                            <CardBody>
                                <CardTitle>Software Developer Intern</CardTitle>
                                <CardSubtitle className="padding-b1">Cox Automotive, NY</CardSubtitle>
                                <ul>
                                    <li>Analyzed and optimized PostgreSQL database queries using lazy loading and identity mapping in SQL Alchemy</li>
                                    <li>Enhanced highly scalable applications using Django and ReactJS. Used Docker to containerize the application</li>
                                    <li>Built keywords to automate testing of UI components using Robot Framework (Python)</li>
                                </ul>
                            </CardBody>
                        </Card>
                        <Card className="card-light">
                            <CardBody>
                                <CardTitle>Full-Stack Developer</CardTitle>
                                <CardSubtitle className="padding-b1">GS Lab, Pune, India</CardSubtitle>
                                <ul>
                                    <li>Worked as a Full-Stack Web Developer. Designed and developed a healthcare-financial project using LAMP stack</li>
                                    <li>Developed, unit-tested and deployed the single-page application on AWS EC2 servers; created iOS and Android apps for the same</li>
                                    <li><b>Technology Stack:</b> AngularJS-Bootstrap (front-end), PHP-MongoDB (middleware), and Java-MySQL (back-end)</li>
                                    <li><b>Accomplishments:</b> Received two ‘Pat on the Back’ awards for outstanding contribution in the project; Mentored a new joiner on the project</li>
                                    <li><b>Proof of Concepts (POCs):</b>
                                        <ul>
                                            <li>Built a tool to analyze online shopping site data and suggest best-selling products and locations</li>
                                            <li>Created webhooks to periodically gather the sales and inventory data for analysis using Cron Jobs</li>
                                            <li>Built an automated code analysis tool to provide the health metrics of the project before deployment</li>
                                        </ul>
                                    </li>
                                </ul>
                            </CardBody>
                        </Card>
                        </p>
                        </Container>
                    </Jumbotron>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default About;