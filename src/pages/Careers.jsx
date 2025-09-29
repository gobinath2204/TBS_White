import React, { useState } from "react";
import "./Careers.css";

const Careers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);

  // Dummy data for UK automotive jobs
  const jobs = [
    {
      id: 1,
      title: "Automotive Engineer",
      location: "Birmingham, UK",
      type: "Full-time",
      description:
        "Design and develop next-generation vehicle systems for electric vehicles.",
      fullDescription: `Lead the development of EV propulsion systems. Responsibilities include:
      - Designing battery management systems
      - Optimizing thermal management solutions
      - Collaborating with cross-functional teams
      - Conducting prototype testing and validation
      
      Requirements:
      - Bachelor's in Mechanical/Electrical Engineering
      - 5+ years automotive experience
      - Expertise in CAD software`,
    },
    {
      id: 2,
      title: "Production Manager",
      location: "Coventry, UK",
      type: "Contract",
      description:
        "Oversee manufacturing processes in automotive assembly plant",
      fullDescription: `Manage daily operations of production line. Key responsibilities:
      - Optimize manufacturing workflows
      - Ensure production targets are met
      - Implement lean manufacturing principles
      - Supervise team of 50+ technicians
      
      Requirements:
      - Degree in Industrial Engineering
      - 8+ years automotive production experience
      - Six Sigma certification preferred`,
    },
    {
      id: 3,
      title: "Quality Assurance Specialist",
      location: "London, UK",
      type: "Full-time",
      description:
        "Ensure vehicle quality meets industry standards and regulations",
      fullDescription: `Conduct comprehensive quality checks throughout production process.
      Responsibilities include:
      - Develop QA test procedures
      - Analyze defect metrics
      - Coordinate with suppliers on parts quality
      - Ensure compliance with ISO 9001
      
      Requirements:
      - Bachelor's in Mechanical Engineering
      - 3+ years QA experience
      - Knowledge of automotive safety standards`,
    },
  ];

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="careers-container">
      <h1 className="h1">Career Opportunities</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search automotive jobs..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Job cards in horizontal row */}
      <div className="job-listings">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="job-card"
            onClick={() => setSelectedJob(job)}
          >
            <h3>{job.title}</h3>
            <div className="job-meta">
              <span className="location">{job.location}</span>
              <span className="type">{job.type}</span>
            </div>
            <p className="job-description">{job.description}</p>
          </div>
        ))}
      </div>

      {/* Popup modal for job details */}
      {selectedJob && (
        <div className="modal-overlay" onClick={() => setSelectedJob(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <h2>{selectedJob.title}</h2>
            <p>
              <strong>Location:</strong> {selectedJob.location}
            </p>
            <p>
              <strong>Type:</strong> {selectedJob.type}
            </p>
            <p className="modal-description">{selectedJob.fullDescription}</p>
            <button className="apply-btn" onClick={() => alert("Apply functionality coming soon!")}>
              Apply
            </button>
            <button className="close-btn" onClick={() => setSelectedJob(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;
