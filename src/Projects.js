import React, { Component } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from 'mdi-react/SchoolIcon';
import WorkIcon from 'mdi-react/WorkIcon';
import LanguageCppIcon from 'mdi-react/LanguageCppIcon';
import LanguageCIcon from 'mdi-react/LanguageCIcon';
import LanguageJavascriptIcon from 'mdi-react/LanguageJavascriptIcon';
import LanguageHtml5Icon from 'mdi-react/LanguageHtml5Icon';
import LanguagePhpIcon from 'mdi-react/LanguagePhpIcon';
import LanguagePythonIcon from 'mdi-react/LanguagePythonIcon';
import AngularjsIcon from 'mdi-react/AngularjsIcon';
import JqueryIcon from 'mdi-react/JqueryIcon';



class Projects extends Component {

    createTimeline = () => {
        let timelineData = [
            {
                date: "Jan 2018 - Present",
                icon: <SchoolIcon />,
                title: "Space and Time Efficient Construction of CCDBG",
                subtitle: "Computational Biology Lab",
                p:  <p>
                        <LanguageCppIcon title="cpp"/>
                    </p>
            },
            {
                date: "Aug 2017 - Apr 2018",
                icon: <SchoolIcon />,
                title: "Preemptive and Multitasking OS",
                subtitle: "Operating System",
                p:  <p>
                        <LanguageCIcon/>
                        Assembly
                        GDB
                    </p>
            },
            {
                date: "Oct 2017 - Dec 2017",
                icon: <SchoolIcon />,
                title: "Phenotypic Prediction from Transcriptomic Features",
                subtitle: "Computational Biology",
                p:  <p>
                        <LanguagePythonIcon/>
                        Data Science
                    </p>
            },
            {
                date: "Aug 2017 - Nov 2017",
                icon: <SchoolIcon />,
                title: "The Searching Pacman",
                subtitle: "Artificial Intelligence",
                p:  <p>
                        <LanguagePythonIcon/>
                    </p>
            },
            {
                date: "Jul 2015 - Jul 2017",
                icon: <WorkIcon />,
                title: "Healthcare Financial Website",
                subtitle: "GS Lab",
                p:  <p>
                        <LanguagePhpIcon/>
                        <LanguagePythonIcon/>
                        <AngularjsIcon/>
                        <JqueryIcon/>
                        MySQL
                        RabbitMQ
                        MongoDB
                    </p>
            },
            {
                date: "Jul 2016 - Sep 2016",
                icon: <WorkIcon />,
                title: "Online Marketplace Analysis",
                subtitle: "GS Lab",
                p:  <p>
                        <LanguagePhpIcon/>
                        <LanguagePythonIcon/>
                        <AngularjsIcon/>
                        MySQL
                        RabbitMQ
                        Highcharts
                        Cron-jobs
                    </p>
            },
            {
                date: "Jun 2014 - May 2015",
                icon: <SchoolIcon />,
                title: "Marathi to English Translator for Simple Sentences",
                subtitle: "Undergrad Major Project",
                p:  <p>
                        NLP
                        Java
                        <LanguageJavascriptIcon />
                        <LanguageHtml5Icon />
                    </p>
            },

        ];
        return (
            <VerticalTimeline>
                {timelineData.map(data => (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date={data.date}
                        iconStyle={{ background: '#6ead3a', color: '#222022' }}
                        icon={data.icon}
                    >
                        <h3 className="vertical-timeline-element-title">{data.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{data.subtitle}</h4>
                        {data.p}
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        );

    }

    render() {
        return (
            <div>
                <h1 className="display-3 font-light">Projects</h1>
                {this.createTimeline()}
            </div>
        );
    }
}

export default Projects;