import React from "react";
import './Skills.css'; // Make sure to create this CSS file

function Skills() {
    const skills = [
        "GIS and Geomatics",
        "Land Surveying",
        "Data Analysis",
        "AutoCAD and Civil 3D",
        "Project Management"
    ];

    return (
        <div className="skills-container">
            <div className="skill-title">
            <h3>Skills</h3>

            </div>
            <div className="skills-cards">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <h4>{skill}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
