import React from 'react';
import './Resources.css';

const resources = [
    { 
        title: 'Project Management Basics', 
        description: 'Learn the fundamentals of project management in our comprehensive guide.', 
        link: '#',
        image: require('../../assets/Project management basics.png')
    },
    { 
        title: 'PMP Exam Study Guide', 
        description: 'Our detailed study guide for the PMP exam to help you prepare effectively.', 
        link: '#',
        image: require('../../assets/Pmp exam study guide.png')
    },
    { 
        title: 'Agile Methodology Overview', 
        description: 'Understand Agile principles and practices for your project management needs.', 
        link: '#',
        image: require('../../assets/Agile methodology overview.png')
    },
    { 
        title: 'Free Project Templates', 
        description: 'Download our free project management templates to help manage your projects.', 
        link: '#',
        image: 'https://via.placeholder.com/300x200?text=Project+Templates'
    },
    { 
        title: 'Video Tutorial: Agile in Action', 
        description: 'Watch this tutorial to see Agile in action with real-life examples.', 
        link: '#',
        video: require('../../assets/Agile in action video.mp4')
    }
];

const Resources = () => {
    return (
        <div className="resources-page">
            <h1 className="resources-title">Resources</h1>
            <p className="resources-intro">
                Explore a range of resources that will help you enhance your skills and knowledge in project management.
            </p>
            <div className="resources-list">
                {resources.map((resource, index) => (
                    <div key={index} className="resource-card">
                        {resource.image && !resource.video && (
                            <img 
                                src={resource.image} 
                                alt={resource.title} 
                                className="resource-image" 
                            />
                        )}
                        {resource.video && (
                            <video 
                                controls 
                                className="resource-video" 
                                alt={resource.title}
                            >
                                <source src={resource.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                        <h3 className="resource-title">{resource.title}</h3>
                        <p className="resource-description">{resource.description}</p>
                        <a href={resource.link} className="resource-link">Learn More</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Resources;
