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
                </Row>
                <h1 className="display-3 font-light">Intro</h1>
                    <p className="lead font-light">
                        I am a Computer Science Graduate student at Stony Brook University.<br />
                        Besides having done my Bachelor's from Savitribai Phule Pune University, India, I also have 2 years of work experience.<br />
                        Exploring JS frameworks, coding, reading books is what I do in my free time.<br />
                        I am interested in Systems, AI and Web Development.
                    </p>

                <Row>
                    <Col className="right-pad-0">
                    <Jumbotron className="intro-jumbo-dark" fluid>
                        <Container fluid>
                        <h1 className="display-3">Academics</h1>
                        <Card className="card-light">
                            <CardBody>
                                <CardTitle>Stony Brook University</CardTitle>
                                <CardSubtitle className="padding-b1">GPA: 3.63/4.0</CardSubtitle>
                                <Row>
                                    <Col>
                                        <strong>Relevant Courses:</strong>
                                        <ul>
                                            <li>CSE548 - Analysis of Algorithms</li>
                                            <li>CSE537 - Artificial Intelligence</li>
                                            <li>CSE549 - Computational Biology</li>
                                            <li>CSE506 - Operating Systems</li>
                                            <li>CSE535 - Asynchronous Systems</li>
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
                                    <li>Analyzed and optimized the application by compacting the database queries using lazy loading and identity mapping features of SQL Alchemy.</li>
                                    <li>Worked on highly scalable applications using Python Django framework for API development and ReactJS for the front-end. The management and deployment of applications (on AWS servers) is done using Docker.</li>
                                    <li>Also worked on Automation Testing of the created applications using Robot Framework.</li>
                                </ul>
                            </CardBody>
                        </Card>
                        <Card className="card-light">
                            <CardBody>
                                <CardTitle>Full-Stack Developer</CardTitle>
                                <CardSubtitle className="padding-b1">GS Lab, Pune, India</CardSubtitle>
                                <ul>
                                    <li>Worked as a full-stack web-applications developer to design and develop a healthcare-financial project.</li>
                                    <li>Part of a team which managed the entire project module. Developed, unit-tested and deployed the application on servers (AWS EC2 Ubuntu). The code versioning was maintained on GitHub. The project utilized the LAMP stack.</li>
                                    <li><b>Technology Stack:</b> AngularJS (front-end), PHP-MongoDB (middleware), and Java-MySQL (back-end). Ajax calls for communication with the back-end REST APIs. Cron Jobs were set up for periodic data analysis.</li>
                                    <li><b>Accomplishment:</b> Received two ‘Pat on the Back’ awards for outstanding contribution in the project</li>
                                    <li><b>Proof of Concepts (POCs):</b>
                                        <ul>
                                            <li>Analysed online shopping sites, set up using Magento and Shopify. Created webhooks to gather the sales and inventory data. Performed analysis to suggest best selling products and locations.</li>
                                            <li>Built an automated code analysis tool to provide the health metrics of the project before deployment.​ Mentored a new joiner for this project in terms of technology selection and technical details.</li>
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