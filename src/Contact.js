import React, { Component } from "react";
import { Col, Row } from 'reactstrap';
import GithubCircleIcon from 'mdi-react/GithubCircleIcon';
import LinkedinBoxIcon from 'mdi-react/LinkedinBoxIcon';
import TwitterIcon from 'mdi-react/TwitterIcon';
import GmailIcon from 'mdi-react/GmailIcon';
import StackOverflowIcon from 'mdi-react/StackOverflowIcon';
import DownloadIcon from 'mdi-react/DownloadIcon';

class Contact extends Component {
    render() {
        return (
            <div>
                <h1 className="display-3 font-light padding-b1">Connect with Me</h1>
                <Row>
                    <Col className="text-center">
                        <a href="mailto:nikhil.mehta@stonybrook.edu" title="Email Me">
                            <GmailIcon className="hover-icon" size={100}/>
                        </a>
                    </Col>
                    <Col className="text-center">
                        <a href="http://github.com/nsmehta" title="Github">
                            <GithubCircleIcon className="hover-icon" size={100}/>
                        </a>            
                    </Col>
                    <Col className="text-center">
                        <a href="https://www.linkedin.com/in/nikhilmehta19/" title="LinkedIn">
                            <LinkedinBoxIcon className="hover-icon" size={100}/>
                        </a>                
                    </Col>
                    <Col className="text-center">
                        <a href="https://twitter.com/the_nickme" title="Twitter">
                            <TwitterIcon className="hover-icon" size={100}/>
                        </a>
                    </Col>
                    <Col className="text-center">
                        < a href="https://stackoverflow.com/users/5835669/nikhil-mehta" title="StackOverflow">
                            <StackOverflowIcon className="hover-icon" size={100}/>
                        </a>
                    </Col>
                    <Col className="text-center">
                        < a href="https://app.box.com/v/nsmehta" target="_blank" rel="noopener noreferrer" title="View and Download Resume">
                            <DownloadIcon className="hover-icon" size={100}/>
                        </a>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Contact;